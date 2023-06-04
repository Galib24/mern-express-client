import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import menuImg from '../../../../assets/woman-choosing-earphones-store_1303-31280.png'
import offerImg from '../../../../assets/offer.jpg'
import computerGadgetImg from '../../../../assets/computergadget.png'
import smartGadgetImg from '../../../../assets/smart.png'
import normalGadgetImg from '../../../../assets/normalgadget1.png'
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/sectionTitle/SectionTitle';
import ProductCategory from '../ProductCategory/ProductCategory';


const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offer');
    const popular = menu.filter(item => item.category === 'popular');
    const computerGadget = menu.filter(item => item.category === 'computerGadget');
    const SmartGadget = menu.filter(item => item.category === 'SmartGadget');
    const normalGadget = menu.filter(item => item.category === 'normalGadget');

    return (
        <div>
            <Helmet>
                <title>Mern Express || Products</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title={'our products'}></Cover>
            <SectionTitle subHeading='Do not Miss Best Products' heading='Offer in running!!'></SectionTitle>
            {/* offer product */}
            <ProductCategory items={offer} title='Offer Products'></ProductCategory>

            {/* popular product*/}
            <ProductCategory items={popular} title='Popular Item' img={offerImg}></ProductCategory>

            {/* computerGadget product*/}
            <ProductCategory items={computerGadget} title='Computer Gadget' img={computerGadgetImg}></ProductCategory>

            {/* SmartGadget product*/}
            <ProductCategory items={SmartGadget} title='Smart Gadget' img={smartGadgetImg}></ProductCategory>

            {/* normalGadget product*/}
            <ProductCategory items={normalGadget} title='Normal Gadget' img={normalGadgetImg}></ProductCategory>
        </div>
    );
};

export default Menu;