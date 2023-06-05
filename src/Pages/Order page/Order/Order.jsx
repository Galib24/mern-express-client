import React, { useState } from 'react';
import orderCoverImg from '../../../assets/orderup.png'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../Order tab/OrderTab';
import useMenu from '../../../hooks/useMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    const categories = ['offer', 'popular', 'computerGadget', 'smartGadget', 'normalGadget']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    // console.log(category);
    const offer = menu.filter(item => item.category === 'offer');
    const popular = menu.filter(item => item.category === 'popular');
    const computerGadget = menu.filter(item => item.category === 'computerGadget');
    const smartGadget = menu.filter(item => item.category === 'SmartGadget');
    const normalGadget = menu.filter(item => item.category === 'normalGadget');

    return (
        <div>
            <Helmet>
                <title>Mern Express || Order Products</title>
            </Helmet>
            <Cover img={orderCoverImg} title='Order Products'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>offer</Tab>
                    <Tab>popular</Tab>
                    <Tab>computerGadget</Tab>
                    <Tab>smartGadget</Tab>
                    <Tab>normalGadget</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={offer}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={popular}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={computerGadget}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={smartGadget}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={normalGadget}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;