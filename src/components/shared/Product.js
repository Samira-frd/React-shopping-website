import React from 'react';

// functions
import { shorten } from '../helpers/functions';

const Product = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="products" style={{width: "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <a href='#'>detail</a>
                <div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;