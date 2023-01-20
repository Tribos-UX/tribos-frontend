import { BehanceIcon } from '@/components/common/Icons'
import { areasUx } from '@/components/utils/areasUx'
import { estadosBR } from '@/components/utils/estadosBR'
import CloseIcon from '@mui/icons-material/Close'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Modal from '@mui/material/Modal'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

// Supabase
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './ModalEditGroupInfo.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 660,
  height: '100%',
  overflow: 'scroll',
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

const styleButton = {
  backgroundColor: '#d87036',
  marginTop: '0',
  height: '3rem',
  width: '290px',
  borderRadius: '1rem',
  color: '#344054',
  textTransform: 'none',
  fontWeight: '700',
  fontFamily: 'Montserrat',
  fontSize: '1.125rem',

  '&:hover': {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
  },
}

const styleInput = {
  '& label.Mui-focused': {
    color: '#000000',
  },
  '& .MuiFormLabel-root': {
    display: 'flex',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '1rem',
    fontFamily: 'Lato',
    '&.Mui-focused fieldset': {
      borderColor: '#D87036',
      border: '1px solid #D87036',
    },
  },
}

export default function ModalEditGroupInfo({ open, handleOpen, handleClose }) {
  const usuariosRef = useRef<HTMLInputElement>()
  const linkedinRef = useRef<HTMLInputElement>()
  const behanceRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const areasUxRef = useRef<HTMLInputElement>()
  const discordRef = useRef<HTMLInputElement>()
  const [uf, setUF] = React.useState('')
  const [municipios, setMunicipios] = useState([])
  const [loading, setLoading] = useState(false)
  const cidadeRef = useRef<HTMLInputElement>()
  const [openAutoComplete, setOpenAutoComplete] = useState(false)
  const [privacidade, setPrivacidade] = React.useState('privado')

  const router = useRouter()
  const { id } = router.query

  const handleChangeUf = (event: SelectChangeEvent) => {
    setUF(event.target.value)
  }
  const handleChangePrivacidade = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPrivacidade((event.target as HTMLInputElement).value)
  }

  const supabase = useSupabaseClient()
  const user = useUser()
  const [options, setOptions] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const objetivos = areasUxRef.current?.innerText.split(/\r?\n/)
    const membros = usuariosRef.current?.innerText.split(/\r?\n/)
    objetivos.pop()
    membros.pop()

    let { error } = await supabase.from('groups').upsert({
      id: id,
      description: descriptionRef.current.value,
      privacidade: privacidade,
      cidade: cidadeRef.current.value,
      objetivos: objetivos,
      membros: membros,
      uf: uf,
    })

    if (error) {
      console.log(error)
      alert(error.message)
      return setLoading(false)
    } else {
      return alert('Atualizado com sucesso!')
    }
  }

  useEffect(() => {
    setLoading(true)
    // Faça a requisição para a API quando o componente for montado
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios
    `)
      .then((response) => response.json())
      .then((data) => {
        setMunicipios(data)
      })
      .catch((error) => console.error(error))
    setLoading(false)
  }, [uf]) // Execute o efeito colateral apenas uma vez

  useEffect(() => {
    async function loadData() {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('username')

      if (error) console.error(error)

      setOptions(profiles)
    }
    // Only run query once user is logged in.
    if (user) loadData()
    console.log(options)
  }, [user])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form className={styles.box} onSubmit={handleSubmit}>
          <h1 className={styles.modal_edit_group_info}>
            Editar informações do grupo
            <IconButton
              onClick={() => handleClose(!open)}
              aria-label="close modal"
            >
              <CloseIcon />
            </IconButton>
          </h1>

          <FormControl className={styles.form_descricao}>
            <TextField
              fullWidth
              sx={styleInput}
              label={
                <Typography
                  sx={{
                    fontWeight: '700',
                    fontSize: '1em',
                    fontColor: '#00000',
                    fontFamily: 'Lato',
                  }}
                >
                  Descrição do Grupo
                </Typography>
              }
              className={styles.form_descricao}
              InputLabelProps={{ shrink: true }}
              multiline
              rows={3.8}
              placeholder={'Adicione uma breve descrição sobre o seu grupo.'}
              id="descrição"
              type="text"
              inputRef={descriptionRef}
              required
            />
          </FormControl>

          <label className={styles.label_areasux} htmlFor="tags-areasux">
            Objetivo do Grupo
          </label>
          <Autocomplete
            sx={styleInput}
            multiple
            id="tags-areasux"
            options={areasUx}
            getOptionLabel={(option) => option}
            defaultValue={[areasUx[1]]}
            filterSelectedOptions
            ref={areasUxRef}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Selecione os objetivos do seu grupo"
              />
            )}
          />
          <Box sx={{ display: 'flex', gap: '0.5rem' }}>
            <FormControl className={styles.form_cidade} sx={{ width: '294px' }}>
              <Autocomplete
                sx={{ marginTop: '0.5rem', borderRadius: '1rem' }}
                id="municipio"
                open={openAutoComplete}
                onOpen={() => {
                  setOpenAutoComplete(true)
                }}
                onClose={() => {
                  setOpenAutoComplete(false)
                }}
                noOptionsText="Selecione o Estado primeiro."
                isOptionEqualToValue={(option, value) =>
                  option.nome === value.nome
                }
                getOptionLabel={(option) => option.nome}
                options={municipios}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    inputRef={cidadeRef}
                    label="Cidade"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </FormControl>

            <FormControl
              className={styles.form_uf}
              sx={{
                top: '0.5rem',
                minWidth: 120,
                width: '294px',
                height: '56px',
              }}
            >
              <InputLabel shrink={true} id="estado">
                Estado
              </InputLabel>
              <Select
                sx={{
                  '& legend': { minWidth: '45px' },
                }}
                value={uf}
                label="Estado"
                onChange={handleChangeUf}
                displayEmpty
                defaultValue=""
              >
                <MenuItem value="">
                  <em>Estado que você está</em>
                </MenuItem>
                {estadosBR.map(({ estado, identificador }, index) => (
                  <MenuItem key={index} value={identificador}>
                    {estado}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <FormControl>
            <TextField
              fullWidth
              className={styles.form_linkedin}
              sx={styleInput}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkedInIcon />
                  </InputAdornment>
                ),
              }}
              label="LinkedIn"
              id="LinkedIn"
              inputRef={linkedinRef}
              placeholder={'Link do seu perfil'}
            />
          </FormControl>

          <FormControl>
            <TextField
              fullWidth
              className={styles.form_linkedin}
              sx={styleInput}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <BehanceIcon />
                  </InputAdornment>
                ),
              }}
              label="Behance"
              id="Behance"
              inputRef={behanceRef}
              placeholder={'Link do seu perfil'}
            />
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Privacidade do grupo
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={privacidade}
              onChange={handleChangePrivacidade}
            >
              <FormControlLabel
                value="Privado"
                control={<Radio />}
                label="Privado"
              />
              <FormControlLabel
                value="Público"
                control={<Radio />}
                label="Público"
              />
            </RadioGroup>
          </FormControl>

          <Autocomplete
            multiple
            sx={styleInput}
            id="tags-outlined"
            isOptionEqualToValue={(option, value) =>
              option?.username == value?.username
            }
            getOptionLabel={({ username }) => username}
            options={options}
            filterSelectedOptions
            ref={usuariosRef}
            renderInput={(params) => (
              <TextField {...params} placeholder="Adicionar participantes..." />
            )}
          />

          <div className={styles.modal_btns}>
            <Button
              variant="contained"
              sx={styleButton}
              onClick={() => handleClose(!open)}
            >
              Cancelar
            </Button>
            <Button type="submit" variant="contained" sx={styleButton}>
              Salvar
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
