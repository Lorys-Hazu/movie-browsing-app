import React, { useEffect } from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';

function App() {

  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState([]);

  const [userHasSearched, setUserHasSearched] = useState(false);

  const searchMovies = async () => {

    const api_key = "ff5722911d39e084b370a9e6f1ba624b"

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${query}`;
    
    try {
          const res = await fetch(url);
          const data = await res.json();
          setMovies(data.results)
          data.results && setUserHasSearched(true)
          
      }catch(err) {
          console.error(err)
      }
    }

    useEffect(()=> movies && setSelectedMovie(movies[0]), [movies])

    useEffect(searchMovies, [query])

    const changeQuery = (e) => {
      setQuery(e.target.value)
    }

  return (<>
      <h1>Movie Browsing App</h1>
    <div className="App">
      <aside>
        <SearchMovies query={query} onSearchButtonTapped={searchMovies} onWriting={changeQuery}/>
        <MoviesList movies={movies} changeSelectedMovie={(movie) => setSelectedMovie(movie)}/>
      </aside>
      <section>
        <MovieDetail movie={selectedMovie} userHasSearched={userHasSearched}/>
      </section>
    </div>
    </>
  );
}

export default App;
