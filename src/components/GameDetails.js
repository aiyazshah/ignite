import { useSelector } from "react-redux";
import styled from 'styled-components'
import React from 'react'
import Platform from "./Platform";


export default function GameDetails() {
    const { details, screenshots } = useSelector((state) => state.details);
    return (
        <Outer >
            <Inner>
                <div>
                    <Details>
                        <div className="rating">
                            <h3>{details.name}</h3>
                            <h3>Rating:{details.rating}</h3>
                        </div>
                        <Platforms>
                            {details.platforms.map((platforms) => <Platform key={platforms.platform.id} id={platforms.platform.id} />)}
                        </Platforms>
                    </Details>
                    <div className="homeimg_desc">
                        <img src={details.background_image} />
                    </div>
                    <div className="gallary">
                        {screenshots.map((screenshot) => <img src={screenshot.image} />)}
                    </div>
                </div>
            </Inner>
        </Outer>
    )
}
const Outer = styled.div`
width: 100%;
img{
    width: 100%;
    display: block;
}
`
const Inner = styled.div`
width: 70%;
position: absolute;
left:15%;
top:5%;
height: 100%;
background-color: white;
border-radius: 1rem;
overflow: scroll;
&::-webkit-scrollbar{
           width: .5rem;
           height: 0rem;
       }
       &::-webkit-scrollbar-thumb{
           width: .5rem;
           height: 15rem;
           background-color: gray;
       }
       &::-webkit-scrollbar-track{
           background-color: pink;
       }
    
`
const Details = styled.div`
display: flex;
position:sticky;
top: 0%;
height: 12vh;
background-color: white;
justify-content: space-between;
padding: 1rem 2rem;
`
const Platforms = styled.div`
display: flex;
justify-content: space-evenly;

`