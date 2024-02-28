import {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import GiphyDialog from "../dialog/GiphyDialog";

const GiphyTable = (props) => {
    const {data} = props;

    const [selectedGifUrl, setSelectedGifUrl] = useState(null);

    const handleSelectedUrl = (url) => {
        setSelectedGifUrl(url);
    }

    const handleDeselectUrl = () => {
        setSelectedGifUrl(null);
    }

    return (
        <>
            <GiphyDialog isOpen={!!selectedGifUrl} url={selectedGifUrl} onClose={handleDeselectUrl} />
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Gifs</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((row) => (
                            <TableRow
                                key={row.url}
                            >
                                <TableCell onClick={() => handleSelectedUrl(row.images.downsized_large.url)}>
                                    <img src={row.images.downsized.url} width="200" height="200"/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export default GiphyTable;