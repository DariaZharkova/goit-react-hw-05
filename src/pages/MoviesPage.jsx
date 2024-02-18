import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import SearchBox from '../components/SearchBox/SearchBox';
import { Toaster } from 'react-hot-toast';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchMovies } from '../api';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchMovies = newQuery => {
    setQuery(newQuery);
    setMovies([]);
    setNothingFound(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchMovies(query);
        setMovies(fetchedData.results);
        if (fetchedData.total_results === 0) {
          setNothingFound(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <main>
      <SearchBox onSearch={searchMovies} />
      {movies.length > 0 && <MoviesList items={movies} />}
      {nothingFound && (
        <p>
          Nothing was found for your search, please try to write another word!
        </p>
      )}
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <Toaster position="top-right" />
    </main>
  );
}
