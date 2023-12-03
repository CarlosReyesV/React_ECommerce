import { BrowserRouter, useRoutes } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../Context/context.jsx';

import ScrollToTop from '../util/ScrollToTop.js';
/* import { AppRoutes } from '../Routes/AppRoutes.jsx'; */

import { FloatButton } from 'antd';
import { BiSolidSun } from "react-icons/bi";

import Navbar from "../components/Navbar.jsx";
import Account from "../pages/Account/Account.jsx";
import AllProducts from '../pages/All/AllProducts.jsx';
import Error from "../pages/Error/Error.jsx";
import Home from "../pages/Home/Home.jsx";
import Order from "../pages/Order/Order.jsx";
import OrdersList from "../pages/OrdersList/OrdersList.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import Footer from "../components/Footer.jsx";

const AppRoutes = () => {
    const context = useContext(ShoppingCartContext)
    /* Account */
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    /* Sign out */
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    /* Has an account */
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut

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

const AppUI = () => {
    initializeLocalStorage()

    /* Light/Dark theme */
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches){
            return "dark";
        }
        return "light";
    });
    useEffect(()=> {
        if (theme == "dark"){
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <Navbar />
                <AppRoutes />
                <FloatButton 
                    className='bg-zinc-50'
                    type="default"
                    icon={<BiSolidSun className='text-zinc-900'/>}
                    onClick={handleChangeTheme}
                />
                <Footer />
            </BrowserRouter>
        </ShoppingCartProvider>
    )
}

export default AppUI