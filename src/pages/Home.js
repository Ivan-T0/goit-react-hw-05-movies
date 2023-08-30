import { useEffect, useMemo, useState } from "react"
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import cl from './Home.module.css'

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDI5ZWRlNzFmOTUxYjJhNDQ1ODk4NTZmNzA4MTgwZSIsInN1YiI6IjY0ZWNhNDUzYzNjODkxMDEzYWIzNjlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQWCKvaWhnfo33nlqLxHjJ-bsZwjantxUmAW2OYqnv0'
    }
  }), []);

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(response => response.json())
      .then(data =>  setTrendingMovies(data.results))
      .catch(error => console.error(error));
    
  }, [options]);

  return (
    <div >
      <h1>
        Trending today
      </h1>
          <ul>
          {trendingMovies.map(movie => (
  movie.title && (
    <li key={movie.id} className={cl.homeListItem}>
      <FontAwesomeIcon icon={faStar} className={cl.icon} />
      <NavLink to={`/movies/${movie.id}`} className={cl.homeText}>{movie.title}</NavLink>
    </li>
  )
))}
     </ul>
    </div>
  );
}


export default Home;