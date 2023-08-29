import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import cl from './Cast.module.css'

const Cast = () => {
      const [actors, setActors] = useState([]);
    const params = useParams();
    

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const responce = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movId}/credits?language=en-US`,
            {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDI5ZWRlNzFmOTUxYjJhNDQ1ODk4NTZmNzA4MTgwZSIsInN1YiI6IjY0ZWNhNDUzYzNjODkxMDEzYWIzNjlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQWCKvaWhnfo33nlqLxHjJ-bsZwjantxUmAW2OYqnv0'
                }
            }
        );
        const data = await responce.json();
          setActors(data.cast);
              console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [params.movId]);
    return (
    <div>
      <ul>
        {actors.map(actor => (
            <li key={actor.id}>
                <img className={cl.image}   src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actors.name} width='200' height='150'  />
                <p>{actor.name}</p>
                <p>Character : {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cast