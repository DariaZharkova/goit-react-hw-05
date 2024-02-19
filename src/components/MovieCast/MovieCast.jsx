import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import defaultAvatar from './default_avatar.png';
import css from './MovieCast.module.css';

export default function MovieCast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovieCast(movieId);
        setCasts(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {casts.length > 0 && (
        <ul className={css.list}>
          {casts.map(cast => (
            <li className={css.item} key={cast.id}>
              <img
                className={css.img}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultAvatar
                }
                alt={cast.name}
                width="120"
                height="180"
              />
              <div className={css.wrap}>
                <h3 className={css.name}>{cast.name}</h3>
                <p className={css.character}>Character: {cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
