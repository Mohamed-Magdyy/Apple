import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import apple from '../Imge/apple.png'
import '../NavBar/NavBar.css'
import $ from "jquery";

// import { click } from '@testing-library/user-event/dist/click';






export default function NavBar() {
    // const [showButton,setshowButton] = useState(false);

    // const handelScroll =()=>{
    //   if(window.scrollY >300){
    //     setshowButton(true)
    //   }
    //   else{
    //     setshowButton(false)
       
    //   }
    // }
    const handelClick =()=>{
      window.scrollTo({top:0,behavior:"smooth"})
    }
    // window.addEventListener('scroll',handelScroll)

 


  let megoo =document.querySelector(".mego");


useEffect(() => {
 $(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll>=100){
      // $('.navbar').css('background','rgba(0, 0, 0, 0.7)')
      $('.scrolTop').fadeIn(500)
    }else{
      // $('.navbar').css('background','transparent')
      $('.scrolTop').fadeOut(500)
    }

    // $('.scrolTop')addEventListener(function(){
    //   $('.mego').animate({behavior:"smooth"},1000)
    // })
    // $('.mego').click(function() {
    //   $('html, body').animate({scrollTop: 0},1500, 'easeInOutExpo');
    // });
    // megoo.onClick =function(){
    //   window.scrollTo({
    //     behavior:"smooth"
    //   })
    // }
  })
  // $('.scrolTop').animate({behavior:"smooth"},1000)
 
}, [])

  return <>
  {/* fixed-top */}
  
  <nav className="navbar  navbar-expand-lg bg-body-tertiary mb-5 pt-0 fixed-top     ">
  <span className='line'></span>
  <div className="container-fluid p-2 ">
    <p className="navbar-brand f-1" href="#"><img src={apple} alt="" /></p>
    <button className="navbar-toggler mt-3 me-2 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item pe-1">
          <NavLink className="nav-link  " to="Home" >Home</NavLink>
        </li>
        <li className="nav-item pe-1">
          <NavLink className="nav-link"to="Watch">Watch</NavLink>
        </li>
        <li className="nav-item pe-1">
          <NavLink className="nav-link"to="Mac">Mac</NavLink>
        </li>
        <li className="nav-item pe-1">
          <NavLink className="nav-link"to="Iphone">Iphone</NavLink>
        </li> 
        <li className="nav-item pe-1">
          <NavLink className="nav-link"to="Ipad">Ipad</NavLink>
        </li>
        <li className="nav-item pe-1">
          <a className="nav-link" href='mailto:mohamed01266109132@gmail.com'>Contact-us</a>
        </li>
      </ul>
     
    </div>
    
  </div>
</nav>


{/* {showButton&&(
  <div onClick={handelClick} className="scroll-to-top-button">ssdssdaf</div>
)} */}

<div onClick={handelClick} className="scrolTop">
     <a  className='mego' ><i className="fa-solid fa-arrow-up"></i></a>
  </div>
 

{/* <div className="scrolTop" >
  <a href="#" className='mego' ><i className="fa-solid fa-arrow-up"></i></a>
</div> */}




  </>
  
}
