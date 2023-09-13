import './Cart.css'

const Cart = ({cartItems, totalBudget, remaining, totalCost}) => {
    // console.log(cartItems)
    // const {name} = cartItems;
    return (
        <div className='cart-container'>
            <h2>Hired List {cartItems.length}</h2>
            <h3>Total Budget : ${totalBudget}</h3>
            <p>Total Cost : ${totalCost}</p>
            <p>Remaining Budget : ${remaining}</p>
            <ul className='list-container'>
            {
                cartItems.map(cart =>
                    <li className='item' key={cart.id}>
                        <img className='profile' src={cart.image} alt="" />
                        <h3>{cart.name}</h3>
                    </li>
                )
            }
            </ul>
        </div>
    );
};

export default Cart;