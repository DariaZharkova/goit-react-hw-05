import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/trending/movie/week?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjY0MWI1MWQyMDYyYzcwZThmYTc5NmE1ODYzNzQ0MSIsInN1YiI6IjY1Y2Y4YTEyNjBjNzUxMDE3YjY5YzRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8sqwpy4Xa1HYDmbFqxXC8AFtUXtvwivDQdZ7SqO2O8',
  },
};

export const fetchData = async () => {
  const response = await axios.get(url, options);

  return response.data.results;
};

// export const getTrendMovies = async query => {
//   try {
//     const response = await axios.get(urlTrend, {
//       params: {
//         ...options.params,
//         query: query,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
