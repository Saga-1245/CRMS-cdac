import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { showLoading } from "../api/Alert";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Header from '../layout/Header.js'
import videobg from "./bg-video.mp4";
import digiLogo from '../images/digiLogo.jpeg';


export default function Welcome() {
  let navigate = useNavigate();
  const authenticate = () => {
    navigate("/TransporterReg");
  };




  return (
    <div className="fluid-container ">

      <Header />
      <div className="   ">

        <div
          className="Home row welcome  align-items-top text-right justify-content-right"
          style={{ height: "90vh" }}
        ><video autoPlay loop muted>
            <source src={videobg} type="video/mp4" />
            hello
          </video>

        </div>


        <div className="">

          <img src={digiLogo} className="w-100" style={{ height: "36vh" }} />
          {/* <img src={digiLogo} className="w-25" />
          <img src={digiLogo} className="w-25" />
          <img src={digiLogo} className="w-25" /> */}
        </div>


      </div>
    </div>
  );
}
