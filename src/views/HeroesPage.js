
import React, { useEffect, useState } from 'react';
import Paginator from '../Components/Pagination/pagination'
import apiFetch from '../api-service/Api-service'
import HeroCard from '../Components/Card/HeroCard';

import Loading from '../Components/Loading/Loader'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function HomePage() {
    const [heroes, setHeroes] = useState()
    const [hero, setHero] = useState('')

    useEffect(() => {
        apiFetch.getListHeroes().then(({ data }) => {
            setHeroes(data)
        })

    }, [hero])

    const onChangePage = (page) => {
        apiFetch.getListHeroes(page).then(({ data }) => {
            setHeroes(data)
        })
    }
    const handleDelete = (hero) => {
        apiFetch.deleteHero(hero)
        setHero(hero)

    }

    return (
        <>
            {!heroes ? <Loading /> :
                <div>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{
                            marginBottom: "20px",
                            textAlign: "center",
                            fontWeight: "bold",
                        }}
                    >
                        OUR HEROES
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginBottom: "20px"
                        }}
                    >
                        {heroes.docs.map(item =>

                            <Grid key={item._id} item xs={2.4}>
                                <HeroCard
                                    path={item.images[0].image}
                                    descr={item.nickname}
                                    handleDelete={handleDelete}
                                    id={item._id}
                                />
                            </Grid>
                        )}
                    </Grid>
                    <Paginator data={heroes} changePage={onChangePage} />
                </div>
            }
        </>
    )
}