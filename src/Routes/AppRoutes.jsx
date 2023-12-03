import { useRoutes } from 'react-router-dom';
import { useContext } from 'react';

import { ShoppingCartContext } from '../Context/context.jsx';

import Account from "../pages/Account/Account.jsx";
import AllProducts from '../pages/All/AllProducts.jsx';
import Error from "../pages/Error/Error.jsx";
import Home from "../pages/Home/Home.jsx";
import Order from "../pages/Order/Order.jsx";
import OrdersList from "../pages/OrdersList/OrdersList.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";

const AppRoutes = () => {
    const context = useContext(ShoppingCartContext);
    
    /* Account */
    const account = localStorage.getItem('account');
    const parsedAccount = JSON.parse(account);
    /* Sign out */
    const signOut = localStorage.getItem('sign-out');
    const parsedSignOut = JSON.parse(signOut);
    /* Has an account */
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true;
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
    const isUserSignOut = context.signOut || parsedSignOut;

    let routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/account", element: hasUserAnAccount && !isUserSignOut ? <Account /> : <SignIn /> },
        { path: "/all", element: <AllProducts /> },
        { path: "/clothes", element: <AllProducts /> },
        { path: "/electronics", element: <AllProducts /> },
        { path: "/jewelry", element: <AllProducts /> },
        { path: "/*", element: <Error /> },
        { path: "/order", element: hasUserAnAccount && !isUserSignOut ? <Order /> : <SignIn /> },
        { path: "/orderslist", element: hasUserAnAccount && !isUserSignOut ? <OrdersList /> : <SignIn /> },
        { path: "/orderslist/last", element: hasUserAnAccount && !isUserSignOut ? <Order /> : <SignIn /> },
        { path: "/orderslist/:id", element: hasUserAnAccount && !isUserSignOut ? <Order /> : <SignIn /> },
        { path: "/sign-in", element: <SignIn /> },
    ])

    return routes
}

export default AppRoutes;