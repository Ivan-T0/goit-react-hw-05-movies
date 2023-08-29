import Home from 'pages/Home';
import Movies from 'pages/Movies';
import Layout from './Layout/Layout'
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews'
import MoviesDetails from 'pages/MoviesDetails'
import {Routes,Route} from 'react-router-dom'

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
