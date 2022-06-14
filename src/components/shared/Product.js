import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

// Context
import { CartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from "../../assets/icon/trash.svg"



const Product = ({productData}) => {
    const {state, dispatch} = useContext(CartContext);
    return (
        <div>
            <img src={productData.image} alt="products" style={{width: "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>detail</Link>
                <div>
                    {
                        quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>-</button>
                    }  
                    {
                        quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
                            <img src={trashIcon} alt="bin" style = {{width: "20px"}}/>
                        </button>
                    } 
                    {
                        isInCart(state, productData.id) ?
                        <button onClick = {() => dispatch({type: "INCREASE", payload: productData})}>+</button> :
                        <button onClick = {()=> dispatch({type: "ADD_ITEM", payload: productData})}>Add to Cart</button>
                    }
                                     
                </div>
            </div>
        </div>
    );
};

export default Product;