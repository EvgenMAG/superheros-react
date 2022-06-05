
import React, { useEffect, useState } from 'react';
import Paginator from '../Components/Pagination/pagination'
import apiFetch from '../api-service/Api-service'
import HeroCard from '../Components/Card/HeroCard';
import { NavLink } from "react-router-dom";

import Loading from '../Components/Loading/Loader'


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import poster from '../img/MAKS.jpg';


export default function HeroesPage() {
    const [heroes, setHeroes] = useState()
    const [page, setPage] = useState(0)


    useEffect(() => {
        apiFetch.getListHeroes(page).then(({ data }) => {
            setHeroes(data)
        })

    }, [])

    const onChangePage = (page) => {
        apiFetch.getListHeroes(page).then(({ data }) => {
            setHeroes(data)
            setPage(page)
        })
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
                                <NavLink
                                    to={{
                                        pathname: `${item._id}`,
                                    }}
                                    state={{
                                        pageId: page
                                    }}
                                >
                                    <HeroCard
                                        path={item.images[0] ? item.images[0].image : poster}
                                        descr={item.nickname}
                                    />
                                </NavLink>

                            </Grid>
                        )}
                    </Grid>
                    <Paginator data={heroes} changePage={onChangePage} />
                </div>
            }
        </>
    )
}