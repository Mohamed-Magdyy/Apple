// import logo from './logo.svg';
import './App.css';
import { Routes,Route, useNavigate, Navigate } from 'react-router-dom';
import NavBar from './Compoant/NavBar/NavBar';
import Home from './Compoant/Home/Home';
import Ipad from './Compoant/Ipad/Ipad';
import Iphone from './Compoant/Iphone/Iphone';
import Mac from './Compoant/Mac/Mac';
import Watch from './Compoant/Watch/Watch';
import apple from "../src/Compoant/Imge/apple.png";
import $ from "jquery";
import { useEffect } from 'react';
import ScrollToTop from './Compoant/ScrollToTop';
import Footer from './Compoant/Footerr/Footer';
import { useState } from 'react';
import Loding from './Compoant/Loding/Loding';




function App() {


    $(document).ready(function () {
      $(".loders").animate({ width: "100%" }, 4000, function () {
        $(".loding").fadeOut(1000);
      });
    });



  return (
  <>
  <div className="loding position-absolute">
        <div className="item-loding">
          <div className="imge-loding text-center mb-2 w-25">
            <img className='w-25' src={apple} alt="" />
          </div>
          <h6 className='ps-3 pt-2 pb-2'>LODING .....</h6>
          <div className="loder position-relative">
            <div className="loders position-absolute">
            </div>
          </div>
        </div>
      </div>

<ScrollToTop/>
  <NavBar/>
    <Routes >
    <Route path='/' element={<Home />} />
    <Route path='/Home' element={<Home />} />
    <Route path='Mac' element={<Mac />}  />
    <Route path='Iphone' element={<Iphone  />}  />
    <Route path='Ipad' element={<Ipad />}  />
    <Route path='Watch' element={<Watch />}  />
   </Routes>
   <Footer/>
    </>
  );
}

export default App;
