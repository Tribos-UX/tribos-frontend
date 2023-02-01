import Button from '@mui/material/Button'
import { supabase } from 'pages/api/supabase'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import { DiscordIconBlack } from '@/components/common/Icons'
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Styles
import {
  Autocomplete,
  CircularProgress,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from '@mui/material'

// Supabase
import {
  useSession,
  useSupabaseClient,
  useUser,
} from '@supabase/auth-helpers-react'

// Styles
import { estadosBR } from '@/components/utils/estadosBR'
import ImagemGroupUpload from './ImagemGroupUpload'
import styles from './styles/GroupForm1.module.scss'

import { useGroupsContext } from '@/components/providers/GroupsProvider'

export default function GroupForm1({ nextForm }): JSX.Element {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [groupName, setGroupName] = useState('')
  const descriptionRef = useRef<HTMLInputElement>()
  const [capa_url, setCapaUrl] = useState(null)
  const discordRef = useRef<HTMLInputElement>()
  const linkRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const [open, setOpen] = React.useState(false)
  const [uf, setUF] = React.useState('')
  const [municipios, setMunicipios] = useState([])

  const handleChange = (event: SelectChangeEvent) => {
    setUF(event.target.value)
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

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProfile()
  }, [session])

  const handleSubmit = async (event) => {
    event.preventDefault()

    let { error } = await supabase.from('groups').insert({
      groupname: groupName,
      description: descriptionRef.current.value,
      discord: discordRef.current.value,
      cidade: cidadeRef.current.value,
      criador: user.id,
      uf: uf,
    })

    if (error) {
      console.log(error)
      alert(error.message)
      return setLoading(false)
    }
    nextForm()
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',
    height: '3rem',
    width: '157px',
    borderRadius: '1rem',

    '&:hover': {
      color: '#d87036',
      backgroundColor: '#fbfbfc',
    },
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormControl
        sx={{
          width: '375px',
          maxWidth: '100%',
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
        }}
        className={styles.form_nome}
      >
        <TextField
          sx={{ width: '325px', borderRadius: '1rem' }}
          className={styles.form_nome}
          label="Nome"
          InputLabelProps={{ shrink: true }}
          placeholder={'Digite o nome do seu grupo.'}
          id="groupname"
          type="text"
          value={groupName}
          onChange={(event) => setGroupName(event.target.value)}
          required
        />
      </FormControl>

      <FormControl
        className={styles.form_cidade}
        sx={{
          minWidth: 120,
          maxWidth: '325px',
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
        }}
      >
        <Autocomplete
          sx={{
            minWidth: 120,
            maxWidth: '325px',
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
          }}
          id="municipio"
          open={open}
          onOpen={() => {
            setOpen(true)
          }}
          onClose={() => {
            setOpen(false)
          }}
          noOptionsText="Selecione o Estado primeiro."
          isOptionEqualToValue={(option, value) => option.nome === value.nome}
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

      <FormControl className={styles.form_descricao}>
        <TextField
          sx={{
            width: '325px',
            maxWidth: '100%',

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
          }}
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

      <FormControl
        className={styles.form_uf}
        sx={{
          minWidth: 120,
          maxWidth: '100%',
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
          '& legend': { minWidth: '45px' },
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
      <FormControl
        sx={{
          left: '-1.95rem',
        }}
        className={styles.form_link}
      >
        <TextField
          sx={{
            width: '325px',
            maxWidth: '100%',
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
          }}
          label="Link"
          InputLabelProps={{ shrink: true }}
          placeholder={'Coloque algum link importante.'}
          id="link"
          type="text"
          inputRef={linkRef}
          required
        />
      </FormControl>
      <FormControl className={styles.form_discord}>
        <TextField
          sx={{
            width: '325px',
            borderRadius: '1rem',
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
          }}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DiscordIconBlack />
              </InputAdornment>
            ),
          }}
          label="Discord"
          id="Discord"
          inputRef={discordRef}
          placeholder={'Link do seu grupo'}
        />
      </FormControl>

      <div className={styles.form_upload_input}>
        <ImagemGroupUpload
          groupname={groupName.replace('', '_')}
          url={capa_url}
          onUpload={(url: any) => {
            setCapaUrl(url)
          }}
        />
      </div>
      <Button
        className={styles.form_button}
        type="submit"
        variant="contained"
        sx={style}
        endIcon={<EastSharpIcon />}
      >
        Avançar
      </Button>
    </form>
  )
}
