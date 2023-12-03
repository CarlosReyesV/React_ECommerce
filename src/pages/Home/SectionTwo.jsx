import women1 from '../../assets/images/women-01.jpg'
import women2 from '../../assets/images/women-02.jpg'
import women3 from '../../assets/images/women-03.jpg'

import { NavLink } from 'react-router-dom';

import { useContext } from "react";

import { Carousel } from 'antd';

import  {BsFillBalloonHeartFill, BsFillCartPlusFill, BsFillEyeFill} from "react-icons/bs";

import { ShoppingCartContext } from '../../Context/context';

const images = [
    women1,
    women2,
    women3,
];

/**
 * @returns {JSX.Element}
 */
function SectionTwo() {
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <section className="section border-dotted border-b-2 border-zinc-200 dark:border-zinc-800" id="women">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2 className='dark:text-zinc-50'>Women Latest</h2>
                                <span>Experience the perfect blend of fashion and function with our athleisure fusion collection.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="flex justify-center">
                        <div className="col-lg-5">
                            <Carousel effect="fade" autoplay>
                                {images.map((imageUrl, id) => (
                                    <div key={`image-${id}`}>
                                        <div className="item">
                                            <div className="thumb">
                                                <div className="hover-content">
                                                    <ul>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                                                                <BsFillEyeFill className="fa fa-eye w-5 h-5" />
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                                                                <BsFillBalloonHeartFill className="fa fa-star w-5 h-5 text-red-600" />
                                                            </NavLink>
                                                        </li>
                                                        <li>
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
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

export default SectionTwo;