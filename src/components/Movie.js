import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router";

//Components

import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg"

import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {

    const { movieId } = useParams();
    const { state: movie, loading, error} = useMovieFetch(movieId)
    return (
        <>
            <div>Movie</div>
        </>
    )

};
export default Movie;