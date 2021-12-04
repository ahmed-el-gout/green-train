import React from 'react'
import "../style/section5.css"

function Section5() {
    return (
        <div className="container my-4 ">
            <div className="row">
                <div className="col-12 my-3 d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center">Popular train journeys</h2>
                    <p className="text-center">From local trips to cross-country adventures, find info and book train tickets<br/> for popular journeys in the UK and rest of Europe.</p>
                    
                    <div class="switch-button">
                        <input class="switch-button-checkbox" type="checkbox"></input>
                        <label class="switch-button-label fw-bold" for=""><span class="switch-button-label-span">UK</span></label>
                    </div>

                </div>
                <div className="col-12 d-flex flex-column align-items-center align-items-md-start col-md-3 my-2">
                    <p className="mb-0 text-success">London to Edinburgh</p>
                    <p className="mb-0 text-success">London to Manchester train</p>
                    <p className="mb-0 text-success">London to Brighton</p>
                    <p className="mb-0 text-success">Glasgow to London</p>
                    <p className="mb-0 text-success">Edinburgh to London</p>
                </div>
                <div className="col-12   d-none d-md-flex flex-column col-md-3 my-2t  col-md-3 my-2">
                    <p className="mb-0 text-success">London to Edinburgh</p>
                    <p className="mb-0 text-success">London to Manchester train</p>
                    <p className="mb-0 text-success">London to Brighton</p>
                    <p className="mb-0 text-success">Glasgow to London</p>
                    <p className="mb-0 text-success">Edinburgh to London</p>
                </div>
                <div className="col-6 d-none d-md-flex flex-column col-md-3 my-2">
                    <p className="mb-0 text-success">London to Edinburgh</p>
                    <p className="mb-0 text-success">London to Manchester train</p>
                    <p className="mb-0 text-success">London to Brighton</p>
                    <p className="mb-0 text-success">Glasgow to London</p>
                    <p className="mb-0 text-success">Edinburgh to London</p>
                </div>
                <div className="col-6 d-none d-md-flex flex-column col-md-3 my-2">
                    <p className="mb-0 text-success">London to Edinburgh</p>
                    <p className="mb-0 text-success">London to Manchester train</p>
                    <p className="mb-0 text-success">London to Brighton</p>
                    <p className="mb-0 text-success">Glasgow to London</p>
                    <p className="mb-0 text-success">Edinburgh to London</p>
                </div>
            </div>
        </div>
    )
}

export default Section5
