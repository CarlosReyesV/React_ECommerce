import { useContext } from "react";

import ShopCard from '../../components/ShopCard';

import { ShoppingCartContext } from '../../Context/context';

import { Input } from 'antd';
const { Search } = Input;

function AllProducts() {
    const context = useContext(ShoppingCartContext)

    const renderView = () => {
        if (context.filteredItems?.length > 0){
                return (
                    context.filteredItems?.map(item => (
                        <ShopCard key={item.id} data={item}/>
                    ))
                )
            } else {
                return (
                    <div className="dark:text-zinc-50 text-zinc-800 w-full flex justify-center">
                        <h3>No Coincidences</h3>
                    </div>
                )
            }
    }

    return(
        <>
            <div className="page-heading page-head-height bg-zinc-800" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content mt-5">
                                <h2>Check what we offer</h2>
                                <Search className='text-zinc-900' size="large" onChange={(event) => context.setSearchByTitle(event.target.value)} placeholder="Search a product..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section bg-zinc-50 dark:bg-zinc-800" id="products">
                <div className="container">
                    <div className="row flex justify-content-center">
                        {renderView()}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProducts;