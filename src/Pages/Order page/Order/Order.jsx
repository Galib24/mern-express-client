import React, { useState } from 'react';
import orderCoverImg from '../../../assets/orderup.png'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from '../Order tab/OrderTab';
import useMenu from '../../../hooks/useMenu';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const offer = menu.filter(item => item.category === 'offer');
    const popular = menu.filter(item => item.category === 'popular');
    const computerGadget = menu.filter(item => item.category === 'computerGadget');
    const SmartGadget = menu.filter(item => item.category === 'SmartGadget');
    const normalGadget = menu.filter(item => item.category === 'normalGadget');

    return (
        <div>
            <Cover img={orderCoverImg} title='Order Products'></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Offer Products</Tab>
                    <Tab>Popular Products</Tab>
                    <Tab>Computer Gadget</Tab>
                    <Tab>Smart Gadget</Tab>
                    <Tab>Normal Gadget</Tab>
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
                <OrderTab items={SmartGadget}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={normalGadget}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;