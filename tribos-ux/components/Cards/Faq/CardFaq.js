import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardFaq() {
    return (
        <Card sx={{
            width: 440, height: 136,
            backgroundColor: '#FBFBFC'
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 18 }} color="#344054" gutterBottom>
                    Dúvida de exemplo
                </Typography>
                <Typography variant="body2" color="#556176" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </Typography>
            </CardContent>
        </Card>
    );
}