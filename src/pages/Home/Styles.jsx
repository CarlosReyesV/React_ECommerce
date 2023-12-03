import social1 from '../../assets/images/instagram-01.jpg';
import social2 from '../../assets/images/instagram-02.jpg';
import social3 from '../../assets/images/instagram-03.jpg';
import social4 from '../../assets/images/instagram-04.jpg';
import social5 from '../../assets/images/instagram-05.jpg';
import social6 from '../../assets/images/instagram-06.jpg';

import { NavLink } from 'react-router-dom';

import { useContext } from "react";

import { ShoppingCartContext } from '../../Context/context';

function Styles() {
    const context = useContext(ShoppingCartContext);

    return(
        <>
            <section className="section border-dotted border-b-2 border-zinc-200 dark:border-zinc-800" id="social">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2 className='dark:text-zinc-50'>Check our styles</h2>
                                <span>See what makes Glass Box SuperStore different from other marketplaces.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="images grid sm:grid-rows-1 sm:grid-flow-col">
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                                        <h6>Fashion</h6>
                                    </NavLink>
                                </div>
                                <img src={social1} alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>
                                        <h6>New</h6>
                                    </NavLink>
                                </div>
                                <img src={social2} alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                                        <h6>Brand</h6>
                                    </NavLink>
                                </div>
                                <img src={social3} alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>
                                        <h6>Makeup</h6>
                                    </NavLink>
                                </div>
                                <img src={social4} alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>
                                        <h6>Leather</h6>
                                    </NavLink>
                                </div>
                                <img src={social5} alt=""/>
                            </div>
                        </div>
                        <div className="">
                            <div className="thumb">
                                <div className="icon">
                                    <NavLink to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>
                                        <h6>Bag</h6>
                                    </NavLink>
                                </div>
                                <img src={social6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Styles;