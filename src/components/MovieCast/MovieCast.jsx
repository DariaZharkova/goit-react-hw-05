import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import defaultAvatar from './default-avatar.png';

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
        <div>
          <ul>
            {casts.map(cast => (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : defaultAvatar
                  }
                  alt={cast.name}
                />
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
