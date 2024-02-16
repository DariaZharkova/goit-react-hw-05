import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './AppBar.module.css';
import HeaderIcon from './Movies_Oscar_icon.png';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={css.header}>
      <p className={css.logo}>
        <img src={HeaderIcon} alt="movies oscar icon" width="40" height="40" />
        Find
        <span>Movie</span>
      </p>

      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
