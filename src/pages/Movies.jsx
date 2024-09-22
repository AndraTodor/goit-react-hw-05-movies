import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const queryFromUrl = searchParams.get('query') || '';
    if (queryFromUrl) {
      setQuery(queryFromUrl);
      searchMovies(queryFromUrl).then(data => setMovies(data.results));
    }
  }, [searchParams]);

  const handleSearch = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="ml-4 bg-blue-500 text-white p-2">
          Search
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-4 mt-4">
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location.pathname, query }} // Include query
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
