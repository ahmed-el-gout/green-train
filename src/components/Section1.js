import React from 'react'
import background1 from "../assets/Path 11526.png"
import background2 from "../assets/Rectangle 159.png"
import woman from "../assets/woman.png"
import points from "../assets/points.png"
import circle1 from "../assets/Ellipse 13.png"
import circle2 from "../assets/Ellipse 11.png"
import train from "../assets/trian.png"
import "../style/section1.css"

function Section1() {
    return (
        <div className="container-fluid position-relative overflow-hidden ">
            <img className="img-fuild h-100 w-100 position-absolute" src={background2} alt="background" />
            <img className="img-fuild h-100 w-100 mx-1 mx-md-2 position-absolute" src={background1} alt="background" />
            <div className="container">
                <div className="row py-4">
                    {/* <img className="position-absolute  start-0 top-0" src={circle1} alt="img" /> */}
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-start text-center text-md-start  justify-content-md-center position-relative  col-lg-6 mb-3 my-md-auto my-lg-auto   pl-4   ">
                        <h2 className="my-2 text-white">Explore Europe effortlessly <br/> by train and bus</h2>
                        <p className="my-4 ml-0 text-white">Save 61% on average when you book in advance*</p>
                        <button type="button" className="btn moredetails btn-primary my-4 px-0  ">Get More Details</button>
                    </div>
                    <div className="col-12 col-md-6  col-lg-6 my-auto  position-relative d-flex justify-content-center align-items-center">
                        <img className="principal-img img-fluid w-100 " src={woman} alt="img" />
                        <img className="img-fluid points   w-25 position-absolute" src={points} alt="img" />
                        <img className="img-fluid circle2 w-25  position-absolute" src={circle2} alt="img" />
                        <img className="img-fluid circle1  w-25  position-absolute" src={circle1} alt="img" />
                        <img className="img-fluid train w-25   position-absolute" src={train} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
