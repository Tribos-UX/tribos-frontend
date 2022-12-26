import Button from '@mui/material/Button'
import { supabase } from 'pages/api/supabase'
import React, { useEffect, useRef, useState } from 'react'

// Icons
import { DiscordIcon } from '@/components/common/Icons'
import EastSharpIcon from '@mui/icons-material/EastSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

// Styles
import {
  Box,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
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
import styles from './styles/CadastroForm1.module.scss'

export default function GroupForm1({ nextForm }): JSX.Element {
  const supabase = useSupabaseClient()
  const session = useSession()
  const user = useUser()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  console.log(user)
  const groupNameRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLInputElement>()
  const discordRef = useRef<HTMLInputElement>()
  const cidadeRef = useRef<HTMLInputElement>()
  const portfolioRef = useRef<HTMLInputElement>()
  const ufRef = useRef<HTMLInputElement>()

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

    } catch (error) {
      console.log(error)
    }
    console.log(session, user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    let { error } = await supabase.from('groups').insert({groupname: groupNameRef.current.value, description: descriptionRef.current.value, discord: discordRef.current.value , cidade: cidadeRef.current.value, criador: user.id })


    if (error) {
      console.log(error)
      setError(error.message)
      return setLoading(false)
    }
    nextForm()
  }

  const style = {
    backgroundColor: '#d87036',
    marginTop: '0',

    '&:hover': {
      color: '#d87036',
      backgroundColor: '#fbfbfc',
    },
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#000000',
      fontSize: '1.125rem',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#AFB0B2',
        borderRadius: '1rem',
      },
    },
    input: {
      minWidth: '20rem',
      '&::placeholder': {
        fontSize: '14px',
      },
    },
  })

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Box sx={{ width: '375px' }} className={styles.form_nome}>
        <CssTextField
          label="Nome"
          focused
          placeholder={'Digite o nome do seu grupo!'}
          id="nome_grupo"
          type="text"
          inputRef={groupNameRef}
          required
        />
      </Box>

      <Box sx={{ minWidth: '375px' }} className={styles.form_cidade}>
        <CssTextField label="Cidade" focused id="cidade" inputRef={cidadeRef} required />
      </Box>

      <Box sx={{ minWidth: '375px' }} className={styles.form_descricao}>
        <CssTextField
          label="Descricao do Grupo"
          focused
          id="descricao_grupo"
          placeholder={'Adicione uma breve descricao sobre o seu grupo.'}
          type="text"
          inputRef={descriptionRef}
          required
        />
      </Box>

      <CssTextField
        className={styles.form_linkedin}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DiscordIcon />
            </InputAdornment>
          ),
        }}
        label="Discord"
        focused
        id="Discord"
        inputRef={discordRef}
        placeholder={'Link do seu perfil'}
        required
      />

<CssTextField
        className={styles.form_uf}
        label="Estado"
        focused
        required
        placeholder={"Estado em que você está"}
        select
        inputProps={{ 'aria-label': 'Without label' }}
        inputRef={ufRef}
        >
      
        <MenuItem value={12}>Acre</MenuItem>
        <MenuItem value={27}>Alagoas</MenuItem>
        <MenuItem value={16}>Amapá</MenuItem>
        <MenuItem value={13}>Amazonas</MenuItem>
        <MenuItem value={29}>Bahia</MenuItem>
        <MenuItem value={23}>Ceará</MenuItem>
        <MenuItem value={53}>Distrito Federal</MenuItem>
        <MenuItem value={24}>Rio Grande do Norte</MenuItem>
        <MenuItem value={43}>Rio Grande do Sul</MenuItem>
        <MenuItem value={33}>Rio de Janeiro</MenuItem>
        <MenuItem value={35}>São Paulo</MenuItem>
      </CssTextField>

      <CssTextField
        className={styles.form_porfolio}
        label="Link"
        focused
        required
        id="link"
        placeholder={'Link do seu portfólio.'}
        ref={portfolioRef}
      />

      <div className={styles.form_upload_input}>
        <span>Insira uma foto de perfil</span>
        <label htmlFor="image_uploads">Inserir</label>
        <input name="image_uploads" type="file" accept="image/*" />
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
      {error && <div> {error}</div>}
    </form>
  )
}
