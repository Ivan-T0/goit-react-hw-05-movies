import {  useState,useEffect } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import cl from './Movies.module.css'

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const apiKey = 'c429ede71f951b2a44589856f708180e';

   const queryFromParams = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(queryFromParams);

  const handleChange = (e) => {
    const newMovieName = e.target.value.toLowerCase();
    setSearchQuery(newMovieName);
    setSearchParams({ q: newMovieName });
  };
  useEffect(() => {
        handleSearchClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const handleSearchClick = () => {
    const newMovieName = searchQuery.toLowerCase();
    setSearchQuery(newMovieName);
    if (searchQuery) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}&query=${searchQuery}`
        
      )
        .then((response) => response.json())
        .then((data) => {if (data.results) {
                setSearchResults(data.results);
            }})
        .catch((error) => console.error(error));
    } else {
      setSearchResults([]);
    }
    
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleSearchClick(); 
  };


 
  return (
    <div className={cl.searchContainer}>
      <form onClick={handleSubmit}>
        <input
    type="text"
    placeholder="Search movies"
    value={searchQuery}
    onChange={handleChange}
    className={cl.searchInput}
  />
  <button onClick={handleSearchClick} className={cl.searchButton}>
    Search
  </button>
    </form>
  <ul className={cl.searchResults}>
    {searchResults.map((movie) => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
          {movie.title}
        </Link>
      </li>
    ))}
  </ul>
</div>
  );
};

export default Movies;