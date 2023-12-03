//import logo1 from '../assets/images/Super-box.png';

import { NavLink, useNavigate } from 'react-router-dom';

import { useContext, useState } from "react";

import { Button, Dropdown, Space, Drawer } from 'antd';

import { FcMenu } from "react-icons/fc";
import { BsFillCartPlusFill, BsFillBalloonHeartFill, BsCartDash } from "react-icons/bs";

import { BiSolidRightArrow } from "react-icons/bi";

import { ShoppingCartContext } from '../Context/context';
import { totalPrice } from '../util/util';
/* import ShopCard from './ShopCard'; */

const Navbar = () => {
    const context = useContext(ShoppingCartContext);

    /*  */
    const navigate = useNavigate();

    /* Sign out */
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    /* Account */
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)
    /* Has an account */
    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem('sign-out', stringifiedSignOut)
        context.setSignOut(true)
    }

    /* Shopping cart */
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const current = new Date();
    const dates = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const handleCheckOut = () => {
        if (hasUserAnAccount) {
            const orderToAdd = {
                date: dates,
                products: context.cartProducts,
                totalProducts: context.cartProducts.length,
                totalPrice: totalPrice(context.cartProducts)
            }
            context.setOrder([...context.order, orderToAdd])
            context.setCount(0);
            context.setCartProducts([])
            context.setSearchByTitle(null)
            setOpen(false);
            console.log(orderToAdd)
        }
        else {
            navigate('/sign-in')
        }
    };

    /* Delete selected product */
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    /* Sing in/out change */
    const renderView = () => {
        if (hasUserAnAccount && isUserSignOut) {
            return (
                <li className="scroll-to-section">
                    <NavLink className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-300 dark:hover:text-zinc-300"
                        to="/sign-in"
                        onClick={() => handleSignOut()}
                    >Sign In
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li className="submenu cursor-pointer text-zinc-900 dark:text-zinc-100 hover:text-zinc-300 dark:hover:text-zinc-300">
                    <div className='flex flex-row'>
                        <a>{parsedAccount?.name}</a>
                        <BiSolidRightArrow className='ml-1 transform delay-100' style={{ marginTop: "12px" }}></BiSolidRightArrow>
                    </div>
                    <ul>
                        <li><NavLink className="text-zinc-900 dark:text-zinc-100" to="/account">Account</NavLink></li>
                        <li><NavLink className="text-zinc-900 dark:text-zinc-100" to="/orderslist">All orders</NavLink></li>
                        <li><NavLink className="text-zinc-900 dark:text-zinc-100" to="/sign-in" onClick={() => handleSignOut()}>Sign-Out</NavLink></li>
                    </ul>
                </li>
            )
        }
    }

    /*  */
    const renderNavView = () => {
        if (hasUserAnAccount && isUserSignOut) {
            return (
                <div>
                    <NavLink className="text-zinc-900 hover:text-zinc-900 py-1"
                        to="/sign-in"
                        onClick={() => handleSignOut()}
                    >Sign In
                    </NavLink>
                </div>
            )
        } else {
            return (
                <div className='flex flex-col'>
                    <NavLink className="text-zinc-900 hover:text-zinc-900 py-1" to="/account">Account</NavLink>
                    <NavLink className="text-zinc-900 hover:text-zinc-900 py-1" to="/orderslist">All orders</NavLink>
                    <NavLink className="text-zinc-900 hover:text-zinc-900 py-1" to="/sign-in" onClick={() => handleSignOut()}>Sign-Out</NavLink>
                </div>
            )
        }
    }

    /* Add Icon Change */
    const renderButton = () => {
        const filteredProducts = context.cartProducts;
        if (filteredProducts <= 0) {
            return (
                <div>
                    <Button disabled className='dark:bg-zinc-400 text-zinc-100 bg-green-500'
                        key="buy"
                        type="primary"
                        onClick={() => handleCheckOut()}
                    >Confirm</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <Button className='text-zinc-100 bg-green-500'
                        key="buy"
                        type="primary"
                        onClick={() => handleCheckOut()}
                    >Confirm</Button>
                </div>
            )
        }
    }

    /* Responsive navbar */
    const items = [
        {
            key: '1',
            label: (
                <NavLink className="scroll-to-section" to="/">
                    Home
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink className="scroll-to-section" to="/all" onClick={() => context.setSearchByCategory()}>
                    All
                </NavLink>
            ),
        },
        {
            key: '3',
            label: (
                <NavLink className="scroll-to-section" to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>
                    Men Clothes
                </NavLink>
            ),
        },
        {
            key: '4',
            label: (
                <NavLink className="scroll-to-section" to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                    Women Clothes
                </NavLink>
            ),
        },
        {
            key: '5',
            label: (
                <NavLink className="scroll-to-section" to="/electronics" onClick={() => context.setSearchByCategory('electronics')}>
                    Electronics
                </NavLink>

            ),
        },
        {
            key: '6',
            label: (
                <NavLink className="scroll-to-section" to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>
                    Jewelry
                </NavLink>

            ),
        },
        {
            key: '7',
            label: (
                <NavLink className="scroll-to-section" to="/orderslist">
                    All Orders
                </NavLink>
            ),
        },
        {
            key: '8',
            label: (
                <div className="scroll-to-section" to="">
                    {renderNavView()}
                </div>
            ),
        },
        {
            key: '9',
            label: (
                <div className="scroll-to-section flex flex-row">
                    <button className='p-2'>
                        <BsFillBalloonHeartFill className='transition delay-75 text-xl text-rose-600 hover:text-rose-500' /><NavLink></NavLink>
                    </button>
                </div>
            ),
        },
    ];

    //View
    return (
        <>
            <header className="bg-zinc-50 dark:bg-zinc-800 header-area header-sticky border-dotted border-b-2 border-zinc-200 dark:border-zinc-800">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <NavLink to="/" className="logo">
                                    <h5 className='text-zinc-900 text-left dark:text-zinc-50 uppercase'>Glass Box Superstore</h5>
                                    {/* <img src={logo1} /> */}
                                </NavLink>
                                <ul className="nav">
                                    <li className="scroll-to-section"><NavLink className="text-zinc-900 dark:text-zinc-50" to="/">Home</NavLink></li>
                                    <li className="scroll-to-section "><NavLink className="text-zinc-900 dark:text-zinc-50" to="/all" onClick={() => context.setSearchByCategory()}>All</NavLink></li>
                                    <li className="submenu cursor-pointer text-zinc-900 dark:text-zinc-100 hover:text-zinc-300 dark:hover:text-zinc-300">
                                        <div className='flex flex-row'>
                                            <a>Clothes</a>
                                            <BiSolidRightArrow className='ml-1 transform delay-100' style={{ marginTop: "12px" }}></BiSolidRightArrow>
                                        </div>
                                        <ul>
                                            <li><NavLink className="text-zinc-900 dark:text-zinc-100" to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>Men</NavLink></li>
                                            <li><NavLink className="text-zinc-900 dark:text-zinc-100" to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>Women</NavLink></li>
                                        </ul>
                                    </li>
                                    {/* <li className="scroll-to-section"><NavLink className="text-zinc-900 dark:text-zinc-50" to="/clothes">Clothes</NavLink></li> */}
                                    <li className="scroll-to-section"><NavLink className="text-zinc-900 dark:text-zinc-50" to="/electronics" onClick={() => context.setSearchByCategory('electronics')}>Electronics</NavLink></li>
                                    <li className="scroll-to-section"><NavLink className="text-zinc-900 dark:text-zinc-50" to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>Jewelry</NavLink></li>
                                    {renderView()}
                                    <NavLink className='p-2' to="">
                                        <BsFillBalloonHeartFill className='transition delay-75 text-xl text-rose-600 hover:text-rose-500' />
                                    </NavLink>
                                    <NavLink className='p-2' onClick={showDrawer}>
                                        <BsFillCartPlusFill className='transition delay-75 text-xl text-zinc-900 hover:text-gray-500 dark:text-zinc-50 dark:hover:text-gray-400' />
                                    </NavLink>
                                    <p className='pt-2 text-zinc-900 dark:text-zinc-100'>{context.count}</p>
                                </ul>
                                <ul className='burgerMenu'>
                                    <Space direction="vertical">
                                        <Space wrap>
                                            <NavLink className='p-2' onClick={showDrawer}>
                                                <BsFillCartPlusFill className='transition delay-75 text-xl text-zinc-900 hover:text-gray-500 dark:text-zinc-50 dark:hover:text-gray-400' />
                                            </NavLink>
                                            <p className='pt-1 text-zinc-900 dark:text-zinc-100'>{context.count}</p>
                                            <Dropdown
                                                menu={{
                                                    items,
                                                }}
                                                placement="bottomRight"
                                            >
                                                <Button className='dark:bg-zinc-50'><FcMenu></FcMenu></Button>
                                            </Dropdown>
                                        </Space>
                                    </Space>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            {/* Drawer cart menu */}
            <Drawer className="dark:bg-zinc-800 dark:text-zinc-50 drawerIcon" placement="right" open={open} onClose={onClose}
                extra={
                    <Space>
                        <div className='flex flex-row'>
                            <h5 className='mr-3 mt-4'>Shopping Cart</h5>
                            <div className='flex flex-col'>
                                <NavLink to="/orderslist">
                                    {renderButton}
                                </NavLink>
                                <p className='flex justify-center dark:text-zinc-50'>Total: ${totalPrice(context.cartProducts)}</p>
                            </div>
                        </div>
                    </Space>
                }
            >
                {context.cartProducts.map((product, index) => (
                    <div key={index} className='p-1'>
                        <div className='flex justify-center m-2'>
                            <img className='w-36' src={product.image} alt={product.title} />
                        </div>
                        <h5>{product.title}</h5>
                        <div className='flex flex-row justify-between'>
                            <p className='dark:text-zinc-50'>Price: ${product.price}</p>
                            <BsCartDash onClick={() => handleDelete(product.id)} className='cursor-pointer text-red-600 text-2xl'></BsCartDash>
                        </div>
                    </div>
                ))}
            </Drawer>
        </>
    )
}

export default Navbar;