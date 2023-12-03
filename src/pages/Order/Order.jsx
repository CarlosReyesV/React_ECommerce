import { useContext } from "react";

import { ShoppingCartContext } from "../../Context/context";

import { NavLink } from 'react-router-dom';

import { BsArrow90DegLeft } from 'react-icons/bs';

import { Button } from "antd";

import OrderCard from "../../components/OrderCard";

function Order() {
    const context = useContext(ShoppingCartContext);
    /* console.log(context.order); */
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (
        <>
            <div className="page-heading page-head-height bg-zinc-800" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <div className="inner-content">
                                <h2>Your Order</h2>
                                <NavLink to="/orderslist">
                                    <Button className="bg-slate-100"><BsArrow90DegLeft></BsArrow90DegLeft></Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section bg-zinc-50 dark:bg-zinc-800" id="products">
                <div className="container">
                    <div className="row flex justify-content-center">
                        {
                            context.order?.[index]?.products.map(product => (
                                <OrderCard 
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    image={product.image}
                                    price={product.price}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Order
