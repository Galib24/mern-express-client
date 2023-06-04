import React from 'react';

const ProductCard = ({item}) => {
    const { name, image, price, description } = item;
    return (
        <div className="card w-96  shadow-xl bg-opacity-20 bg-green-300">
            <figure><img src={image} alt="Shoes" /></figure>
                <p className='bg-red-600 text-white absolute right-0 mr-4 mt-4 px-4 rounded-xl'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;