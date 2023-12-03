import { NavLink } from 'react-router-dom';
import { useContext } from "react";

import { ShoppingCartContext } from "../../Context/context";

import OrdersCard from "../../components/OrdersCard";

function OrdersList() {
    const context = useContext(ShoppingCartContext);

    return (
        <>
            <div className="page-heading page-head-height bg-zinc-800" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <div className="inner-content">
                                <h2>All Your Orders</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section bg-zinc-50 dark:bg-zinc-800" id="products">
                <div className="container">
                    <div className="row flex flex-col justify-content-center">
                        <div className='p-2 mt-5 mb-5'>
                            {
                                context.order.map((order, index) => (
                                    <NavLink className="flex justify-center" key={index} to={`/orderslist/${index}`}>
                                        <OrdersCard
                                            date={order.date}
                                            totalPrice={order.totalPrice}
                                            totalProducts={order.totalProducts}
                                        ></OrdersCard>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrdersList
