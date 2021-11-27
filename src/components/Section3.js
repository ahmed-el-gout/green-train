import React from 'react'
import mobile from "../assets/mobile3.png"
import googleplay from "../assets/Image 6.png"
import appstore from "../assets/Image 7.png"

function Section3() {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center text-md-start p-3 order-2 order-md-1">
                    <h2>Europe’s leading train and bus app</h2>
                    <p className="my-4">Keep your trip on track with departure times, platform info, and tickets in the palm of your hand.</p>
                    <div className="d-flex justify-content-center justify-content-md-start my-3 ">
                        <a href="#/" className="bg-white w-25 px-3 py-2  shadow-sm">
                            <img className="img-fluid w-100" src={appstore} alt="appstore" />
                        </a>
                        <a href="#/" className="bg-white w-25 px-3 py-2 mx-3  shadow-sm">
                            <img className="img-fluid w-100" src={googleplay} alt="appstore" />
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-align-items-center order-1 order-md-2">
                    <img className="img-fluid w-50" src={mobile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Section3
