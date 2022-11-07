import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "./ModalPasswordReset.module.scss";
import { AiOutlineCheck } from 'react-icons/ai'

import { ExclamationMark } from "../components/Icons";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 544,
    height: 318,
    bgcolor: '#FBFBFC',
    borderRadius: '16px',
    p: 4,
};

export default function ModalPasswordReset() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Modal Password Reset</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className={styles.box}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <strong>Você editou sua senha!</strong>
                        </Typography>
                        <AiOutlineCheck color='green' size={80} />
                        <span>Sua senha foi editada com sucesso</span>
                        <div className={styles.modal_confirm_btn}>
                            <button>Confirm</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
