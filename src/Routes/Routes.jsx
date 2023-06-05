import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order page/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import CompanyDocuments from "../Pages/Company Documents/CompanyDocuments";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'products',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <PrivateRoutes><Order></Order></PrivateRoutes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'companyDocuments',
                element: <PrivateRoutes><CompanyDocuments></CompanyDocuments></PrivateRoutes>
            }
        ]
    },
]);