import toast from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';
import css from './SearchBox.module.css';

export default function SearchBox({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Please write something for search!');
      return;
    }
    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        autoComplete="off"
        autoFocus
      />
      <button className={css.btn} type="submit">
        <GoSearch className={css.icon} />
      </button>
    </form>
  );
}
