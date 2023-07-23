import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import url from '../api/Url'
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from '../layout/Header.js'


export default function DealDetails() {

    useEffect(() => {

        if (sessionStorage.getItem("userdata") == null) {
            navigate("/login");
        }
        else {
            getBid();
        }

    }, [])

    let navigate = useNavigate();
    const param = useParams();
    const bidid = param.bidid;



    const [data, setdata] = useState({})


    const [cname, setcname] = useState("")
    const [cphone, setcphone] = useState("")
    const [cemail, setcemail] = useState("")

    const [addid, setaddid] = useState("")
    const [from, setfrom] = useState("")
    const [to, setto] = useState("")
    const [pin, setpin] = useState("")
    const [desc, setdesc] = useState("")
    const [weight, setweight] = useState("")
    const [rname, setrname] = useState("")
    const [rphone, setrphone] = useState("")
    const [date, setdate] = useState("")


    const [id, setid] = useState("")
    const [price, setprice] = useState("")
    const [tname, settname] = useState("")


    function getBid() {




        axios.get(`${url}/getbid?bidid=${bidid}`).then((response) => {

            if (response.data.length != 0) {
                setcname(response.data.add.user.name)
                setcemail(response.data.add.user.email)
                setcphone(response.data.add.user.phone)

                setaddid(response.data.add.add_id)
                setfrom(response.data.add.Brand_Name)
                setto(response.data.add.Modal_Name)
                setpin(response.data.add.dest_pincode)
                setdesc(response.data.add.item_description)
                setweight(response.data.add.specification)

                setrname(response.data.add.customer_name)
                setrphone(response.data.add.customer_phone)
                setdate(response.data.customer_add)

                setid(response.data.bid_id);
                setprice(response.data.offer_price);
                settname(response.data.user.name);

                setdata(response.data)

            }
            else {
                // alert("not allowed")
                // document.getElementById("accept").classList.add("disabled")
                navigate("/transporterhome")
            }


        }, (error) => serverDownAlert())
    }



    return (
        <React.Fragment>
            <Header />
            <h1 style={{fontWeight:"bolder",fontStyle:"italic"}}>DealDetails</h1>

            <div>

                <div className=" row d-flex my-5">

                    <div className=" col-3 "> </div>


                    <div className=" col-6 ">

                        <h4>Customer details : </h4>

                        <table class="table">

                            <thead>
                                <tr>
                                    <th scope="col">Customer Name </th>
                                    <th scope="col">{cname}</th>

                                </tr>
                            </thead>


                            <tbody>
                                <tr>
                                    <th scope="row">Customer Phone</th>
                                    <td>{cphone}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Customer Email</th>
                                    <td>{cemail}</td>

                                </tr>

                                <h4 className="mt-3">Delivery Details:</h4>
                                <tr>
                                    <th scope="row">add.add_id</th>
                                    <td>{addid}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Brand_Name</th>
                                    <td>{from}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Modal_Name</th>
                                    <td>{to}</td>

                                </tr>
                                <tr>
                                    <th scope="row">dest_pincode</th>
                                    <td >{pin}</td>

                                </tr>
                                <tr>
                                    <th scope="row">item_description</th>
                                    <td >{desc}</td>

                                </tr>
                                <tr>
                                    <th scope="row">Specifications</th>
                                    <td >{weight}</td>

                                </tr>

                                <tr>
                                    <th scope="row">customer_name</th>
                                    <td >{rname}</td>

                                </tr>
                                <tr>
                                    <th scope="row">customer_phone</th>
                                    <td >{rphone}</td>

                                </tr>
                                <tr>
                                    <th scope="row">customer_add</th>
                                    <td >{date}</td>

                                </tr>

                                <h4 className="mt-3">Pricing Details:</h4>
                                <tr>
                                    <th scope="row">retail_id</th>
                                    <td >{id}</td>

                                </tr>
                                <tr>
                                    <th scope="row">offer_price</th>
                                    <td >{price}</td>

                                </tr>
                                <tr>
                                    <th scope="row">user.name</th>
                                    <td >{tname}</td>

                                </tr>


                                <button>  Lets deal</button>
                            </tbody>

                        </table>
                    </div>

                    <div className=" col-3 "> </div>

                </div>




            </div>
        </React.Fragment>

    )
}
