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
    const totalBudget = 25000;
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(totalBudget);
    // console.log(totalBudget, remaining)
    const cartHandler = (actor) =>{
        // console.log(actor);
        // console.log(cartItems);
        const isAdded = cartItems.find(added=>added.id === actor.id);
        if(isAdded){
            return alert(`${actor.name} is already hired`);
        }
        if(remaining > actor.salary){
            const newtotalCost = totalCost + actor.salary;
            const newRemaining = totalBudget - newtotalCost;
            setTotalCost(newtotalCost)
            setRemaining(newRemaining)
            setCartItems([...cartItems, actor]);
        }else{
            return alert("You can't hire")
        }
        
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
            <Cart 
                cartItems={cartItems}
                totalBudget={totalBudget}
                remaining={remaining}
                totalCost={totalCost}
            >
            </Cart>
        </div>
    );
};

export default Body;