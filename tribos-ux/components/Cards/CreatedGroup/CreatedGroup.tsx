import ModalEditGroupInfo from '@/components/Modals/Group/ModalEditGroupInfo'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Grupos from 'pages/dashboard/group/moderador'
import * as React from 'react'
import styles from './CreatedGroup.module.scss'

const style = {
  width: '105px',
  backgroundColor: '#d87036',
  borderRadius: '16px',
  marginTop: '0',

  '&:hover': {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
  },
}

export default function CardProfile({
  description,
  cidade,
  discord,
  membros,
  privacidade,
}) {
  const [openModal, setOpenModal] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  return (
    <>
      <Card sx={{ width: 786, height: 406 }}>
        <div className={styles.card_new_group_content}>
          <div className={styles.card_new_group_description}>
            <strong>Descrição</strong>
            <p>{description}</p>
          </div>
          <div className={styles.card_new_group_location}>
            <strong>Membros</strong>
            <p>{membros}</p>
          </div>
          <div className={styles.card_new_group_location}>
            <strong>Cidade/Estado</strong>
            <span>{cidade}</span>
          </div>
          <div className={styles.card_new_group_social}>
            <strong>Canal de comunicação</strong>
            <span>linkedin.com/felipesoares123</span>
            <span>behance.com/felipesoares123</span>
          </div>
          <div className={styles.card_new_group_tag}>
            <strong> Privacidade </strong>
            <span>{privacidade}</span>
          </div>
          <Button
            variant="contained"
            sx={style}
            onClick={() => setOpenModal(!openModal)}
          >
            Editar
          </Button>
        </div>
      </Card>
      {
        <ModalEditGroupInfo
          open={openModal}
          handleOpen={() => handleOpen}
          handleClose={() => handleClose()}
        />
      }
    </>
  )
}
