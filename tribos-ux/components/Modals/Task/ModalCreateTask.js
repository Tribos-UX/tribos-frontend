import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalCreateTask.module.scss";
import {
    sinalMais
} from "../../common/Icons"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 500,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
};

export default function ModalCreateTask() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className={styles.modal_create_task_btn} onClick={handleOpen}>{sinalMais}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <h1 className={styles.modal_create_task_title}>
                            Criar nova tarefa
                        </h1>
                        <fieldset className={styles.modal_input}>
                            <legend>Título</legend>
                            <input
                                placeholder="Digite um título"
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
