import { useEffect, useState } from 'react';
import {
  Link,
  useParams,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/movieAPI';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from); // Navighează la locația din care ai venit
    } else {
      navigate('/movies'); // Navighează la pagina de filme dacă nu există o stare
    }
  };

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className={styles.movieDetails}>
      <button className={styles.button} onClick={handleGoBack}>
        Go back
      </button>
      <h1>{movie.title}</h1>
      <img src={imageUrl} alt={movie.title} className={styles.movieImage} />
      <p>User score: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map(g => g.name).join(', ')}</p>
      <div className={styles.additionalInfo}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
