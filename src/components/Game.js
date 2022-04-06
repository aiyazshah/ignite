import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from '../actions/detailsAction';
import { Link } from 'react-router-dom';


export default function Game({ name, background, id, release_date }) {
    const dispatch = useDispatch();
    function handleFetchDetails() {
        dispatch(fetchDetails(id));
    }
    return (
        <Link to="/gamedetails">
            <GameStyle onClick={() => handleFetchDetails()}>
                <h3>{name}</h3>
                <p>{release_date}</p>
                <img src={background} alt={name} />
            </GameStyle>
        </Link>

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
