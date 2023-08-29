import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom";

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
    <div>
          <ul>
          {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}    
     </ul>
    </div>
  );
}


export default Home;