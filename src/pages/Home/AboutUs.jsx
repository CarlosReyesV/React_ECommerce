import about1 from '../../assets/images/explore-image-01.jpg'
import about2 from '../../assets/images/explore-image-02.jpg'

import { NavLink } from 'react-router-dom';

function AboutUs() {
    return(
        <>
            <section className="section border-dotted border-b-2 border-zinc-200 dark:border-zinc-800" id="explore">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-content">
                                <h2 className='dark:text-zinc-50'>Explore Our Products</h2>
                                <span>Experience the grandeur of Glass Box SuperStore, where every imaginable product finds its place. Delve into our enticing assortment, featuring a wide array of clothing for men, women, and kids, innovative electronics and more. Your journey through boundless choices begins here.</span>
                                <div className="main-border-button">
                                    <NavLink className='dark:bg-zinc-50' to="/all">Discover More</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="leather">
                                            <h4>Leather Bags</h4>
                                            <span>Latest Collection</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="first-image">
                                            <img src={about1} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className="second-image">
                                            <img src={about2} alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="types">
                                            <h4>Different Types</h4>
                                            <span>Over 304 Products</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs;