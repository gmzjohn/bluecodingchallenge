import * as React from 'react';
import Dialog from '@mui/material/Dialog';

const GiphyDialog = (props) => {
    const { isOpen, url, onClose } = props;

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                onClose={onClose}
            >
                <img src={url} />
            </Dialog>
        </React.Fragment>
    )
}

export default GiphyDialog;