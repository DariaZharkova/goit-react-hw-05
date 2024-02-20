import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <main>
      <h1 className={css.title}>Opps, sorry, page is not found :(</h1>
      <Link to="/" className={css.link}>
        Back to home page
      </Link>
    </main>
  );
}
