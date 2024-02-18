import { useEffect, useState } from 'react';
import { fetchData } from '../api';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';

export default function HomePage() {
  const [trendings, setTrendings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendings() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchData();
        setTrendings(fetchedData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendings();
  });

  return (
    <main>
      <h1>Trending Movies</h1>
      <TrendingMoviesList items={trendings} />
    </main>
  );
}
