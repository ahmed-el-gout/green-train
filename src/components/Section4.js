/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../style/section4.css"
import intersection from '../assets/Intersection 1.png'
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import quote from "../assets/quote.png"

export default function Section4() {
    return (
        <div className="container-fluid bg-white  position-relative overflow-hidden my-3">
            <img className="img-fuild   h-100 w-100 position-absolute" src={intersection} alt="background" />
            <div className="container py-5  position-relative">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4 my-3 order-2 order-md-1 d-flex flex-column justify-content-center align-items-md-center align-items-center align-items-lg-start  text-black">
                        <p  className="my-2 fw-bold">Customer testimonial</p>
                        <h2 className="my-2">What They<br/> think of Us</h2>
                        <p className="my-2 fw-bold">We are happy when our customers are too</p>
                        <button type="button" className="btn moredetails   w-100 mt-3  btn-primary rounded-pill  ">CTA Buttom</button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2 d-flex justify-content-center my-1  ">
                        <div className="card d-flex flex-column align-items-center justify-content-center " style={{width: "18rem"}}>
                            <div className="position-relative w-100 d-flex justify-content-center align-items-center ">
                                <span className="badge bg-primary px-0 py-2  d-flex justify-content-center align-items-center position-absolute  rounded-circle ">
                                    <img className="img-fluid w-25 m-1 " src={quote} alt='img' />
                                </span>
                                <img className="card-img-top w-25 m-3 rounded-circle" src={user1} alt="Card image cap" />
                            </div>
                            <div className="card-body px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                                <p className="card-text ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr/>
                                <h5 className="card-title">ahmed el-gout</h5>
                                <p>Kensington, London</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 order-3 order-md-3 d-flex justify-content-center my-1   ">
                        <div className="card d-flex flex-column align-items-center justify-content-center " style={{width: "18rem"}}>
                        <div className="position-relative w-100 d-flex justify-content-center align-items-center ">
                            <span className="badge bg-primary px-0 py-2  d-flex justify-content-center align-items-center position-absolute  rounded-circle ">
                                <img className="img-fluid w-25 m-1 " src={quote} alt='img' />
                            </span>
                            <img className="card-img-top w-25 m-3 rounded-circle" src={user2} alt="Card image cap" />
                        </div>
                        <div className="card-body px-5 py-4 d-flex flex-column justify-content-center align-items-center">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <hr/>
                            <h5 className="card-title">Jaxon Clarke</h5>
                            <p> Chelsea London</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
