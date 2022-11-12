import React from 'react'
import ModalEditEmail from '../components/Modals/Email/Edit/ModalEditEmail'
import ModalEditGroupInfo from '../components/Modals/Group/ModalEditGroupInfo'
import ModalEditInfo from '../components/Modals/Info/EditInfo/ModalEditInfo'
import ModalEditInfo2 from '../components/Modals/Info/EditInfo2/ModalEditInfo2'
import ModalEditPassword from '../components/Modals/Password/Edit/ModalEditPassword'
import ModalEmailVerification from '../components/Modals/Email/Verification/ModalEmailVerification'
import ModalPasswordReset from '../components/Modals/Password/Reset/ModalPasswordReset'
import ModalCreateTask from '../components/Modals/Task/ModalCreateTask'
import CardFaq from '../components/Cards/Faq/CardFaq'
import ModalEditProfilePhoto from '../components/Modals/Profile/ModalEditProfilePhoto'
import CardAcessSettings from '../components/Cards/AcessSettings/CardAcessSettings'
import CardProfile from '../components/Cards/Profile/CardProfile'
import TabProfile from "../components/Tabs/Profile/TabProfile"

function modais() {
    return (
        <div>
            <TabProfile />
            <br></br>
            <br></br>
            <ModalEditInfo />
            <ModalEditPassword />
            <ModalEditEmail />
            <ModalPasswordReset />
            <ModalEmailVerification />
            <ModalEditGroupInfo />
            <CardFaq />
            <ModalEditProfilePhoto />
            <CardAcessSettings />
            <br></br>
            <ModalCreateTask />
            <CardProfile />
            <ModalEditInfo2 />
        </div>
    )
}

export default modais