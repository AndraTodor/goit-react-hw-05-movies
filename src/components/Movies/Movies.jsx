import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchMovies } from '../../services/movieAPI';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSearch = () => {
    setMovies([]); // Resetează lista de filme
    searchMovies(query).then(setMovies);
  };

  useEffect(() => {
    // Asigură-te că actualizezi `state` la fiecare căutare
    setMovies([]); // Resetează lista de filme la fiecare căutare
  }, [query]);

  return (
    <div className={styles.moviesContainer}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search movies"
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>
      <ul className={styles.moviesList}>
        {movies.map(movie => (
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
