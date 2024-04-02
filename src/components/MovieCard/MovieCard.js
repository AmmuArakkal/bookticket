import React from "react";
import styles from './MovieCard.module.css'
import { Link } from "react-router-dom";

function MovieCard(props){

    const movie= props.movie
    return(

        <Link to={'/movies/'+movie._id}>
        <li className={styles.MovieCard} key={movie._id}>
                <h3>{movie.title}</h3>
                <img src={movie.image} alt={movie.title +"thumbnail"}/>
              </li>
              </Link>
    )
}

export default MovieCard