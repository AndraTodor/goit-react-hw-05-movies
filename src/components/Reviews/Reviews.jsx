import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/movieAPI';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.reviewsList}>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noReviews}>No reviews found</p>
      )}
    </div>
  );
};

export default Reviews;
