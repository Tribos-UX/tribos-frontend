import styles from './styles/CadastroFormEnd.module.scss'

import Link from 'next/link'

export default function GroupFormEnd() {
  return (
    <>
      <article className={styles.cadastro_end}>
        Parabéns, seu grupo está pronto! <br></br> Você poderá alterar essas
        informações quando quiser, dentro so perfil do seu grupo.
      </article>
      <div>
        <Link href="/dashboard/home">Concluir</Link>
      </div>
    </>
  )
}
