import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog(props) {
    const {mensajeDialog} = props
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        <Button variant="contained" onClick={handleClickOpen}>
            Mensaje
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
            {"¿Estás de acuerdo?"}
            </DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {mensajeDialog}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Denegar</Button>
            <Button onClick={handleClose} autoFocus>
                Aceptar
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

