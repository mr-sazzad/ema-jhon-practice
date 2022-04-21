import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <h4 className='P-name'>{name}</h4>
            <p className='details'><small>Manufacturer: {seller}</small></p>
            <p className='details'><small>Price: {price}</small></p>
            <p className='details'><small>Ratings: {ratings} star</small></p>
            <button className='add-button'>Add To Cart</button>
        </div>
    );
};

export default Product;