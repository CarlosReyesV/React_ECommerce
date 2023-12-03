import '../../assets/css/App.css'

import men1 from '../../assets/images/men-01.jpg';
import men2 from '../../assets/images/men-02.jpg';
import men3 from '../../assets/images/men-03.jpg';

import { NavLink } from 'react-router-dom';

import { useContext } from "react";

import { Carousel } from 'antd';

import  {BsFillBalloonHeartFill, BsFillCartPlusFill, BsFillEyeFill} from "react-icons/bs";

import { ShoppingCartContext } from '../../Context/context';
/* 
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/context";
 */
const images = [
    men1,
    men2,
    men3,
];

/* Add products */
/* const addProductToCart = (productData) => {
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1);
} */

/**
 * @returns {JSX.Element}
 */
function SectionOne() {
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <section className="section border-dotted border-b-2 border-zinc-200 dark:border-zinc-800" id="men">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2 className='dark:text-zinc-50'>Mens Latest</h2>
                                <span>Unleash your potential with our cutting-edge range of performance clothing and accessories.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex justify-center">
                        <div className="col-lg-5">
                            <Carousel effect="fade">
                                {images.map((imageUrl, id) => (
                                    <div key={`image-${id}`}>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>
                                                                <BsFillEyeFill className="fa fa-eye w-5 h-5" />
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>
                                                                <BsFillBalloonHeartFill className="fa fa-star w-5 h-5 text-red-600" /* onClick={() => addProductToCart(data.data)} *//>
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>
                                                                <BsFillCartPlusFill className="fa fa-shopping-cart w-5 h-5" />
                                                            </NavLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img src={imageUrl} alt={`Image ${id}`} style={{ width: '100%', height: '460px' }} />
                                            </div>
                                            <div className="down-content bg-zinc-800 rounded-b-3xl">
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionOne;