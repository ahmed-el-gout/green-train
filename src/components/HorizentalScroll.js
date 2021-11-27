/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "../style/horzentalscroll.css"
import trainicon from "../assets/train-icon.png";
import check from "../assets/check.png";
import costumer from "../assets/costumer.png";
import support from "../assets/support.png";
import people from "../assets/people.png";
import arrowright from "../assets/arrowright.png"




function HorizentalScroll() {

    const gotoView =() => {
              let container =  document.getElementsByClassName("remove")[0];
              container.scrollLeft += 100;
    }

    return (
        <div className="container-fluid scroll-container p-3   my-2" >
            <div className="container  testimonial-group">
                <div className="row position-relative">
                        <div className="position-absolute d-flex justify-content-end align-items-center w-25 h-100 end-0 ">
                            <div onClick={gotoView}  className="arrowcontainer d-flex justify-content-center align-items-center   rounded-circle ">
                                <img  className="w-50" src={arrowright} alt="arrow-right" />
                            </div>
                        </div>
                    <div className="remove  col-12 d-flex  overflow-auto  " style={{ scrollbarWidth:"none"  }} >
                        
                        <div id="view0"  className="cardscroll shadow-sm col-4 my-2 mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={check} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Compare</h5>
                                <p className="card-text my-2">Compare cheap prices for train and bus tickets</p>
                            </div>
                        </div>
                        <div className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={trainicon} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Travel</h5>
                                <p className="card-text my-2"> thousands of destinations in and across 45 countries</p>
                            </div>
                        </div>
                        <div className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={support} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Join people</h5>
                                <p className="card-text my-2">Join millions of people who use us every day</p>
                            </div>
                        </div>
                        <div className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={costumer} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Support</h5>
                                <p className="card-text my-2">Customer service on hand every step of the way</p>
                            </div>
                        </div>
                        <div className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={people} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Customer</h5>
                                <p className="card-text my-2">Compare cheap prices for train and bus tickets</p>
                            </div>
                        </div>
                        <div className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "10rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={trainicon} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Customer</h5>
                                <p className="card-text my-2">Compare cheap prices for train and bus tickets</p>
                            </div>
                        </div>
                        <div id="view1" className="cardscroll col-4 shadow-sm my-2  mx-4"style={{width: "12rem"}} >
                            <div className="card-body">
                                <div className="iconcontainer">
                                    <img src={check} alt="icon" />
                                </div>
                                <h5 className="card-title my-2">Compare</h5>
                                <p className="card-text my-2">Compare cheap prices for train and bus tickets</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizentalScroll
