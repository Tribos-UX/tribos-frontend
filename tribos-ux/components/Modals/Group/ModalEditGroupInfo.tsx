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
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import styles from './ModalEditGroupInfo.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 660,

  overflow: 'scroll',
  bgcolor: '#FBFBFC',
  borderRadius: '16px',
}

interface OptionsProps {
  username?: string
}

export default function ModalEditGroupInfo({ open, handleOpen, handleClose }) {
  const usuariosRef = useRef<HTMLInputElement>()
  const linkedinRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const areasUxRef = useRef<HTMLInputElement>()
  const [uf, setUF] = React.useState('')
  const [municipios, setMunicipios] = useState([])
  const [loading, setLoading] = useState(false)
  const cidadeRef = useRef<HTMLInputElement>()
  const [openAutoComplete, setOpenAutoComplete] = useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setUF(event.target.value)
  }

  const supabase = useSupabaseClient()
  const user = useUser()
  const [options, setOptions] = useState([])

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
      let { data: profiles, error } = await supabase
        .from('profiles')
        .select('username')

      setOptions(profiles)
    }
    // Only run query once user is logged in.
    if (user) loadData()
    console.log(options)
  }, [user])

  console.log(open)

  return (
    <Modal
      sx={{ overflow: 'scroll ' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form className={styles.box}>
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
              sx={{ width: '596px', borderRadius: '1rem' }}
              className={styles.form_descricao}
              label="Descrição do Grupo"
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

          <label>Objetivo do Grupo</label>
          <Autocomplete
            multiple
            id="tags-outlined"
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
          <Box sx={{ display: 'flex' }}>
            <FormControl
              className={styles.form_cidade}
              sx={{ minWidth: 120, maxWidth: '325px' }}
            >
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
                marginTop: '6px',
                minWidth: 120,
                width: '252px',
                height: '56px',
                left: '-1.95rem',
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
                onChange={handleChange}
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
              className={styles.form_linkedin}
              sx={{ width: '325px', borderRadius: '1rem' }}
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

          <fieldset className={styles.modal_input}>
            <legend>Behance</legend>
            <input placeholder="Link do seu perfil" type="text" />
          </fieldset>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
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
              sx={style}
              onClick={() => handleClose(!open)}
            >
              Cancelar
            </Button>
            <button type="submit" className={styles.modal_save_btn}>
              Salvar
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  )
}
