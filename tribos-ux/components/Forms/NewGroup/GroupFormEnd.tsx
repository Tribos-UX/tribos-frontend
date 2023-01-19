import styles from './styles/CadastroFormEnd.module.scss'

import { Button } from '@mui/material'
import Link from 'next/link'

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

export default function GroupFormEnd() {
  return (
    <>
      <article className={styles.cadastro_end}>
        Parabéns, seu grupo está pronto! <br></br> Você poderá alterar essas
        informações quando quiser, dentro so perfil do seu grupo.
      </article>
      <div>
        <Link href="/dashboard/home">
          <Button variant="contained" sx={style}>
            Concluir
          </Button>
        </Link>
      </div>
    </>
  )
}
