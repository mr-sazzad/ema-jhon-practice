import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
        .then(data =>setProducts(data))
    })


    return (
        <div className='interface-part'>
            <div className='product-container'>

                {
                    products.map(product => <Product
                        key={product.id}
                        product ={product}
                        ></Product>)
                }

            </div>
            <div className='cart-container'>
                <h3>ORDER SUMMARY</h3>
            </div>
        </div>
    );
};

export default Shop;