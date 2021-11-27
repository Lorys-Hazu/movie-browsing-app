import React from 'react';
import './SearchMovies.css';

export default function SearchMovies({onWriting, onSearchButtonTapped, query}) {


    return (
        <form className="form" onSubmit={onSearchButtonTapped}>
            <input className="input" type="text" name="query" 
                placeholder="i.e. Jurassic Park" value={query}
                onChange={onWriting}
                />
            <button className="button" type="submit">Search</button>
        </form>
    )
}