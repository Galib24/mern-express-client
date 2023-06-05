import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Cover from '../../../Shared/Cover/Cover';
import { Link } from "react-router-dom";

const ProductCategory = ({ items, title, img }) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
           <Link to={`/order/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4 btn-neutral text-black">View Full Menu</button>
           </Link>
           </div> 
        </div>
    );
};

export default ProductCategory;