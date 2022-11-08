import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalEditInfo.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 457,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
};

export default function ModalEditInfo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Edit Info</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <strong>Editar minhas informações</strong>
                        </Typography>
                        <fieldset className={styles.modal_input}>
                            <legend>Nome</legend>
                            <input
                                placeholder="Digite seu nome"
                                type="text"
                            />
                        </fieldset>
                        <fieldset className={styles.modal_input}>
                            <legend>Função</legend>
                            <input
                                placeholder="Qual sua função atual ou a que almeja?"
                                type="text"
                            />
                        </fieldset>
                        <div className={styles.modal_btns}>
                            <button className={styles.modal_cancel_btn}>Cancelar</button>
                            <button className={styles.modal_save_btn} >Salvar</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
