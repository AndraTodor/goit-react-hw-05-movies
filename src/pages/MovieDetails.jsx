import React, { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(
        location.state.from +
          (location.state.query ? `?query=${location.state.query}` : '')
      );
    } else {
      navigate('/'); // Mergi la pagina principală
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleGoBack}
        className="bg-blue-500 text-white p-2 mb-4"
      >
        Go back
      </button>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h1 className="text-3xl">{movie.title}</h1>
      <p>User score: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <h2>Additional Information</h2>
      <ul>
        <li>
          <Link
            to="cast"
            state={{ from: location.state?.from, query: location.state?.query }}
            className="text-blue-500 hover:underline"
          >
            Cast
          </Link>
          <Link
            to="reviews"
            state={{ from: location.state?.from, query: location.state?.query }}
            className="ml-4 text-blue-500 hover:underline"
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
