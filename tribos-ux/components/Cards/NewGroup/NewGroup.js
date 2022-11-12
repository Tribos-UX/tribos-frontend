import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "./NewGroup.module.scss";
import ModalEditGroupInfo from '../../Modals/Group/ModalEditGroupInfo';

export default function CardProfile() {
    return (
        <Card sx={{ width: 786, height: 406 }}>
            <div className={styles.card_new_group_content}>
                <div className={styles.card_new_group_description}>
                    <h1>Descrição</h1>
                </div>
                <div className={styles.card_new_group_location}>
                    <h1>Cidade/Estado</h1>
                </div>
                <div className={styles.card_new_group_social}>
                    <h1>Canal de comunicação</h1>
                </div>
                <div className={styles.card_new_group_tag}>
                    <h1>Privacidade</h1>
                </div>
                <>
                    <ModalEditGroupInfo />
                </>
            </div>
        </Card>
    );
}