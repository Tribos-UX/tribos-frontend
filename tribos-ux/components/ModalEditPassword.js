import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalEditPassword.module.scss";

import { ExclamationMark } from "../components/Icons";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 457,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
    p: 4,
};

export default function ModalEditInfo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Edit Password</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <strong>Quer mudar sua senha?</strong>
                        </Typography>
                        <fieldset className={styles.modal_input}>
                            <legend>Sua antiga senha</legend>
                            <input
                                placeholder="Digite sua antiga senha"
                                type="password"
                                name="password"
                            />
                        </fieldset>
                        <fieldset className={styles.modal_input}>
                            <legend>Nova senha</legend>
                            <input
                                placeholder="Digite sua nova senha"
                                type="password"
                                name="password"
                            />
                        </fieldset>
                        <div className={styles.password_advisor}>
                            <ExclamationMark />
                            <p>
                                Mínimo 8 caracteres, deve conter uma letra e um número.
                            </p>
                        </div>
                        <div className={styles.modal_confirm_btn}>
                            <button>Confirmar</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
