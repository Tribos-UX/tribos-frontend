import {
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  RadioProps,
  TextField,
} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

import FormControl from '@mui/material/FormControl/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import {
  AgendaIcon,
  AgendaIconOutline,
  InputCheck,
  SearchIcon,
  sinalMais,
} from '../../common/Icons'
import styles from './ModalCreateTask.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 544,
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

const styleBtn = {
  backgroundColor: '#d87036',
  marginTop: '0',
  height: '3rem',
  width: '232px',
  borderRadius: '1rem',
  textTransform: 'none',
  color: '#FFFFFF',
  fontSize: '1.125rem',
  fontWeight: '700',
  borderColor: '#344054',

  '&:hover': {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
    borderColor: '#344054',
  },
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
        <form className={styles.box}>
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
            sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FormLabel id="demo-radio-buttons-group-label">
              Cor da Tarefa
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ flexDirection: 'row', marginLeft: '1rem' }}
            >
              <FormControlLabel
                value="cinza"
                control={
                  <Radio
                    sx={{
                      color: '#E0E2E5',
                      '&.Mui-checked': {
                        color: '#E0E2E5',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="azul"
                control={
                  <Radio
                    sx={{
                      color: '#2D5BFF',
                      '&.Mui-checked': {
                        color: '#2D5BFF',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="amarelo"
                control={
                  <Radio
                    sx={{
                      color: '#F2A309',
                      '&.Mui-checked': {
                        color: '#F2A309',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                  />
                }
                label=""
              />
              <FormControlLabel
                value="vermelho"
                control={
                  <Radio
                    sx={{
                      color: '#E93C3C',
                      '&.Mui-checked': {
                        color: '#E93C3C',
                      },
                      '& .MuiSvgIcon-root': {
                        fontSize: 28,
                      },
                    }}
                  />
                }
                label=""
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              sx={{ borderRadius: '1rem' }}
              className={styles.form_descricao}
              label="Tipo de Tarefa"
              InputLabelProps={{ shrink: true }}
              placeholder={'Tipo de Tarefa'}
              id="tarefa"
              type="text"
              required
            />
          </FormControl>

          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <TextField
              type="date"
              className={styles.form_linkedin}
              sx={{ width: '232px', borderRadius: '1rem' }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <AgendaIconOutline />
                  </InputAdornment>
                ),
              }}
              label="Inicio"
              id="inicio"
              placeholder={'Selecione a data'}
            />
            <TextField
              type="date"
              className={styles.form_linkedin}
              sx={{ width: '232px', borderRadius: '1rem' }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <AgendaIconOutline />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              label="Fim"
              id="fim"
              placeholder={'Selecione a data'}
            />
          </Box>

          <div className={styles.modal_btns}>
            <Button sx={styleBtn} variant="outlined">
              Cancelar
            </Button>
            <Button sx={styleBtn} variant="outlined">
              Salvar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
