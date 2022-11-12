import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalEditInfo2.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 660,
    height: 700,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
};

export default function ModalEditInfo2() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className={styles.modal_edit_info2_btn}>
                <button onClick={handleOpen}>Editar</button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <h1 className={styles.modal_edit_info_2_title}>Editar minhas informações</h1>
                        <fieldset className={styles.modal_input}>
                            <legend>Sua descrição</legend>
                            <input
                                placeholder="Adicione uma breve descrição sobre você"
                                type="text"
                            />
                        </fieldset>
                        <fieldset className={styles.modal_input}>
                            <legend>LinkedIn</legend>
                            <input
                                placeholder="Link do seu perfil"
                                type="text"
                            />
                        </fieldset>
                        <fieldset className={styles.modal_input}>
                            <legend>Behance</legend>
                            <input
                                placeholder="Link do seu perfil"
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
