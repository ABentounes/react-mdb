import React from "react";

//Components
import Thumb from '../Thumb'

//Conf
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import Noimage from '../../images/no_image.jpg'

//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb
                image={
                    movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : Noimage
                }
                clickable={false}
                alt='movie-thumb'
            />
            <Text>
                <h1>{movie.title}</h1>
                <h3>Plot</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors" >
                    <div>
                        <h3>Rating</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="directors">
                        <h3>Director{movie.directors.length > 1 ? 's' : ''}</h3>
                        {movie.directors.map(director => (
                            <p key={director.credit_id}>{director.name}</p>
                        ))}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>
)

export default MovieInfo;