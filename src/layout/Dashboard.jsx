import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';

const Dashboard = () => {
    const [cart] = useCart()
    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Mern Express || Dashboard </title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                    <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart 
                    
                    <span className="badge inl badge-error">+{cart?.length || 0}</span>
                    </NavLink></li>
                  


                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/order/offer'>Order Products</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;