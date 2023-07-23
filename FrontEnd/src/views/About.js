import React from "react";
import { Link } from "react-router-dom";
import termss from "../images/lapi.jpeg"
import Header from "../layout/Header.js"

function Terms() {
    return (
        <>
            <Header />



            <div
                class="min-vh-100 pt-5 text-white"
                style={{
                    backgroundImage:
                        "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
                }}
            >
                <h1 class="mt-5 pt-5 text-center  display-3 fw-bold">LOW COST COMPUTERS</h1>
                <div class="container-fluid p-5 ">
                    <div class="row m-auto">
                        <div class="col-lg-8">
                            <h1>

                            </h1>
                            <br />
                            <h1>
                                <strong>Our Mission</strong>
                            </h1>
                            <h4>
                                <p>
                                    Our mission is to provide low cost computers Saving time in finding particular product and their price making billing process faster. Eliminating manual searching for the products which will be stock. Easy process of adding and deleting products entry. Control panel for making billing process as white list or black list for saving taxes by the seller for internal process.
                                </p>
                            </h4>
                            <br />
                        </div>
                        <div class="col-lg-4 mt-5">
                            <img
                                src={termss}
                                class="card img-fluid"
                                style={{ width: "415.99px", height: "250px" }}
                            />
                        </div>
                    </div>
                </div>
                <div class="container-fluid p-5">
                    <div class="row">
                        <div class="col-lg-6">
                            <div className="font text-center">
                                <i className="fas fa-recycle fa-9x " />
                            </div>
                            <br />
                            <div className=" text-center m-auto">
                                <div className="row ">

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h1>
                                <strong>Our Vision</strong>
                            </h1>
                            <br />
                            <h4>
                                <p>To become the number 1 choice for Retailer in INDIA</p>
                            </h4>
                            <h4>
                                <p>
                                    We bring together the Retailers and the Customers with the help of Technology that help them to grow .
                                </p>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
export default Terms;
