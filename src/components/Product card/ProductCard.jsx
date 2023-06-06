import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const ProductCard = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { name, image, price, description, _id } = item;
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddToCart = item => {
        console.log(item);
        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Product Added to Cart',
                            showConfirmButton: false,
                            timer: 1500
                        });

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the product',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96  shadow-xl bg-opacity-20 bg-green-300">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-red-600 text-white absolute right-0 mr-4 mt-4 px-4 rounded-xl'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;