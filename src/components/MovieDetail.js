import React from "react";
import './MovieDetail.css'

export default function MovieDetail({movie, userHasSearched}) {
    console.log(movie)
    return (
        <div>
            { userHasSearched && <>
            <div className="headerRow">
                <img className="poster" alt={movie.poster_path ? movie.title + ' poster image' : null} src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : null}/>
                <div>   
                    <h1>
                        {movie.title ? movie.title : null}
                    </h1>
                    <p>Rating: {movie.vote_average ? movie.vote_average + '/10 on ' + movie.vote_count + ' votes.' : "No Rating for this movie"}</p>
                </div>
            </div>
                <div className="overview">
                    <p>{movie.overview ? movie.overview : "No overview available for this movie"}</p>
                </div>
                </>
                }
        </div>
        
    )
}