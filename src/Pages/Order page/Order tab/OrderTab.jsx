import React from 'react';
import ProductCard from '../../../components/Product card/ProductCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 gap-8'>
                        {
                            items.map(item => <ProductCard
                                key={item._id}
                                item={item}
                            ></ProductCard>)
                        }
                    </div>
    );
};

export default OrderTab;