import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../api';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MovieCard from '../components/MovieCard/MovieCard';
import GoBackLink from '../components/GoBackLink/GoBackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovieById(movieId);
        setMovie(fetchedData);
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
      <GoBackLink href={backLinkRef.current ?? '/movies'}>Go Back</GoBackLink>
      {movie && <MovieCard movie={movie} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
