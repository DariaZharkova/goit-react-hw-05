import { Link, useLocation } from 'react-router-dom';

export default function TrendingMoviesList({ items }) {
  const location = useLocation();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Link to={`/movie/${item.id}`} state={{ from: location }}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
