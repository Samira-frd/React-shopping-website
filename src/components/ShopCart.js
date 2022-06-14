import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <div>
                {state.selectedItem.map(item => <Cart key = {item.id} data = {item}/>)}
            </div>
            {
                state.itemCounter > 0 &&
                <div>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total Price:</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>Check out</button>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            
            {
                state.checkOut && 
                <div>
                    <h3>Thanks for shopping with us.</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }

            {
                !state.checkOut && state.itemCounter === 0 && 
                <div>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;