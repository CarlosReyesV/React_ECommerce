import  { AiFillCalendar } from "react-icons/ai";
import  { BsFillCartFill } from "react-icons/bs";
import  { MdArrowForwardIos } from "react-icons/md";

const OrdersCard = props => {
    const { date, totalPrice, totalProducts } = props

    return (
        <div className="flex justify-between w-64 items-center mb-3 border rounded-xl bg-zinc-50 border-black hover:bg-gray-300 cursor-pointer transition delay-75">
            <div className="p-2 flex flex-row">
                <div className="p-2 flex flex-col">
                    <div className="flex flex-row text-base text-slate-900">
                        <AiFillCalendar className="m-1"></AiFillCalendar><span className="mr-2">{date}</span>
                    </div>
                    <div className="flex flex-row text-base text-slate-900">
                        <BsFillCartFill className="m-1"></BsFillCartFill><span className="ml-1">{totalProducts}</span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <h5 className="pt-3 text-slate-900">$<span>{totalPrice}</span></h5>
                    <MdArrowForwardIos className="text-2xl text-slate-700 m-3"></MdArrowForwardIos>
                </div>
            </div>
        </div>
    )
}

export default OrdersCard