import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GiphyTable from '../table/GiphyTable';

const GiphyForm = () => {
    const [word, setWord] = useState();
    const [limit, setLimit] = useState(20);
    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);


    const handleOnSubmit = async () => {
        setOffset(limit);
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?&q=${word}}&limit=${limit}&api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa`);
            const gifs = await response.json();
            setData(gifs.data);
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeWord = (event) => {
        setWord(event.target.value);
    }

    const onChangeLimit = (event) => {
        setLimit(event.target.value);
    }

    const handleShowMore = async () => {
        setOffset(offset + limit);
        const localData = [...data]
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?&q=${word}}&limit=${limit}&api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&offset=${offset}`);
            const gifs = await response.json();
            for (let i = 0; i < gifs.data.length; i++) {
                localData.push(gifs.data[i]);
            }
            setData(localData);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Box
                sx={{
                    alignItems: 'baseline',
                    display: 'flex',
                    gap: '20px',
                    marginTop: '20px',
                }}
            >
                <TextField onChange={onChangeWord} label="Word" variant="outlined"/>
                <TextField onChange={onChangeLimit} label="Limit" variant="outlined" type="number"/>
                <Button onClick={handleOnSubmit} variant="text">Submit</Button>
            </Box>
            <GiphyTable data={data}/>
            {data.length > 0 && <Button onClick={handleShowMore} variant="text">Show More</Button>}
        </>
    )
};

export default GiphyForm;