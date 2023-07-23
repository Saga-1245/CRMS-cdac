import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                <i class="fas fa-paw"></i>
                 Computer Retailer
              </h5>
              <p style={{ color: "white" }}>
              Project on Computer retailer management system is basically a digital or virtual way of computer shopping.Computer retailer management system serves as a bridge between the buyer of a computer and the retailer.. !!!
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Cities
              </h5>
              <p>
                <a href="#" class="text-white">
                  Pune
                </a>
                <br />
                <a href="#" class="text-white">
                  Mumbai
                </a>{" "}
                <br />
                <a href="#" class="text-white">
                  Latur
                </a>
                <br />
                <a href="#" class="text-white">
                  Nagpur
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Useful links
              </h5>
              <p>
                <Link to="/Home" class="text-white">
                  HOME
                </Link>
              </p>
              <p>
                <Link to="/Welcome" class="text-white">
                  RETAILX
                </Link>
              </p>
              <p>
                <Link to="/CustomerPage" class="text-white">
                  PROFILE
                </Link>
              </p>
              {/* <p>
                <Link to="/profile" class="text-white">
                  PROFILE
                </Link>
              </p> */}
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                Contact
              </h5>
              <p>
                <i class="fa fa-home mr-3"></i>CDAC MUMBAI
              </p>
              <p>
                <i class="fa fa-envelope mr-3"></i>ratailer@gmail.com
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9637006539
              </p>
              <p>
                <i class="fa fa-phone mr-3"></i>+91 9999999999
              </p>
            </div>
          </div>

          <hr class="mb-4" />

          <div
            style={{ justifyContent: "center" }}
            class="row align-items-center"
          >
            <div
              class="col-md-7 col-lg-12 m-auto"
              style={{ justifyContent: "center" }}
            >
              <p>
                Copyright ©2021 All rights reserved by:
                <a href="#">
                  <strong class="text-warning col-sm m-auto">
                    CDAC MET BANDRA MUMBAI 
                  </strong>
                  <div className="d-flex flex-row-reverse">
                    <i class="fab fa-facebook-square"></i>

                    <i class="fab fa-instagram"></i>

                    <i class="fab fa-twitter"></i>
                  </div>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
