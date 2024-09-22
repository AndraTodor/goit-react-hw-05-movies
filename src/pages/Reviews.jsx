import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p className="text-gray-500">Nu sunt recenzii pentru acest film.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>: {review.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
