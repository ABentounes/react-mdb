import React from "react";

//Styles
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ actorName, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
        <h4>{actorName}</h4>
        <p>{character}</p>
    </Wrapper>
);

export default Actor;