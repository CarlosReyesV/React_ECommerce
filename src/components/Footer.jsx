//import logo1 from '../assets/images/Super-box.png'

import { NavLink } from 'react-router-dom';

import { useContext } from "react";

import  {FaFacebookF, FaTwitter, FaInstagram} from "react-icons/fa";

import { ShoppingCartContext } from '../Context/context';

function Footer() {
    const context = useContext(ShoppingCartContext);

    return(
        <>
            <footer className='bg-zinc-800 dark:bg-zinc-800'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="first-item">
                                <div className="logo footerLogo pr-4">
                                    <h5 className='text-zinc-50 text-left uppercase'>Glass Box Superstore</h5>
                                    {/* <img src={logo1} /> */}
                                </div>
                                <h4>Address</h4>
                                <ul>
                                    <li><p className='text-white'>Building, 30 Wall St #8, NYC 10005, United States</p></li>
                                    <li><p className='text-white'>+17 722-772-7272</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>Shopping &amp; Categories</h4>
                            <ul>
                                <li><NavLink to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>Men’s Shopping</NavLink></li>
                                <li><NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>Women’s Shopping</NavLink></li>
                                <li><NavLink to="/electronics" onClick={() => context.setSearchByCategory('electronics')}>Electronics</NavLink></li>
                                <li><NavLink to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>Jewelry</NavLink></li>
                            </ul>
                        </div>
                        {/* <div className="col-lg-3">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Homepage</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Help &amp; Information</h4>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Tracking ID</a></li>
                            </ul>
                        </div> */}
                        <div className="col-lg-12">
                            <div className="under-footer">
                                <p>Copyright © 2023 Box Association, Ltd. All Rights Reserved.</p>
                                <p>Updated from: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p>
                                <ul>
                                    <li><a href="https://www.facebook.com"><FaFacebookF className="fa fa-facebook"></FaFacebookF></a></li>
                                    <li><a href="https://twitter.com"><FaTwitter className="fa fa-twitter"></FaTwitter></a></li>
                                    <li><a href="https://www.instagram.com"><FaInstagram className="fa fa-linkedin"></FaInstagram></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;