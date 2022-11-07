import React from 'react'
import ModalEditEmail from '../components/ModalEditEmail'
import ModalEditInfo from '../components/ModalEditInfo'
import ModalEditPassword from '../components/ModalEditPassword'
import ModalEmailVerification from '../components/ModalEmailVerification'
import ModalPasswordReset from '../components/ModalPasswordReset'

function modais() {
    return (
        <div>
            <ModalEditInfo />
            <ModalEditPassword />
            <ModalEditEmail />
            <ModalPasswordReset />
            <ModalEmailVerification />
        </div>
    )
}

export default modais