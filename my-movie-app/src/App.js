import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import MovieDetail from './Components/MovieDetail';
import MovieList from './Components/MovieList';


// https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}
 //  https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

 const API_KEY = '9be9ee33e9818db25ba0768ea9007b13';
const BASE_URL = 'https://api.themoviedb.org';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        let url = `${BASE_URL}/3/movie/popular?api_key=${API_KEY}`;
        if (searchTerm) {
          url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to retrieve movie data');
        }

        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedMovie(null);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      )}  

    </div>
  );
};

export default App;
