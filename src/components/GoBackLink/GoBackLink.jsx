import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import css from './GoBackLink.module.css';

export default function GoBackLink({ href, children }) {
  return (
    <div className={css.wrap}>
      <Link to={href}>
        <IoIosArrowRoundBack /> {children}
      </Link>
    </div>
  );
}
