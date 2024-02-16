import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjY0MWI1MWQyMDYyYzcwZThmYTc5NmE1ODYzNzQ0MSIsInN1YiI6IjY1Y2Y4YTEyNjBjNzUxMDE3YjY5YzRiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S8sqwpy4Xa1HYDmbFqxXC8AFtUXtvwivDQdZ7SqO2O8',
  },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
