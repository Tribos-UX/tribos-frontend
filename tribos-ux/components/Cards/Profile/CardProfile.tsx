import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./CardProfile.module.scss";
import ModalEditInfo2 from '../../Modals/Info/EditInfo2/ModalEditInfo2'

export default function CardProfile() {
    return (
        <Card sx={{ width: 786, height: 406 }}>
            <div className={styles.card_content}>
                <div className={styles.card_profile_description}>
                    <h1>Descrição:</h1>
                    <p>Moro em SP e trabalho como T.I. Estou estudando para migrar para a área de UX Design. Procuro grupos pequenos para construir cases para meu portfólio. Tenho as terças, quartas e quintas disponíveis das 19h as 22h.</p>
                </div>
                <div className={styles.card_profile_location}>
                    <h1>Cidade/Estado:</h1>
                    <span>Sao Paulo/SP</span>
                </div>
                <div className={styles.card_profile_social}>
                    <h1>Redes Sociais:</h1>
                    <span>linkedin.com/felipesoares123</span>
                    <span>behance.com/felipesoares123</span>
                </div>
                <div className={styles.card_profile_tags}>
                    <h1>Interesses:</h1>
                    <span>Tags Tags Tags</span>
                </div>
                <>
                    <ModalEditInfo2 />
                </>
            </div>
        </Card>
    );
}