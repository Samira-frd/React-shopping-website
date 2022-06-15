import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Components
import Cart from './shared/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';

// Styles
import styles from "./ShopCart.module.css";


const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItem.map(item => <Cart key = {item.id} data = {item}/>)}
            </div>
            {
                state.itemCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items:</span>{state.itemCounter}</p>
                    <p><span>Total Price:</span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Check out</button>
                    </div>
                </div>
            }
            
            {
                state.checkOut && 
                <div className={styles.complete}>
                    <h3>Thanks for shopping with us.</h3>
                    <Link to="/products">Buy more</Link>
                </div>
            }

            {
                !state.checkOut && state.itemCounter === 0 && 
                <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Go to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;