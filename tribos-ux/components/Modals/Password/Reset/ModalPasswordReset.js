import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import styles from './ModalPasswordReset.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 544,
  height: 318,
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

export default function ModalPasswordReset() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

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
            <h1 className={styles.modal_password_reset_title}>
              Você editou sua senha!
            </h1>
            <span className={styles.modal_password_reset_span}>
              Sua senha foi editada com sucesso
            </span>
            <div className={styles.modal_confirm_btn}>
              <button>Confirm</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
