import { AiOutlineMail } from 'react-icons/ai';

function Suscribe() {
    return(
        <>
            <div className="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-heading">
                                <h2 className='dark:text-zinc-50'>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                            </div>
                            <form id="subscribe" action="" method="get">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-5">
                                        <fieldset>
                                            <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-2">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="main-dark-button dark:bg-zinc-50"><AiOutlineMail className="fa fa-paper-plane dark:text-zinc-900"></AiOutlineMail></button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li className='dark:text-zinc-50'>Store Location: <span> 22-20 36th Ave, Queens, NYC 11106, United States </span></li>
                                        <li className='dark:text-zinc-50'>Phone:<span> +17 733-773-7373</span></li>
                                        <li className='dark:text-zinc-50'>Office Location:<span> Building, 30 Wall St #8, NYC 10005, United States</span></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li className='dark:text-zinc-50'>Work Hours:<span> 08:30 AM - 10:30 PM Daily</span></li>
                                        <li className='dark:text-zinc-50'>Email:<span> info@company.com</span></li>
                                        <li className='dark:text-zinc-50'>Social Media:<span><a href="#"> Facebook</a>, <a href="#"> Instagram</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suscribe;