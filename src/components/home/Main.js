import React from "react";
import "../../style/main.css";
import train from "../../assets/trian.png";
import to from "../../assets/to.png";
import cloc from "../../assets/cloc.png";

function Main() {
  return (
    <div className="main w-100  py-2 d-flex align-items-center ">
      <div className="container my-auto">
        <div className="row mx-auto  d-flex justify-content-center ">
          {/* left-col */}
          <div className="left-part col-12 col-md-8   col-lg-5 my-2 shadow    bg-white  order-2 order-lg-1">
            <div className="row p-1 d-flex justify-content-center">
              <div className="col-12 my-1 d-flex justify-content-center align-items-center">
                <form className="d-flex align-items-center ">
                  <div className="form-group ">
                    <label for="formGroupExampleInput">Input</label>
                    <input
                      type="text"
                      className="form-control   "
                      id="formGroupExampleInput"
                      placeholder="placeholder"
                    />
                  </div>
                  <div className="circle d-flex justify-content-center align-items-center">
                    <img src={to} alt="" />
                  </div>
                  <div className="form-group ">
                    <label for="formGroupExampleInput2">To</label>
                    <input
                      type="text"
                      className="form-control "
                      id="formGroupExampleInput2"
                      placeholder="placeholder"
                    />
                  </div>
                </form>
              </div>

              <div className="col-12  d-flex justify-content-between align-items-center my-2">
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked="checked"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check " for="defaultCheck1">
                    Via / Avoid
                  </label>
                </div>
                <select name="options" className="p-2 border mx-2" id="options">
                  <option value="volvo">Avoid</option>
                  <option value="saab">first</option>
                  <option value="opel">second</option>
                  <option value="audi">last</option>
                </select>
                <input
                  className="form-control w-50 "
                  type="text"
                  placeholder="Enter station "
                  aria-label=".form-control-sm example"
                ></input>
              </div>

              <hr className="w-75 d-flex my-2" />

              <div className="row d-flex justify-content-center align-items-center nb-n3 ">
                <div className="blue col-10  rounded-top py-2">
                  <ul className="d-flex justify-content-between align-items-center mb-0 list-unstyled text-white">
                    <li className="px-1">One Way</li>
                    <li className="px-1">Rteurn</li>
                    <li className="px-1">Open Reurn</li>
                    <li className="px-1">Seasons</li>
                  </ul>
                </div>
              </div>

              <div className="row ">
                <div className="col-12 bg-white shadow rounded-3 ">
                  <div className="row pt-2">
                    <div className="col-6">
                      <form className="d-flex align-items-center ">
                        <div className="form-group ">
                          <label for="formGroupExampleInput">Out</label>
                          <input
                            type="text"
                            className="form-control   "
                            id="formGroupExampleInput"
                            placeholder="Thu, Jun 16"
                          />
                        </div>
                      </form>
                      <div className="row my-2">
                        <div className="col-12 d-flex align-items-center">
                          <select
                            name="options"
                            className="border"
                            id="options"
                          >
                            <option value="volvo">leaving</option>
                            <option value="saab">first</option>
                            <option value="opel">second</option>
                            <option value="audi">theerd</option>
                          </select>
                          <img className="cloc" src={cloc} alt="cloc" />
                          <div className="d-flex flex-column ">
                            <select
                              name="options"
                              className="border"
                              id="options"
                            >
                              <option value="volvo">16</option>
                              <option value="saab">15</option>
                              <option value="opel">14</option>
                              <option value="audi">13</option>
                            </select>
                            :
                            <select
                              name="options"
                              className="border"
                              id="options"
                            >
                              <option value="volvo">00</option>
                              <option value="saab">15</option>
                              <option value="opel">14</option>
                              <option value="audi">13</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <form className="d-flex align-items-center  ">
                        <div className="form-group ">
                          <label for="formGroupExampleInput">Return</label>
                          <input
                            type="text"
                            className="form-control   "
                            id="formGroupExampleInput"
                            placeholder="Thu, Jun 16"
                          />
                        </div>
                      </form>
                      <div className="row my-2">
                        <div className="col-12 d-flex align-items-center">
                          <select
                            name="options"
                            className="border"
                            id="options"
                          >
                            <option value="Avoid">leaving</option>
                            <option value="first">first</option>
                            <option value="second">second</option>
                            <option value="last">last</option>
                          </select>
                          <img className="cloc" src={cloc} alt="cloc" />
                          <div className="d-flex flex-column ">
                            <select
                              name="options"
                              className="border"
                              id="options"
                            >
                              <option value="volvo">16</option>
                              <option value="saab">15</option>
                              <option value="opel">14</option>
                              <option value="audi">13</option>
                            </select>
                            :
                            <select
                              name="options"
                              className="border"
                              id="options"
                            >
                              <option value="volvo">00</option>
                              <option value="saab">00</option>
                              <option value="opel">00</option>
                              <option value="audi">00</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 py-2">
                      <div className="form-group ">
                        <label for="formGroupExampleInput">Add passengers</label>
                        <input
                          type="text"
                          className="form-control   "
                          id="formGroupExampleInput"
                          placeholder="2 adult, 2Kids(16+),2Kids(18+)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center my-3">
                  <button type="button time-tickets" class="btn btn-primary time-tickets px-5 py-2">Get times & tickets</button>
                </div>
              </div>
            </div>

          </div>

          {/* right col */}
          <div className="right-part position-relative col-12   col-lg-7 bg-light d-flex flex-column justify-content-center  p-2 order-1 order-lg-2">
            <div className="text-justify  px-5 pt-5">
              <p className="text-white  py-2">
                Explore Europe effortlessly <br /> by train and bus
              </p>
              <p className="text-white py-2">
                Save 61% on average when you book in advance
              </p>
              <button type="button " className="btn btn-primary px-4 py-2 ">
                Learn More
              </button>
            </div>

            <img
              className="position-absolute img-fluid w-75 bottom-0 end-0 mt-5 "
              src={train}
              alt="train"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
