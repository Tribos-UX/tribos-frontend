import { Radio, RadioGroup, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import FormControl from '@mui/material/FormControl/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { sinalMais } from '../../common/Icons'
import styles from './ModalCreateTask.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 544,
  height: 500,
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

export default function ModalCreateTask({ open, handleOpen, handleClose }) {
  const [selectedValue, setSelectedValue] = React.useState('a')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={styles.box}>
          <h1 className={styles.modal_create_task_title}>Criar nova tarefa</h1>
          <FormControl className={styles.form_descricao}>
            <TextField
              fullWidth
              sx={{ borderRadius: '1rem' }}
              className={styles.form_descricao}
              label="Título"
              InputLabelProps={{ shrink: true }}
              placeholder={'Digite um título'}
              id="titulo"
              type="text"
              required
            />
          </FormControl>
          <FormControl className={styles.form_descricao}>
            <TextField
              fullWidth
              sx={{ borderRadius: '1rem' }}
              className={styles.form_descricao}
              label="Descricao"
              InputLabelProps={{ shrink: true }}
              placeholder={'Digite um título'}
              id="descricao"
              type="text"
              required
            />
          </FormControl>
          <FormControl
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              Cor da Tarefa
            </FormLabel>

            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
          </FormControl>
          <div className={styles.modal_btns}>
            <button className={styles.modal_cancel_btn}>Cancelar</button>
            <button className={styles.modal_save_btn}>Salvar</button>
          </div>
        </div>
      </Box>
    </Modal>
  )
}
