import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";

import Welcome from "./views/Welcome";
import About from "./views/About";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import CustomerReg from "./views/CustomerReg";
import Advertise from "./views/Advertise";
import PostBid from "./views/PostBid";
import Feature from "./views/Feature";

import LoginNew from "./views/LoginNew";
import Forgot from "./views/Forgot";
import TransporterHome from "./views/TransporterHome";
import CustomerHome from "./views/CustomerHome";
import AdminHome from "./views/AdminHome";
import PostAdd from "./views/PostAdd";
import AcceptOffer from "./views/AcceptOffer";
import Terms from "./views/About";
import DealDetails from "./views/DealDetails";
import ContactUs from './views/ContactUs';
import Navbar from './layout/Navbar';
import ForgotPassword from './views/ForgotPassword'

export default function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/Welcome" element={<Welcome />} />
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/Login" element={<Login />} />

        <Route exact path="/About" element={<About />} />

        <Route exact path="/Advertise" element={<Advertise />} />

        <Route exact path="/Feature" element={<Feature />} />

        <Route exact path="/LoginNew" element={<LoginNew />} />
        <Route exact path="/Forgot" element={<Forgot />} />

        <Route exact path="/CustomerReg" element={<CustomerReg />} />
        <Route exact path="/transporterhome" element={<TransporterHome />} />
        <Route exact path="/customerhome" element={<CustomerHome />} />
        <Route exact path="/adminhome" element={<AdminHome />} />
        <Route exact path="/postadd" element={<PostAdd />} />
        <Route exact path="/postbid/:id" element={<PostBid />} />

        <Route exact path="/acceptoffer/:bidid" element={<AcceptOffer />} />
        <Route exact path="/dealdetails/:bidid" element={<DealDetails />} />

        <Route exact path="/acceptoffer/:bidid/:addid" element={<AcceptOffer />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/*" element={<Welcome />} />


      </Routes>
      <Footer />
    </>
  );
}
