import { InputAdornment, Radio, RadioGroup, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import FormControl from '@mui/material/FormControl/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { AgendaIconGray, SearchIcon, sinalMais } from '../../common/Icons'
import styles from './ModalCreateTask.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 544,
  height: 'auto',
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

export default function ModalCreateTask({ open, handleOpen, handleClose }) {
  const [selectedValue, setSelectedValue] = React.useState('gray')

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
              className={styles.form_descricao}
              InputLabelProps={{ shrink: true }}
              placeholder={'Digite um título'}
              id="titulo"
              type="text"
              label={
                <Typography
                  sx={{ fontWeight: '700', fontSize: '1em', color: '#000' }}
                >
                  Título
                </Typography>
              }
              sx={{
                borderRadius: '1rem',
                '& .MuiFormLabel-root': {
                  display: 'flex',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                },
              }}
              required
            />
          </FormControl>
          <FormControl className={styles.form_descricao}>
            <TextField
              fullWidth
              className={styles.form_descricao}
              label={
                <Typography
                  sx={{ fontWeight: '700', fontSize: '1em', color: '#000' }}
                >
                  Descrição
                </Typography>
              }
              sx={{
                borderRadius: '1rem',
                '& .MuiFormLabel-root': {
                  display: 'flex',
                  margin: '0 auto',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                },
              }}
              required
              InputLabelProps={{ shrink: true }}
              placeholder={'Digite uma descrição'}
              id="descricao"
              type="text"
            />
          </FormControl>
          <FormControl
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">
              Cor da Tarefa
            </FormLabel>

            <Radio
              checked={selectedValue === 'gray'}
              onChange={handleChange}
              value="gray"
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: '#E0E2E5',
                '&.Mui-checked': {
                  color: '#E0E2E5',
                },
              }}
              name="radio-buttons"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Radio
              checked={selectedValue === 'blue'}
              onChange={handleChange}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: '#2D5BFF',
                '&.Mui-checked': {
                  color: '#2D5BFF',
                },
              }}
              value="blue"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'B' }}
            />
            <Radio
              checked={selectedValue === 'yellow'}
              onChange={handleChange}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: '#F2A309',
                '&.Mui-checked': {
                  color: '#F2A309',
                },
              }}
              value="yellow"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'C' }}
            />
            <Radio
              checked={selectedValue === 'red'}
              onChange={handleChange}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                },
                color: '#E93C3C',
                '&.Mui-checked': {
                  color: '#E93C3C',
                },
              }}
              value="red"
              name="radio-buttons"
              inputProps={{ 'aria-label': 'C' }}
            />
          </FormControl>
          <FormControl className={styles.form_descricao}>
            <TextField
              fullWidth
              sx={{
                borderRadius: '1rem',
                '& .MuiFormLabel-root': {
                  display: 'flex',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                },
              }}
              className={styles.form_descricao}
              InputLabelProps={{ shrink: true }}
              placeholder={'Tipo de tarefa'}
              id="tarefa"
              type="text"
              required
              label={
                <Typography
                  sx={{ fontWeight: '700', fontSize: '1em', color: '#000' }}
                >
                  Tipo de tarefa
                </Typography>
              }
            />
          </FormControl>
          <FormControl
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: ' space-between',
            }}
          >
            <TextField
              InputLabelProps={{ shrink: true }}
              placeholder={'Selecione a data'}
              id="inicio"
              type="date"
              label={
                <Typography
                  sx={{ fontWeight: '700', fontSize: '1em', color: '#000' }}
                >
                  Início
                </Typography>
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <AgendaIconGray />
                  </InputAdornment>
                ),
              }}
              required
              sx={{
                width: '232px',
                borderRadius: '1rem',
                '& .MuiFormLabel-root': {
                  display: 'flex',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                },
              }}
            />

            <TextField
              label={
                <Typography
                  sx={{ fontWeight: '700', fontSize: '1em', color: '#000' }}
                >
                  Fim
                </Typography>
              }
              InputLabelProps={{ shrink: true }}
              placeholder={'Selecione a data'}
              id="fim"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <AgendaIconGray />
                  </InputAdornment>
                ),
              }}
              sx={{
                width: '232px',
                borderRadius: '1rem',
                '& .MuiFormLabel-root': {
                  display: 'flex',
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '1rem',
                  fontWeight: 'bold',
                },
              }}
              type="date"
              required
            />
          </FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              sx={{
                backgroundColor: '#FBFBFC',
                borderRadius: '1rem',
                maxHeight: '54px',
                padding: '1rem 4.65rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                border: ' solid 1px',
                borderColor: '#344054',
                width: '232px',
                fontFamily: 'Montserrat',
                color: '#344054',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#A9B2C2',
                },
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: '#D87036',
                borderRadius: '1rem',
                maxHeight: '54px',
                padding: '1rem 4.65rem',
                fontSize: '1.125rem',
                fontWeight: '700',
                width: '232px',
                fontFamily: 'Montserrat',
                color: '#FFFFFF',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#EE9B6D',
                },
              }}
            >
              Salvar
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  )
}
