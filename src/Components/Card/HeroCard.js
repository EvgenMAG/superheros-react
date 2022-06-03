import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import basket from '../../img/basket3.png'
import s from './HeroCard.module.css';

export default function HeroCard({ path, descr, handleDelete, id }) {

    return (

        <Card
            sx={{
                height: "auto",
            }}
        >
            <CardActionArea
                sx={{
                    backgroundColor: "#b0bec5"
                }}
            >
                <CardMedia
                    component="img"
                    height="300"
                    image={path}
                    alt={descr}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        sx={{

                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "16px",
                        }}
                        component="div">
                        {descr}
                    </Typography>

                    <img className={s.deleteImg} alt="" src={basket} onClick={() => handleDelete(id)} />

                </CardContent>
            </CardActionArea>
        </Card>

    );
}
