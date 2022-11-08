import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalCreateTask.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 500,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
    p: 4,
};

export default function ModalCreateTask() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Create Task</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <strong>Criar nova tarefa</strong>
                        </Typography>
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
