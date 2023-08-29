import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const params = useParams();
    console.log(params)
    useEffect(() => {
        const fetchReviews = async () => {
              try {
        const responce = await fetch(
          `https://api.themoviedb.org/3/movie/${params.movId}/reviews?language=en-US&page=1`,{
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDI5ZWRlNzFmOTUxYjJhNDQ1ODk4NTZmNzA4MTgwZSIsInN1YiI6IjY0ZWNhNDUzYzNjODkxMDEzYWIzNjlkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQWCKvaWhnfo33nlqLxHjJ-bsZwjantxUmAW2OYqnv0'
                }
            });
        const data = await responce.json();
          setReviews(data.results);
              console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
        fetchReviews();
    }, [params.movId, reviews])
    console.log(reviews)
    
    return (<div>
        <ul>
            {reviews.length > 0 ? (
          reviews.map(review => (
              <li key={review.id}><h2> {review.author}</h2> <p>"{review.content}"</p></li>
              
          ))
        ) : (
          <p>No reviews information available.</p>
        )}
        </ul>
    </div>)
}
export default Reviews