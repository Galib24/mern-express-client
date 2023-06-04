import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Home/Menu/Menu/Menu";
import Order from "../Pages/Order page/Order/Order";


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
                path: 'order',
                element: <Order></Order>
            }
        ]
    },
]);