import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);
    const upcoming = movies.filter(m => m.upcoming)
    localStorage.setItem('favorites', JSON.stringify(upcoming))
  
    const addToFavorites = (movieId) => {
      const updatedMovies = movies.map((m) =>
        m.id === movieId ? { ...m, favorite: true } : m
      );
      setMovies(updatedMovies);
    };
  
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        selectFavorite={addToFavorites}
      />
    );
  };

export default UpcomingMoviesPage;