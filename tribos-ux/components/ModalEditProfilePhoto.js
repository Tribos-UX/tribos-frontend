import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalEditProfilePhoto.module.scss";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 396,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
};

export default function ModalEditProfilePhoto() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Edit Profile Photo</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <h1 className={styles.modal_edit_profile_title}>Foto de perfil</h1>
                        <Box sx={{ width: 200, height: 200, borderRadius: '50%', bgcolor: '#F2F2F2' }}>
                        </Box>
                        <div className={styles.modal_edit_profile_btns}>
                            <button className={styles.modal_edit_btn}>Editar</button>
                            <button className={styles.modal_photo_btn} >Adicionar foto</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
