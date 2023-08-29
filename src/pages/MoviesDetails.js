import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/')
  
  console.log(location)

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
          console.log(data)
              
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [params.movId]);


  return (
    <div>
       <Link to={backLocation.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h2>Overview</h2>
          <p> {movie.overview}</p>
          
          <p>Popularity: {movie.vote_average}</p>
          <h2>Genres:</h2>
        <ul>
  {movie.genres && movie.genres.map((genre) => (
    <li key={genre.id}>{genre.name}</li>
  ))}
</ul>

          
          <ul>
              <li>
                  <Link to='cast'>Cast</Link>
              </li>
              <li>
                  <Link to='reviews'>Reviews</Link>
              </li>
          </ul>
          <Outlet/>
    </div>
  );
};

export default MovieDetails;