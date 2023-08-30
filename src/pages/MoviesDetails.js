import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import cl from './MovieDetails.module.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/')
    
  
  

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movId}?language=en-US`,
          {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDI5ZWRlNzFmOTUxYjJhNDQ1ODk4NTZmNzA4MTgwZSIsInN1YiI6IjY0ZWNhNDUzYzNjODkxMDEzYWIzNjlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQWCKvaWhnfo33nlqLxHjJ-bsZwjantxUmAW2OYqnv0',
            },
          }
        );
        const data = await response.json();
          setMovie(data)
          
              
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [params.movId]);


  return (
    <div className={cl.movieDetailsWrapper}>
      <div className={cl.movieDetailsContainer}>
  <section className={cl.section}>
    <NavLink to={backLocation.current} className={cl.goBack}>Go back</NavLink>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={cl.moviesImage} alt={movie.title} />
  </section>
  
  <section className={cl.section}>
        <div className={cl.movieInfo}>
          <ul className={cl.movieDetailsList}>
      <li className={cl.movieDetailsItem}>
        <h1 className={cl.movieTitle}>{movie.title}</h1>
      </li>
      <li className={cl.movieDetailsItem}>
        <h2 className={cl.movieSubTitle}>Overview</h2>
      </li>
      <li className={cl.movieDetailsItem}>
        <p className={cl.movieOverview}>{movie.overview}</p>
      </li>
      <li className={cl.movieDetailsItem}>
       <p className={cl.moviePopularity}>Popularity: {movie.vote_average}</p>
      </li>
      <li className={cl.movieDetailsItem}>
       <h2 className={cl.movieSubTitle}>Genres:</h2>
     </li>
    </ul>

      <ul className={cl.genreList}>
        {movie.genres && movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  </section>
      </div>

        <ul className={cl.linkList}>
          <li ><h2>Additional information</h2></li>
          <li>
            <FontAwesomeIcon icon={faStar} className={cl.icon} />
            <Link to='cast' className={cl.navText}>Cast</Link>
          </li>
         <li >
            <FontAwesomeIcon icon={faStar} className={cl.icon} />
            <Link to='reviews' className={cl.navText} >Reviews</Link>
          </li>
        </ul>

          <Outlet/>
      </div>
  );
};

export default MovieDetails;