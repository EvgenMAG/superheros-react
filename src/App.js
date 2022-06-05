import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import { Container } from '@material-ui/core';
import Navigation from './Components/Navigation/Navigation';
import Loading from './Components/Loading/Loader';

import prapor from './img/praporOptimized.jpg'
import './App.css';


import routes from './routes';

const HeroesPage = lazy(() => import('./views/HeroesPage' /* webpackChunkName: "HeroesPage-view" */));

const CreationPage = lazy(() => import('./views/CreationPage' /* webpackChunkName: "CreationPage-view" */));
const HeroDetailsPage = lazy(() => import('./views/HeroDetailsPage' /* webpackChunkName: "HeroDetailsPage-view" */));


export default function App() {


  return (
    <>
      <Container maxWidth="md">
        <Navigation />
        <Suspense
          fallback={
            <div>
              <Loading />
            </div>
          }
        >
          <Routes>
            <Route path={routes.home} element={<HeroesPage />} />
            <Route path={routes.heroDetails} element={<HeroDetailsPage />} />
            <Route path={routes.creatHero} element={<CreationPage />} />
          </Routes>

        </Suspense>
        <img src={prapor} className='background' alt="flag" />
      </Container>
    </>
  );
}
