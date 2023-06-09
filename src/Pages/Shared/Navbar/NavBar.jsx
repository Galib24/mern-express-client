import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    console.log(cart);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>

        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/order/offer'>Order Products</Link></li>
        <li><Link to='/companyDocuments'>Company Documents</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-error">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>






    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>

                    <span className="btn btn-ghost normal-case text-xl"> <Link to='/'>Mern Express</Link> </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul tabIndex={0} className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {
                    user ? <>
                        <div className="flex gap-3">
                            <span>{user?.displayName}</span>
                            <img className="w-[40px] rounded-full ml-2" src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn btn-ghost bg-lime-500 btn-sm">Log Out</button>
                        </div>
                    </> : <>
                        <li><Link to='/login'>Login</Link></li>
                    </>
                }
            </div>
        </>
    );
};

export default NavBar;