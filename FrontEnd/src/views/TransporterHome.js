
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import url from '../api/Url'
import { blankAlert, serverDownAlert, showLoading } from "../api/Alert";
import Header from '../layout/Header.js'
import "./commonCSS.css"

export default function TransporterHome() {

    let navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const [adds, setAdds] = useState([]);
    const [bidflag, setbidflag] = useState(false)
    const [bids, setbids] = useState([])
    const [transporterid, settransporterid] = useState(0)

    useEffect(() => {

        if (sessionStorage.getItem("userdata") == null) {
            navigate("/login");
        }
        else {
            settransporterid(JSON.parse(sessionStorage.getItem("userdata")).user_id);

        }

    }, [])



    function getAllAdds(e) {
        e.preventDefault();


        axios.get(`${url}/getalladds`).then((response) => {

            if (response.status == 200) {

                // Swal.fire(
                //     "Adds are fetched",
                //     'You can place your order for any offer that you can deliver ! ',
                //     'success'
                // )
                setFlag(true)
                setAdds(response.data);

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

    function getYourBids(e) {
        e.preventDefault();
        showLoading();

        axios.get(`${url}/getyourbids?tid=${transporterid}`).then((response) => {
            Swal.showLoading();
            if (response.status == 200) {

                Swal.fire(
                    "your offers are fetched",
                    'You can place your order for any offer that you can deliver ! ',
                    'success'
                )
                setbidflag(true)
                setbids(response.data);

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

    function deleteBid(bidid) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                showLoading();
                //http://localhost:8081/getallbids/?addid=10
                axios.delete(`${url}/deletebid/?bidid=${bidid}`).then((response) => {
                    Swal.showLoading();
                    if (response.data.status) {

                        Swal.fire(
                            'Deleted!',
                            'Your Bid has been deleted.',
                            'success'
                        )
                        setbidflag(false)
                        // getYourAdds();


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
        })
    }

    return (
        <>
            <Header />
            {/* <div className="transporterHomebg"> */}
            <div className="retailerHomebg">

                <div className="" style={{ height: "70px" }}> </div>
                <h1 style={{fontWeight:"bolder",fontStyle:"italic",color:"white"}}>RetailerHome</h1>


                <button className='btn btn-info ' onClick={getAllAdds}> View Adds</button>

                <button className='btn btn-info ' onClick={getYourBids}> View Your Bids</button>

                <button className='btn btn-danger ' onClick={() => setFlag(false)}> Clear Screen</button>



                {flag ? <div class="container-fluid m-0 p-0">
                    <h1 className=" mb-3 text-center text-white fw-bold"></h1>
                    <div class="card mb-2"  >
                        <h5 class="card-header bg-dark text-light fs-4" >Advertising List</h5>
                        <div class="card-body bg-danger">

                            <table class="table table-hover bg-white table-bordered " style={{ tableLayout: "fixed" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Add_Id</th>
                                        <th scope="col">Placed By</th>
                                        <th scope="col">Brand_Name</th>
                                        <th scope="col">Modal_Name</th>
                                        <th scope="col">dest_pinCode</th>
                                        <th scope="col">item_desc</th>
                                        <th scope="col">specification</th>


                                        <th scope="col">customer_add</th>
                                        <th scope="col">Place Order</th>

                                    </tr>
                                </thead>
                                <tbody >

                                    {
                                        adds.map((add) => (
                                            <tr key={add.add_id}>

                                                <td>{add.add_id}</td>
                                                <td>{add.user.name}</td>

                                                <td>{add.Brand_Name}</td>
                                                <td>{add.Modal_Name}</td>
                                                <td>{add.dest_pincode}</td>
                                                <td>{add.item_description}</td>
                                                <td>{add.specification} </td>
                                                <td>{add.customer_add}</td>

                                                <td>
                                                    <Link className="btn btn-info" to={`/postbid/${add.add_id}`}>
                                                       Order
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))


                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> : <div> </div>}


                {/* ==================================================================================================
====================================================================================================== */}

                {/* {Retailer specific bids } */}
                {true ? <div class="container-fluid m-0 p-0">
                    <h1 className=" mb-3 text-center text-white fw-bold"></h1>
                    <div class="card mb-2"  >
                        <h5 class="card-header bg-dark text-light fs-4" >Your Orders</h5>
                        <div class="card-body bg-danger">

                            <table class="table table-hover bg-white table-bordered " style={{ tableLayout: "fixed" }}>
                                <thead>
                                    <tr>
                                        <th scope="col">Order_Id</th>
                                        <th scope="col">Add_Id</th>
                                        <th scope="col">Add_By</th>

                                        <th scope="col">Order By</th>
                                        <th scope="col">Offer Price</th>
                                        <th scope="col">Expected deliv_date</th>
                                        <th scope="col">Remark</th>
                                        <th scope="col"> Status</th>



                                        <th scope="col">View Details</th>

                                    </tr>
                                </thead>
                                <tbody >

                                    {
                                        bids.map((bid) => (
                                            <tr key={bid.bid_id}>

                                                <td>{bid.bid_id}</td>
                                                <td>{bid.add.add_id}</td>
                                                <td>{bid.add.user.name}</td>
                                                <td>{bid.user.name}</td>
                                                <td>{bid.offer_price}</td>
                                                <td>{bid.estimated_deliveryDate}</td>
                                                <td>{bid.remark}</td>
                                                <td>{bid.bidFinalized ? <h4 className="badge bg-success">Accepted</h4> : <h4 className="badge bg-warning">Pending</h4>}</td>

                                                <td>
                                                    {/* <Link className="btn btn-info" to={`/postbid/${add.add_id}`}>
                                                    Bid
                                                </Link> */}

                                                    {bid.bidFinalized ?
                                                        <div>
                                                            <Link className="btn btn-outline-success btn-sm badge-pill" to={`/dealdetails/${bid.bid_id}`}>
                                                                View Details
                                                            </Link>
                                                        </div>

                                                        : <button
                                                            type="button"
                                                            class="btn btn-outline-danger btn-sm badge-pill"
                                                            onClick={() => deleteBid(bid.bid_id)}
                                                        >
                                                            Delete
                                                        </button>}

                                                </td>
                                            </tr>
                                        ))


                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> : <div> </div>}

            </div>
        </>
    )
}
