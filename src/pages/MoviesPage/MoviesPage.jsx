import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { fetchMovies } from '../../api';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import SearchBox from '../../components/SearchBox/SearchBox';
import MoviesList from '../../components/MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [nothingFound, setNothingFound] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const searchMovies = newQuery => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('query', newQuery);
    setSearchParams(nextParams);
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
