import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import ModalEditEmail from '../../Modals/Email/Edit/ModalEditEmail'
import ModalEditPassword from '../../Modals/Password/Edit/ModalEditPassword'
import styles from './CardAcessSettings.module.scss'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function CardAcessSettings({ email }) {
  return (
    <Card sx={{ width: 786, height: 214 }}>
      <CardContent>
        <div className={styles.card_acess_settings_email}>
          <div>
            <span>Email:</span>
            <span>{email}</span>
          </div>
          <CardActions>
            <ModalEditEmail />
          </CardActions>
        </div>
        <div className={styles.card_acess_settings_password}>
          <div>
            <span>Senha:</span>
            <span>*******</span>
          </div>
          <CardActions>
            <ModalEditPassword />
          </CardActions>
        </div>
      </CardContent>
    </Card>
  )
}
