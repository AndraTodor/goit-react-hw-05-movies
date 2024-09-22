const API_KEY = 'e1796b07bf1840be8714f1cc473f123c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return await response.json();
};

export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }
  return await response.json();
};

export const getMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return await response.json();
};

export const getMovieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie credits');
  }
  return await response.json();
};

export const getMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie reviews');
  }
  return await response.json();
};
