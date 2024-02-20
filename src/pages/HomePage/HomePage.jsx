import { useEffect, useState } from 'react';
import { fetchTrendings } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

export default function HomePage() {
  const [trendings, setTrendings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchTrendings();
        setTrendings(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      {trendings.length > 0 && <MoviesList items={trendings} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </main>
  );
}
