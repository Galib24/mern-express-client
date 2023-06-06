import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
    const [cart] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item)=> item.price + sum, 0)
    return (
        <div>
            <Helmet>
                <title>
                    Mern Express || My Cart
                </title>
            </Helmet>
            <h2 className='text-3xl'>Total Item: {cart.length}  </h2>
            <h2 className='text-3xl'>Total Price: ${total}  </h2>
            <button className='btn btn-error btn-sm'>Pay</button>
        </div>
    );
};

export default MyCart;