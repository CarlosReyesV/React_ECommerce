import  { BsFillBalloonHeartFill, BsFillCartPlusFill, BsFillEyeFill, BsFillCartCheckFill } from "react-icons/bs";

import { useContext, useState } from "react";
import { Button, Modal } from 'antd';

import { ShoppingCartContext } from "../Context/context";

const ShopCard = (data) => {
    const context = useContext(ShoppingCartContext);
    
    /* Open modal */
    const [open, setOpen] = useState(false);
    const showProduct = () => {
        setOpen(true);
    };

    /* Add products on details */
    const addProductOnDetails = (productData) => {
        addProductToCart(productData)
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    /* Add products */
    const addProductToCart = (productData) => {
        context.setCartProducts([...context.cartProducts, productData]);
        context.setCount(context.count + 1);
    }

    /* Add Icon Change */
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return(
                <li>
                    <a className="cursor-pointer">
                        <BsFillCartCheckFill className="fa fa-shopping-cart w-5 h-5 text-green-500" />
                    </a>
                </li>
            )
        } else {
            return(
                <li>
                    <a className="cursor-pointer" onClick={() => addProductToCart(data.data)}>
                        <BsFillCartPlusFill className="fa fa-shopping-cart w-5 h-5" />
                    </a>
                </li>
            )
        }
    }

    /* Disable add Button */
    const renderButton = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return(
                <div>
                    <Button disabled className="text-slate-100 bg-blue-700"
                        key="buy"
                        type="primary"
                    >
                        Add to cart
                    </Button>,
                </div>
            )
        } else {
            return(
                <div>
                    <Button className="text-slate-100 bg-blue-700"
                        key="buy"
                        type="primary"
                        onClick={() => addProductOnDetails(data.data)}
                    >
                        Add to cart
                    </Button>,
                </div>
            )
        }
    }
    
    return (
        <>
            <div className="w-64 m-5 ">
                <div className="item bg-zinc-50 dark:bg-zinc-700 rounded-lg">
                    <div className="thumb">
                        <div className="hover-content">
                            <ul>
                                <li><a className="cursor-pointer" onClick={() => showProduct(data.data)}><BsFillEyeFill className="fa fa-eye w-5 h-5"></BsFillEyeFill></a></li>
                                <li><a className="cursor-pointer" ><BsFillBalloonHeartFill className="fa fa-star w-5 h-5 text-red-600"></BsFillBalloonHeartFill></a></li>
                                {renderIcon(data.data.id)}
                            </ul>
                        </div>
                        <img className='w-36 h-64 rounded-lg' src={data.data.image} alt={data.data.title} style={{ background: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))"}}/>
                    </div>
                    <div className="down-content">
                        <p className="px-2 text-xl dark:text-zinc-50 font-bold">{data.data.title}</p>
                        <span className="px-2 pb-1">${data.data.price}</span>
                        <span className="px-2 pb-1">{data.data.category}</span>
                    </div>
                </div>
                {/* Modal */}
                <Modal
                    className=""
                    open={open}
                    title={data.data.title}
                    onCancel={handleCancel}
                    onOk={addProductOnDetails}
                    footer={renderButton(data.data.id)}
                >
                    <div className="">
                        <div className="flex justify-center">
                            <img className='w-40 h-40' src={data.data.image} alt={data.data.title}/>
                        </div>
                        <h5 className="pt-2">Price: ${data.data.price}</h5>
                        <br />
                        <span>{data.data.description}</span>
                        <br />
                        <div className="flex flex-row pt-2">
                            <p>Category: <span className="pr-3 font-bold">{data.data.category}</span></p>
                            <p>Rate: <span className="pr-3 font-bold">{data.data.rating.rate}</span></p>
                            <p>Stock: <span className="pr-3 font-bold">{data.data.rating.count}</span></p>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default ShopCard