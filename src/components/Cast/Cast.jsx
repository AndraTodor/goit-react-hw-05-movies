import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/movieAPI';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul className={styles.castList}>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
