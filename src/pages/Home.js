import React, { useEffect } from 'react';
import Game from '../components/Game';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
import styled from 'styled-components'
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [])
    let games = useSelector(store => store.games);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Popular Games</h1>
            <GamesStyle>
                {games.popular.map((game) => {
                    return <Game
                        key={game.id}
                        name={game.name}
                        background={game.background_image}
                        id={game.id}
                        release_date={game.released}
                    />
                })}
            </GamesStyle>
        </div>
    )
}
const GamesStyle = styled.div`
padding :3rem ;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-row-gap: 3rem;
grid-column-gap: 5rem;

`
export default Home;

