/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
import React from "react";
import city from "../assets/1x.png";
import trainicon from "../assets/train-icon.png"
import "../style/slide.css"

function slide() {
  return (
    <div className="slide  ">
      <div className="container ">
        <div className="row">
          {/* <div className="col-12 d-flex flex-column"> */}

            
            
              {/* passer  d-none d-md-none d-lg-flex  */}
            <div className="col-12 d-flex  flex-column ">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="5000" data-bs-ride="carousel" >
                  <ol className="carousel-indicators my-auto  ">
                    <li className="carousel-indicator active"  data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="0" ></li>
                    <li className="carousel-indicator" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li className="carousel-indicator" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner p-3  w-100  my-5">




                    <div className="carousel-item active ">
                      <div className="d-flex justify-content-around">


                        <div className="card shadow-sm  position-relative p-3 " >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">4.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                        <div className="card d-none d-md-none d-lg-flex shadow-sm   position-relative p-3" >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">7.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                        <div className="card d-none d-md-flex shadow-sm  position-relative p-3" >
                          <div  className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">5.0</span>
                                </button>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>





                    <div className="carousel-item  ">
                      <div className="d-flex justify-content-around">


                        <div className="card shadow-sm  position-relative p-3 " >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">5.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                        <div className="card d-none d-md-none d-lg-flex shadow-sm   position-relative p-3" >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">7.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                        <div className="card d-none d-md-flex shadow-sm  position-relative p-3" >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">4.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>






                    <div className="carousel-item ">
                      <div className="d-flex justify-content-around">


                          <div className="card d-none d-md-flex shadow-sm  position-relative p-3 " >
                            <div className="iconcontainer position-absolute m-1">
                                <img src={trainicon} alt="icon" />
                            </div>
                            <img className="card-img-top" src={city} alt="Card image cap" />
                            <div className="row">
                                <div className="col-8">
                                  <h6 className="mb-0 pt-3">London to Liverpool</h6>
                                  <p>from $75.08</p>
                                </div>
                                <div className="col-4  d-flex my-auto">
                                  <button type="button" className="btn btn-primary ml-0">
                                    <span className="badge badge-light">4.0</span>
                                  </button>
                              </div>
                            </div>
                          </div>


                        <div className="card d-none d-md-none d-lg-flex shadow-sm   position-relative p-3" >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">4.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                        <div className="card shadow-sm  position-relative p-3" >
                          <div className="iconcontainer position-absolute m-1">
                              <img src={trainicon} alt="icon" />
                          </div>
                          <img className="card-img-top" src={city} alt="Card image cap" />
                          <div className="row">
                            <div className="col-8">
                              <h6 className="mb-0 pt-3">London to Liverpool</h6>
                              <p>from $75.08</p>
                            </div>
                            <div className="col-4  d-flex my-auto">
                                <button type="button" className="btn btn-primary ml-0">
                                   <span className="badge badge-light">4.0</span>
                                </button>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center my-3 ">
              <button type="button" className="btn view-all btn-primary  ">View All</button>
            </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default slide;
