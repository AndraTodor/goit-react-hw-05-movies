import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

const Home = React.lazy(() => import('../pages/Home'));
const Movies = React.lazy(() => import('../pages/Movies'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails'));
const Cast = React.lazy(() => import('../pages/Cast'));
const Reviews = React.lazy(() => import('../pages/Reviews'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
