import { Suspense, useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from '../../api';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import GoBackLink from '../../components/GoBackLink/GoBackLink';
import defaultPoster from './default_movie_poster.png';
import css from './MovieDetailsPage.module.css';

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
    <main className={css.main}>
      {movie && (
        <>
          <GoBackLink href={backLinkRef.current ?? '/movies'} />

          <div className={css.topWrap}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultPoster
              }
              alt={movie.title}
              width="270"
            />
            <div>
              <h1 className={css.title}>{movie.title}</h1>
              <p className={css.score}>
                User Score:{' '}
                <span className={css.span}>{movie.vote_average}</span>
              </p>
              <h2>Overview</h2>
              <p className={css.overview}>{movie.overview}</p>
              <h2>Genres:</h2>
              <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </div>
          <div className={css.bottomWrap}>
            <h2 className={css.additional}>Additional informaion</h2>
            <ul className={css.list}>
              <li className={css.item}>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </main>
  );
}
