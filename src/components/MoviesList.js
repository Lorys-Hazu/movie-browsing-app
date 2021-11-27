import React from 'react';
import './MoviesList.css';

export default function MoviesList({movies, changeSelectedMovie}) {

    return (
        <div className="card-list">
            <ul>
                {movies === undefined 
                ? <p>Vous devez rechercher un film d'abord</p>
                : movies.map(movie => (
                    <li className="card" key={movie.id} onClick={()=>changeSelectedMovie(movie)}>
                        {movie.title}
                        </li>
                ))}
            </ul>
        </div>
    )
}
