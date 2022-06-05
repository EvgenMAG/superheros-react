import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function HeroCard({ path, descr }) {

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

                </CardContent>
            </CardActionArea>

        </Card>

    );
}
