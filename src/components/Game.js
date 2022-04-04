import React from 'react';
import styled from 'styled-components'


export default function Game({ name, background, id, release_date }) {
    return (

        <GameStyle>
            <h3>{name}</h3>
            <p>{release_date}</p>
            <img src={background} alt={name} />
        </GameStyle>

    )
}
const GameStyle = styled.div`
text-align: center;
border: 1px solid black;
border-radius: .5rem;
box-shadow: 5px 5px 10px gray;
img{
    width: 100%;
}
`
