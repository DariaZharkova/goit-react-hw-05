import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import HeaderIcon from './Movies_Oscar_icon.png';
import css from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function AppBar() {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <img src={HeaderIcon} alt="movies oscar icon" width="40" height="40" />
        <p>
          Find<span className={css.span}>Movie</span>
        </p>
      </div>

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
