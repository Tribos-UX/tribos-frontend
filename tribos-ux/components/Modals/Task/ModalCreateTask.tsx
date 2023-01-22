import {
  IconButton,
  InputAdornment,
  Radio,
  styled,
  TextField,
} from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import FormControl from '@mui/material/FormControl/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'

import moment, { Moment } from 'moment'
import 'moment/locale/pt-br'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import * as React from 'react'
import { useRef, useState } from 'react'
import { AgendaIconGray, CloseIcon, SearchIcon } from '../../common/Icons'
import styles from './ModalCreateTask.module.scss'

import {
  DatePicker,
  PickersDay,
  pickersDayClasses,
  PickersDayProps,
  ptBR,
} from '@mui/x-date-pickers'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

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

const renderWeekPickerDay = (
  date: Moment,
  selectedDates: Array<Moment | null>,
  pickersDayProps: PickersDayProps<Moment>
) => {
  return (
    <PickersDay
      {...pickersDayProps}
      sx={{
        borderRadius: '100px',
        color: '#D87036',
        '&:hover, &:focus': {
          backgroundColor: '#D87036',
          color: '#52575C',
        },

        [`&&.${pickersDayClasses.selected}`]: {
          backgroundColor: '#D87036',
          color: '#FFFFFF',
        },
      }}
    />
  )
}

export default function ModalCreateTask({
  open,
  handleOpen,
  handleClose,
  tasks,
  newTask,
  setNewTask,
}) {
  const [colorValue, setColorValue] = React.useState('#E0E2E5')
  const supabase = useSupabaseClient()
  const user = useUser()

  const titleRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()

  const [startDate, setStartDate] = React.useState(moment())

  console.log(startDate)
  const [endDate, setEndDate] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    const tarefa = {
      user_id: user.id,
      task: titleRef.current.value,
      description: descriptionRef.current.value,
      color: colorValue,
      start_at: startDate,
      end_at: endDate,
      created_at: new Date().toISOString(),
    }

    let { error } = await supabase.from('todos').insert(tarefa)

    if (error) {
      console.log(error)
      alert(error.message)
      return setLoading(false)
    }

    setLoading(false)

    alert('Tarefa criada com sucesso!')
    setNewTask(!newTask)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={'pt-BR'}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={styles.box} onSubmit={handleSubmit}>
            <div className={styles.modal_create_task_title}>
              <h1>Criar nova tarefa</h1>
              <IconButton
                onClick={() => handleClose(!open)}
                aria-label="close modal"
              >
                <CloseIcon />
              </IconButton>
            </div>

            <FormControl className={styles.form_descricao}>
              <TextField
                fullWidth
                className={styles.form_descricao}
                InputLabelProps={{ shrink: true }}
                placeholder={'Digite um título'}
                id="titulo"
                type="text"
                inputRef={titleRef}
                label={
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: '700',
                      fontSize: '1em',
                      color: '#000',
                    }}
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
                    '&.Mui-focused fieldset': {
                      borderColor: '#D87036',
                      border: '1px solid #D87036',
                    },
                  },
                }}
                required
              />
            </FormControl>
            <FormControl className={styles.form_descricao}>
              <TextField
                fullWidth
                className={styles.form_descricao}
                inputRef={descriptionRef}
                label={
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: '700',
                      fontSize: '1em',
                      color: '#000',
                    }}
                  >
                    Descrição
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
                    '&.Mui-focused fieldset': {
                      borderColor: '#D87036',
                      border: '1px solid #D87036',
                    },
                  },
                }}
                InputLabelProps={{ shrink: true }}
                placeholder={'Digite uma descrição'}
                id="descricao"
                type="text"
              />
            </FormControl>
            <FormControl
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FormLabel
                sx={{ color: '#52575C', fontWeight: '700', fontFamily: 'Lato' }}
                id="demo-controlled-radio-buttons-group"
              >
                Cor da Tarefa
              </FormLabel>

              <Radio
                checked={colorValue === '#E0E2E5'}
                onChange={handleChange}
                value="#E0E2E5"
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
                checked={colorValue === '#2D5BFF'}
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
                value="#2D5BFF"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'B' }}
              />
              <Radio
                checked={colorValue === '#F2A309'}
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
                value="#F2A309"
                name="radio-buttons"
                inputProps={{ 'aria-label': 'C' }}
              />
              <Radio
                checked={colorValue === '#E93C3C'}
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
                value="#E93C3C"
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
                    '&.Mui-focused fieldset': {
                      borderColor: '#D87036',
                      border: '1px solid #D87036',
                    },
                  },
                }}
                InputLabelProps={{ shrink: true }}
                placeholder={'Tipo de tarefa'}
                id="tarefa"
                type="text"
                label={
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: '700',
                      fontSize: '1em',
                      color: '#000',
                    }}
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
              <DatePicker
                disablePast={true}
                value={startDate}
                renderDay={renderWeekPickerDay}
                onChange={(newValue) => setStartDate(newValue)}
                label={
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: '700',
                      fontSize: '1em',
                      color: '#000',
                    }}
                  >
                    Início
                  </Typography>
                }
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label={
                      <Typography
                        sx={{
                          fontFamily: 'Lato',
                          fontWeight: '700',
                          fontSize: '1em',
                          color: '#000',
                        }}
                      >
                        Inicio
                      </Typography>
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
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
                        '&.Mui-focused fieldset': {
                          borderColor: '#D87036',
                          border: '1px solid #D87036',
                        },
                      },
                    }}
                    {...params}
                  />
                )}
                components={{
                  OpenPickerIcon: AgendaIconGray,
                }}
                toolbarFormat="ddd DD MMMM"
              />

              <DatePicker
                disablePast={true}
                renderDay={renderWeekPickerDay}
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                minDate={startDate}
                label={
                  <Typography
                    sx={{
                      fontFamily: 'Lato',
                      fontWeight: '700',
                      fontSize: '1em',
                      color: '#000',
                    }}
                  >
                    Fim
                  </Typography>
                }
                renderInput={(params) => (
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    label={
                      <Typography
                        sx={{
                          fontFamily: 'Lato',
                          fontWeight: '700',
                          fontSize: '1em',
                          color: '#000',
                        }}
                      >
                        Inicio
                      </Typography>
                    }
                    sx={{
                      width: '232px',
                      borderRadius: '1rem',
                      '& .MuiFormLabel-root': {
                        display: 'flex',
                      },
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '1rem',
                        fontWeight: 'bold',
                        '&.Mui-focused fieldset': {
                          borderColor: '#D87036',
                          border: '1px solid #D87036',
                        },
                      },
                    }}
                    {...params}
                  />
                )}
                components={{
                  OpenPickerIcon: AgendaIconGray,
                }}
              />
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                onClick={() => handleClose(!open)}
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
    </LocalizationProvider>
  )
}
