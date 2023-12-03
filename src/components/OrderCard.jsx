/* import  { BsFillEyeFill } from "react-icons/bs";

import { useState } from "react";
import { Button, Modal } from 'antd'; */

const OrderCard = props => { 
    const { id, title, image, price, category } = props

    /* Open modal */
    /* const [open, setOpen] = useState(false);
    const showProduct = () => {
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    }; */

    
    return (
        <>
            <div className="w-64 m-5">
                <div className="item">
                    <div className="thumb">
                        <div className="hover-content">
                            {/* <ul>
                                <li><a className="cursor-pointer" onClick={() => showProduct(data.data)}><BsFillEyeFill className="fa fa-eye w-5 h-5"></BsFillEyeFill></a></li>
                            </ul> */}
                        </div>
                        <img className='w-36 h-64' src={image} alt={title}/>
                    </div>
                    <div className="down-content">
                        <h4 className="dark:text-zinc-50">{title}</h4>
                        <span>${price}</span>
                        <span>{category}</span>
                    </div>
                </div>
                {/* Modal */}
                {/* <Modal
                    open={open}
                    title={data.data.title}
                    onCancel={handleCancel}
                    footer={[
                        <Button disabled className="text-slate-100 bg-blue-700"
                            key="buy"
                            type="primary"
                        >
                        </Button>,
                    ]}
                >
                    <div>
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
                </Modal> */}
            </div>
        </>
    )
}

export default OrderCard