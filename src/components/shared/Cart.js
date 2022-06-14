import React, { useContext } from 'react';

// Context
import { CartContext } from '../../context/CartContextProvider';

// function
import { shorten } from '../../helpers/functions';

// Icons
import Trash from "../../assets/icon/trash.svg";

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, quantity, price, title} = props.data;

    return (
        <div>
            <img src={image} alt = "product"/>
            <div>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ? <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>-</button> :
                                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={Trash} alt="remove" style = {{width: "20px"}}/></button> 
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;