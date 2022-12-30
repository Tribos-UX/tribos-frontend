import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import styles from '../../Modals/AddGroupDetails/ModalAddGroupDetails.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 644,
  height: 557,
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

export default function ModalEditInfo() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className={styles.add_details_btn}>
        <button onClick={handleOpen}>Detalhes do grupo</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.groups_form}>
            <h1>
              [PROCURA-SE UI DESIGNER] Grupo paulista de UX criado com o
              objetivo de construir um case real para portfolio. Encontros
              virtuais semanais de grupo moderado.
            </h1>
            <h2>Interessado? Junte-se ao grupo!</h2>
            <span>example.link.discord.com</span>
            <button>Entrar no grupo</button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
