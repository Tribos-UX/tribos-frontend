import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalEmailVerification.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 240,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
};

export default function ModalEmailVerification() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Email Verification</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <strong>Por favor, verifique o seu email!</strong>
                        </Typography>
                        <span>Nós enviamos um e-mail para youremail@email.com, clique no link para confirmar sua alteração.</span>
                        <button>Enviar novamente </button>
                        <button>Confirmar</button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
