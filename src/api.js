import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// --url 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \

// const urlTrendings =
// 'https://api.themoviedb.org/3/trending/movie/week?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjY0MWI1MWQyMDYyYzcwZThmYTc5NmE1ODYzNzQ0MSIsInN1YiI6IjY1Y2Y4YTEyNjBjNzUxMDE3YjY5YzRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8sqwpy4Xa1HYDmbFqxXC8AFtUXtvwivDQdZ7SqO2O8',
  },
};

export const fetchTrendings = async () => {
  const response = await axios.get(
    '/trending/movie/week?include_adult=false&language=en-US&page=1',
    options
  );

  return response.data.results;
};

export const fetchMovieById = async id => {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);

  return response.data;
};
