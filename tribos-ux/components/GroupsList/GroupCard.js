// Nextjs tools
import Image from 'next//image'

// Image
import groupCardImg from '../../public/ImagemDoCard.png'

// Styles
import styles from '../../components/GroupsList/GroupsList.module.scss'

// Components
import ModalAddGroupDetails from '../Modals/AddGroupDetails/ModalAddGroupDetails'
import { supabase } from 'pages/api/supabase'

const GroupCard = ({ group }) => {
  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('groups')
      .delete()
      .eq('id', group.id)

    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
    }
  }

  return (
    <div className={styles.groups_card}>
      <>
        <Image src={groupCardImg} width={330} height={340} />
      </>
      <span>Grupo sobre Estudo de Caso</span>
      <ul>
        <li>{group.groupname}</li>
      </ul>
      <div className={styles.groups_tags}>
        <p>Pesquisa</p>
        <p>Wireframe</p>
        <p>Design</p>
      </div>
      <div className={styles.group_details}>
        <ModalAddGroupDetails />
      </div>
      <button onClick={handleDelete}>Apagar Grupo</button>
    </div>
  )
}

export default GroupCard
