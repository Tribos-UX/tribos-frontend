import Button from '@mui/material/Button'
import Link from 'next/link'
import styles from './styles/CadastroFormEnd.module.scss'

const style = {
  backgroundColor: '#d87036',
  marginTop: '7rem',
  height: '3rem',
  width: '157px',
  borderRadius: '1rem',
  textTransform: 'none',
  fontSize: '1.125rem',
  paddingY: '0',
  marginLeft: 'auto',

  '&:hover': {
    color: '#d87036',
    backgroundColor: '#fbfbfc',
  },
}

export default function CadastroEnd() {
  return (
    <>
      <article className={styles.cadastro_end}>
        Parabéns, seu perfil está pronto! Você poderá alterar essas informações
        quando quiser, dentro do seu perfil.
      </article>
      <Link href="/dashboard/home">
        <Button variant="contained" sx={style}>
          Concluir
        </Button>
      </Link>
    </>
  )
}
