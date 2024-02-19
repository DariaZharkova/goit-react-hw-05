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
    <>
      {movie && (
        <>
          <GoBackLink href={backLinkRef.current ?? '/movies'} />

          <div>
            <div className={css.wrapper}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultPoster
                }
                alt={movie.title}
              />
              <div>
                <h1>{movie.title}</h1>
                <p>
                  User Score: <span>{movie.vote_average}</span>
                </p>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
                <h2>Genres:</h2>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
            <div>
              <h2>Additional informaion</h2>
              <ul>
                <li>
                  <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                  <NavLink to="reviews">Reviews</NavLink>
                </li>
              </ul>
            </div>
            <div>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </>
  );
}
