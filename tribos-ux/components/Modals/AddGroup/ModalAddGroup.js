import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import GroupsForm from '../../GroupsList/GroupsForm'
import styles from '../../Modals/AddGroup/ModalAddGroup.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 544,
  height: 457,
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

export default function ModalEditInfo() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div className={styles.add_group_btn}>
        <button onClick={handleOpen}>Criar Grupo</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.groups_form}>
            <GroupsForm />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
