import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import css from './GoBackLink.module.css';

export default function GoBackLink({ href }) {
  return (
    <div className={css.wrap}>
      <Link to={href} className={css.link}>
        <IoIosArrowRoundBack className={css.icon} /> Go back
      </Link>
    </div>
  );
}
