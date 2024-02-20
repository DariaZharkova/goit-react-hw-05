import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import css from './MovieReviews.module.css';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovieReviews(movieId);
        setReviews(fetchedData.results);
        if (fetchedData.total_results === 0) {
          setNothingFound(true);
        }
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
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li className={css.item} key={id}>
              <h3>
                <span className={css.author}>Author:</span> {author}
              </h3>
              <p className={css.content}>
                {showMore ? content : `${content.substring(0, 350)}`}
                <button
                  className={css.btn}
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? '<<' : '>>'}
                </button>
              </p>
            </li>
          ))}
        </ul>
      )}
      {nothingFound && <p>We dont have any reviews for this movie.</p>}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
