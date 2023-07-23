import React from 'react'
import contact_banner from '../images/contact_banner.jpg';
import c2 from '../images/c2.png'
import phone from '../images/phone.png'
import Header from '../layout/Header.js'


export default function ContactUs() {
    return (
        <>

            <Header />
            <div className="" style={{ height: "60px" }}> </div>
            {/* 
            <div class="container-fluid m-0 p-0 mb-4">

                <div class="row  mt-0 p-0 d-flex  justify-content-center align-items-start" style={{ height: "auto" }}>

                    <div class="col text-center">
                        <div class="mb-4"> <img src={contact_banner} alt="" style={{
                            width: "100vw",
                            height: "300px", objectFit: "cover"
                        }} /></div>

                        <div class="mb-4 fw-bold fs-3" style={{ letterSpacing: "1px", fontStyle: "italic" }}> BY PHONE </div>
                        <div class="fs-6 text-muted mb-3">(Monday to Friday, 9am to 6pm IST)</div>
                        <div class="fs-4 fw-bold text-muted "> Mobile No: </div>
                        <div class="mb-2 fs-4 fw-bold">9595949707</div>
                        <div class="fs-4 fw-bold text-muted ">International:</div>
                        <div class="fs-4 fw-bold  "> 1-604-637-0780</div>
                    </div>


                    <div class="col text-center mt-3">

                        <div class="mb-4 "><img src={c2} alt="" /></div>
                        <div class="mb-4 fw-bold fs-3" style={{ letterSpacing: "1px", fontStyle: "italic" }}>START A BUSINESS
                        </div>
                        <div class="w-100">
                            <p class="text-center mx-5 text-center text-muted fs-5 fw-bold "> Just send us your questions or
                                concerns by
                                starting a new Business with us and we
                                will give you
                                the help you
                                need.
                                <p class="fw-bold fs-4">shippingwars@gmail.com</p>
                            </p>
                        </div>
                    </div>


                    <div class="col text-center">

                        <div class="mb-4"><img src={phone.png} alt="" /></div>

                        <div class="mb-4 fw-bold fs-3" style={{ letterSpacing: "1px", fontStyle: "italic" }}>LIVE CHAT</div>
                        <div class="text-center mx-5 text-center text-muted fs-5 fw-bold mb-2">Chat with a member of our
                            in-house team.</div>

                        <div class=""><input type="button" value="Start" class="btn fs-4  btn-warning " style={{ width: "150px" }} />
                        </div>
                    </div>



                </div>


            </div> */}



            <div class="container-fluid m-0 p-0 mb-4">

                <div class="row  mt-0 p-0 d-flex  justify-content-center align-items-start" style={{ height: "auto" }}>

                    <div class="col text-center">
                        <div class="mb-4"> <img src={contact_banner} alt="" style={{
                            width: "100vw",
                            height: "300px", objectFit: "cover"
                        }} /></div>


                    </div>

                </div>


            </div>




            <div>
                <div class="container-fluid ">


                    <section id="contact">
                        <div>
                            <h3 class="text-center mt-3 text-uppercase">contact us</h3>
                            <p class="text-center w-75 m-auto">
                                If you need any help contact us using the details below.
                            </p>
                            <div class="row d-flex justify-content-center bg-transparent">
                                <div class="col-sm-12 col-md-6 col-lg-3 my-5 d-flex">
                                    <div class="card border-0">
                                        <div class="card-body text-center">
                                            <i class="fa fa-phone fa-3x" aria-hidden="true"></i>

                                            <h4 class="text-uppercase mb-5">call us</h4>
                                            <p>9637006539 , 9988998811</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                                    <div class="card border-0">
                                        <div class="card-body text-center">
                                            <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                                            <h4 class="text-uppercase mb-5">office location</h4>
                                            <address>
                                                CDAC Mumbai, MET BANDRA{" "}
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                                    <div class="card border-0">
                                        <div class="card-body text-center">
                                            <i class="fa fa-globe fa-3x " aria-hidden="true"></i>
                                            <h4 class="text-uppercase mb-5">email</h4>
                                            <p>digitek.retail@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
