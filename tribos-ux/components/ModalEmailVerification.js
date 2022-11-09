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
                        <h1 className={styles.modal_email_verification_title}>Por favor, verifique o seu email!</h1>
                        <span className={styles.modal_email_verification_span}>Nós enviamos um e-mail para youremail@email.com, clique no link para confirmar sua alteração.</span>
                        <div className={styles.modal_email_verification_btns}>
                            <button className={styles.modal_email_verification_send_again}>Enviar novamente </button>
                            <button className={styles.modal_email_verification_confirm}>Confirmar</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
