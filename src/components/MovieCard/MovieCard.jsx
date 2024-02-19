import { NavLink, Outlet } from 'react-router-dom';
import defaultPoster from './default_movie_poster.png';
import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
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
        <Outlet />
      </div>
    </div>
  );
}
