import './Cart.css'

const Cart = ({cartItems}) => {
    // console.log(cartItems)
    // const {name} = cartItems;
    return (
        <div className='cart-container'>
            <h2>Add to Cart {cartItems.length}</h2>
            <ul>
            {
                cartItems.map(cart =>
                    <li className='item' key={cart.id}>{cart.name}</li>
                )
            }
            </ul>
        </div>
    );
};

export default Cart;