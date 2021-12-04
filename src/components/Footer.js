import React from 'react'
import '../style/footer.css'
import train from '../assets/whitelogo.png';
import twiter from '../assets/.png'
import insta from '../assets/insta.png'

function Footer() {
    return (
        <>
        <div className="container-fluid top mt-4 py-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 d-flex flex-column">
                        <img className='img-fluid w-75 ' src={train} alt="img" />
                        <p className="my-2 fw-bold text-white-50 ml-1">Greenline.com Limited is registered in England and  Wales. Company No. 3846791.</p>

                        <p className='text-white-50 fw-bold ml-1'>Registered address: <br/> 3rd floor, 120 Holborn, London EC1N 2TD, United <br/> Kingdom. VAT number: 791^^ 7261 06.</p>
                        <div className="d-flex">
                            <div className="twiter bg-white mx-2   rounded-circle d-flex justify-content-center align-items-center">
                                <img className='img-fluid w-50 ' src={twiter} alt="img" />
                            </div>
                            <div className="insta bg-white mx-2   rounded-circle d-flex justify-content-center align-items-center">
                                <img className='img-fluid w-50 ' src={insta} alt="img" />
                            </div>
                            <div className="twiter bg-white mx-2   rounded-circle d-flex justify-content-center align-items-center">
                                <img className='img-fluid w-50 ' src={twiter} alt="img" />
                            </div>
                            <div className="insta bg-white mx-2   rounded-circle d-flex justify-content-center align-items-center">
                                <img className='img-fluid w-50 ' src={insta} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-none d-md-flex align-items-center">
                        <ul className='list-unstyled text-white '>
                            <li className='my-1 fw-bold'>About Greenline</li>
                            <li className='my-1 fw-bold'>News</li>
                            <li className='my-1 fw-bold'>Investors</li>
                            <li className='my-1 fw-bold'>Careers</li>
                            <li className='my-1 fw-bold'>Greenline Partner Solutions</li>
                            <li className='my-1 fw-bold'>Affiliates and Partnerships</li>
                            <li className='my-1 fw-bold'>Terms and conditions / Security</li>
                            <li className='my-1 fw-bold'>Privacy / Cookies</li>
                            <li className='my-1 fw-bold'>Modern Slavery Act (UK)</li>
                        </ul>
                    </div>
                    <div className="col-4 d-none d-md-flex align-items-center">
                        <ul className='list-unstyled text-white '>
                            <li className='my-3 fw-bold'>Help and useful information</li>
                            <li className='my-3 fw-bold'>Train and bus companies</li>
                            <li className='my-3 fw-bold'>Train journeys in the UK</li>
                            <li className='my-3 fw-bold'>Trains and buses in Europe</li>
                            <li className='my-3 fw-bold'>Top destinations</li>
                            <li className='my-3 fw-bold'>Stations</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div className="container-fluid  end px-0 py-2">
            <div className='container d-flex flex-wrap justify-content-center align-items-center'>
                <div className="col-12 end d-flex flex-column justify-content-lg-between align-items-center  text-white">
                    <p className="mb-0">Copyright © 2021 All rights reserved. ahmed-el-gout</p>
                    <p className="mb-0">Terms & Condition    |   Privacy Policy</p>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Footer
