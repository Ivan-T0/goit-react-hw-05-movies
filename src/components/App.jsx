
import { Routes, Route } from 'react-router-dom'
import { lazy } from "react";


import Layout from './Layout/Layout'
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'));


export const App = () => {
  
  return (<>
  
    <Routes>
      <Route path='/'element={<Layout/>}>
        <Route index element={<Home />}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
      <Route path='/movies/:movId' element={<MoviesDetails />}>
        <Route path='cast' element={<Cast />}/>
        <Route path ='reviews' element={<Reviews/>}/>
        </Route>
      </Route>
    </Routes>
  </>
   
  );
};
