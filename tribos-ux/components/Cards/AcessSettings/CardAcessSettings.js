import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./CardAcessSettings.module.scss";
import ModalEditPassword from "../../Modals/Password/Edit/ModalEditPassword"
import ModalEditEmail from '../../Modals/Email/Edit/ModalEditEmail';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function CardAcessSettings() {
    return (
        <Card sx={{ width: 786, height: 214 }}>
            <CardContent>
                <div className={styles.card_acess_settings_email}>
                    <div>
                        <span>Email:</span>
                        <span>felipesoares@email.com</span>
                    </div>
                    <CardActions>
                        <ModalEditEmail />
                    </CardActions>
                </div>
                <div className={styles.card_acess_settings_password}>
                    <div>
                        <span>Senha:</span>
                        <span>*******</span>
                    </div>
                    <CardActions>
                        <ModalEditPassword />
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    );
}