import { useState } from 'react';
import './Body.css'
import { useEffect } from 'react';
import Actors from '../Actors/Actors';
import Cart from '../Cart/Cart';
const Body = () => {
    // fech api
    const [allActors , setAllActors] = useState([]);
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    }, [])

    // add to cart
    const [cartItems, setCartItems] = useState([]);
    const cartHandler = (actor) =>{
        console.log(actor);
        console.log(cartItems);
        setCartItems([...cartItems, actor]);
    }
    return (
        <div className='body-container'>
            <div className='card-container'>
            {
                allActors.map(actor =>
                <Actors key={actor.id} 
                actor={actor}
                cartHandler={cartHandler}>
                </Actors>
                )
            }
            </div>
            <Cart cartItems={cartItems}></Cart>
        </div>
    );
};

export default Body;