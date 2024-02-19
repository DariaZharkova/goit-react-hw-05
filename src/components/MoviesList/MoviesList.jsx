import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ items }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
