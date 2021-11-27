import React from 'react'
import laptop from "../assets/laptop.png"

function Section2() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center alogn-items-center p-5 text-center">
                    <h2 className="mx-auto mb-2">We're here to help your </h2>
                    <p className="mx-auto">Find clear FAQs online and customer service <br/> available at the end </p>
                    <img className="img-fluid w-50 mx-auto my-3" src={laptop} alt="img" />
                    <button type="button" className="btn w-75 mt-3  mx-auto btn-primary rounded-pill  ">CTA Buttom</button>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="accordion w-75" id="accordionExample">
                    <div className="accordion-item my-3 rounded">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Do I need to confirm in advance if travelling on a different train?
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                             You don't need to let us know if you want to change trains, but you'll need to check the terms of your ticket to see if it'll still be valid for a different train.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3 rounded">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How much luggage can I take on the train?
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                             You don't need to let us know if you want to change trains, but you'll need to check the terms of your ticket to see if it'll still be valid for a different train.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3 rounded">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How will I receive my tickets?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                             You don't need to let us know if you want to change trains, but you'll need to check the terms of your ticket to see if it'll still be valid for a different train.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item my-3 rounded ">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What do the different seat options mean?
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                             You don't need to let us know if you want to change trains, but you'll need to check the terms of your ticket to see if it'll still be valid for a different train.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
