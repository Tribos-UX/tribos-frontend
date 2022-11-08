import React from 'react'
import ModalEditEmail from '../components/ModalEditEmail'
import ModalEditGroupInfo from '../components/ModalEditGroupInfo'
import ModalEditInfo from '../components/ModalEditInfo'
import ModalEditInfo2 from '../components/ModalEditInfo2'
import ModalEditPassword from '../components/ModalEditPassword'
import ModalEmailVerification from '../components/ModalEmailVerification'
import ModalPasswordReset from '../components/ModalPasswordReset'
import ModalCreateTask from '../components/ModalCreateTask'
import CardFaq from '../components/Sidebar/CardFaq'
import ModalEditProfilePhoto from '../components/ModalEditProfilePhoto'

function modais() {
    return (
        <div>
            <ModalEditInfo />
            <ModalEditPassword />
            <ModalEditEmail />
            <ModalPasswordReset />
            <ModalEmailVerification />
            <ModalEditGroupInfo />
            <ModalEditInfo2 />
            <ModalCreateTask />
            <CardFaq />
            <ModalEditProfilePhoto />
        </div>
    )
}

export default modais