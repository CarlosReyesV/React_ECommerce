import bannerIMG1 from '../../assets/images/left-banner-image.jpg';
import bannerIMG2 from '../../assets/images/baner-right-image-01.jpg';
import bannerIMG3 from '../../assets/images/baner-right-image-02.jpg';
import bannerIMG4 from '../../assets/images/baner-right-image-03.jpg';
import bannerIMG5 from '../../assets/images/baner-right-image-04.jpg';

import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context/context';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import AboutUs from './AboutUs';
import Styles from './Styles';
import Suscribe from './Suscribe';

function Home() {
    const context = useContext(ShoppingCartContext)

    return(
        <>
            <div className="main-banner bg-zinc-50 dark:bg-zinc-800" id="top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <div className="thumb">
                                    <div className="inner-content">
                                        <h4>Welcome</h4>
                                        <span>Elegant, Radiant &amp; Stunning clothes</span>
                                        <div className="main-border-button">
                                            <NavLink to="/all" onClick={() => context.setSearchByCategory()}>Purchase Now!</NavLink>
                                        </div>
                                    </div>
                                    <img src={bannerIMG1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Women</h4>
                                                    <span>Best Clothes For Women</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Women</h4>
                                                        <p>Elevate your everyday look with casual pieces that effortlessly blend comfort and fashion.</p>
                                                        <div className="main-border-button">
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`women's clothing`)}>Discover more</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerIMG2}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Men</h4>
                                                    <span>Best Clothes For Men</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Men</h4>
                                                        <p>Explore and uncover styles with bold statements, dynamic designs and an edgy flair.</p>
                                                        <div className="main-border-button">
                                                            <NavLink to="/clothes" onClick={() => context.setSearchByCategory(`men's clothing`)}>Discover more</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerIMG3}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Electronics</h4>
                                                    <span>Best Clothes For Kids</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Electronics</h4>
                                                        <p>Immerse yourself in cutting-edge electronics. Explore innovative features and tech.</p>
                                                        <div className="main-border-button">
                                                            <NavLink to="/electronics" onClick={() => context.setSearchByCategory('electronics')}>Discover More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerIMG4}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>Accessories</h4>
                                                    <span>Best Trend Accessories</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>Accessories</h4>
                                                        <p>Enhance your outfit with our range of accessories designed for effortless charm.</p>
                                                        <div className="main-border-button">
                                                            <NavLink to="/jewelry" onClick={() => context.setSearchByCategory('jewelery')}>Discover More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={bannerIMG5}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Men's latest */}
                <SectionOne />
                {/* Women's Latest */}
                <SectionTwo/>
                {/* Our products */}
                <AboutUs/>
                {/* Social Media */}
                <Styles/>
                {/* Suscribe */}
                <Suscribe/>
            </div>
        </>
    )
}

export default Home;