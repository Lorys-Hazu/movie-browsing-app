import React from 'react';
import './MoviesList.css';

export default function MoviesList({movies, changeSelectedMovie}) {

    return (
        <div className="card-list">
            <ul>
                {movies === undefined 
                ? <p>You should write a movie name in the searchbar before ;)</p>
                : movies.map(movie => (
                    <li className="card" key={movie.id} onClick={()=>changeSelectedMovie(movie)}>
                        {movie.title}
                        </li>
                ))}
            </ul>
        </div>
    )
}
