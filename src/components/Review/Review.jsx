import { useState } from 'react';
import css from './Review.module.css';

export default function Review({ author, content }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <h3>
        <span className={css.author}>Author:</span> {author}
      </h3>
      <p className={css.content}>
        {showMore ? content : `${content.substring(0, 350)}`}
        <button className={css.btn} onClick={() => setShowMore(!showMore)}>
          {showMore ? '<<' : '>>'}
        </button>
      </p>
    </>
  );
}
