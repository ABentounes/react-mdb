import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router-dom";

//Components

import Grid from "./Grid";
import Spinner from "./Spinner";
import NoImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

//Custom Hooks

import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {

    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Something went wrong :/</div>

    console.log(movie);
    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
        </>
    )

};
export default Movie;