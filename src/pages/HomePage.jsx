import { useEffect, useState } from 'react';
import { fetchTrendings } from '../api';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';

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
      <h1>Trending Movies</h1>
      {trendings.length && <TrendingMoviesList items={trendings} />}
      {error && <ErrorMessage />}
      {loading && <Loader />}
    </main>
  );
}
