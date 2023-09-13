import { useState } from 'react';
import './Body.css'
import { useEffect } from 'react';
import Actors from '../Actors/Actors';
const Body = () => {
    // fech api
    const [allActors , setAllActors] = useState([]);
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    }, [])
    return (
        <div className='body-container'>
            <div className='card-container'>
            {
                allActors.map(actor =>
                <Actors key={actor.id} actor={actor}></Actors>
                )
            }
            </div>
        </div>
    );
};

export default Body;