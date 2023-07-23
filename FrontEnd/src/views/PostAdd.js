
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import Swal from 'sweetalert2';
import url from '../api/Url'
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from '../layout/Header.js'
import "./commonCSS.css"




export default function PostAdd() {

  let navigate = useNavigate();

  useEffect(() => {

    if (sessionStorage.getItem("userdata") == null) {
      navigate("/login");
    }
  }, [])



  const [brand, setbrand] = useState("");
  const [modal, setmodal] = useState("");
  const [desc, setDesc] = useState("");
  const [speci, setspeci] = useState("");
  const [cname, setCname] = useState("");
  const [Cphone, setCphone] = useState("");
  const [pincode, setPincode] = useState("");
  const [add, setadd] = useState("");


  const user = JSON.parse(sessionStorage.getItem("userdata"));


  const [data, setData] = useState({
    Brand_Name: "",
    Modal_Name: "",
    item_description: "",
    specification: "",
    customer_name: "",
    customer_phone: "",
    dest_pincode: "",
    Customer_Add: "",
    isBidFinalized: false,
    user: user
  })

  function changehandler(e) {
    let namee = e.target.name;
    let val = e.target.value;
    setData({ ...data, [namee]: val });
    // console.log(data.expected_deliveryDate);
  }


  const [fromErr, setfromErr] = useState(false)

  function clearError() {
    setfromErr(false)
  }

  function validate(e) {
    e.preventDefault();
    clearError();
    if (data.Brand_Name.trim() === "" ||
      data.Modal_Name.trim() === "" ||
      data.item_description.trim() === "" ||
      data.specification.trim() === "" ||
      data.customer_name.trim() === "" ||
      data.customer_phone.trim() === "" ||
      data.dest_pincode.trim() === "" ||
      data.Customer_Add.trim() === ""
    ) {
      Swal.fire("All fields are  required");
    // } else if (
    //   data.brand_name.length < 20 ||
    //   data.brand_name.length > 50

    // ) {

      setfromErr(true);
    }


    else {
      postAdd();
    }
  }


  function postAdd() {

    showLoading();

    if (data.Brand_Name.trim() === "" || data.Modal_Name.trim() === "" || data.item_description.trim() === "" || data.specification == "" || data.customer_name.trim() === "" || data.customer_phone == "" || data.dest_pincode == "" || data.Customer_Add == "") {
      blankAlert();
    }
    else {

      // console.log(data.user)


      axios.post(`${url}/advertisement`, data).then((response) => {
        Swal.showLoading();
        if (response.data.status) {

          Swal.fire(
            response.data.msg,
            'It will be visible to all the Retailers within few seconds ! ',
            'success'
          )
          navigate('/customerhome');


        }
        else {
          Swal.fire(
            "Something Went wrong",
            'Please try again !  ',
            'error'
          )
        }

      }, (error) => serverDownAlert())

    }






  }






  return (
    <>

      <Header />
      <div className="postaddbg">
        <div className="" style={{ height: "70px" }}> </div>
        {/* <section className="vh-100" > */}
        <div className="">
          <div className="container h-100 ">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
              <div className="col-lg-8 col-xl-9 ">
                <div
                  className="card text-black "
                // style={{
                //   background: "#bbf0f5d0",
                //   borderRadius: "25px",
                //   opacity: "0.8",
                // }}
                >
                  <div className="card-body p-md-5 postaddform">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Post Your Advertise Here!
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-map-marker fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="Brand_Name"
                                className="form-control"
                                placeholder="brand-name"
                                onChange={changehandler}
                                onFocus={clearError}
                                value={data.Brand_Name}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-balance-scale fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="Modal_Name"
                                className="form-control"
                                placeholder="Modal_Name"
                                onChange={changehandler}
                                value={data.Modal_Name}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i class="fa fa-edit fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="item_description"
                                className="form-control"
                                placeholder="Item_Description"
                                onChange={changehandler}
                                value={data.item_description}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-balance-scale fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="specification"
                                className="form-control"
                                placeholder="specification"
                                onChange={changehandler}
                                value={data.specification}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i className="fa fa-user fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="customer_name"
                                className="form-control"
                                placeholder="customer Name"
                                onChange={changehandler}
                                value={data.customer_name}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i class="fa fa-mobile fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                id="number"
                                name="customer_phone"
                                className="form-control"
                                placeholder="customer Number"
                                onChange={changehandler}
                                value={data.customer_phone}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i class="fa fa-map-pin fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="number"
                                id="number"
                                name="dest_pincode"
                                className="form-control"
                                placeholder="Destination Pincode"
                                onChange={changehandler}
                                value={data.dest_pincode}
                              />
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            {/* <i class="fa fa-calendar fa-lg me-3 fa-fw"></i> */}
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id=""
                                name="Customer_Add"
                                className="form-control"
                                placeholder="customer address"
                                onChange={changehandler}
                                value={data.Customer_Add}
                              />
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              className="btn btn-primary p-3 "
                              onClick={validate}
                            >
                              Post
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger p-3 "
                              onClick={() => navigate("/customerhome")}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </section> */}
        </div>
      </div>
    </>
  );
}
