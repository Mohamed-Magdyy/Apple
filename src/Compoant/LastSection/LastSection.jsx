import React from 'react'
import ap12 from "../Imge/box.png";
import ap13 from "../Imge/apple-mac20.svg";
import ap14 from "../Imge/apple-mac21.svg";
import "../LastSection/LastSection.css";
import { Fade,Zoom} from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function LastSection() {

  const customAnimationLeft = keyframes`
  0% {
    position: relative;
    left: -82%;
  }

 100% {
  position: relative;
  left: 88%;

  }`;

  const customAnimationRight = keyframes`
  0% {
    position: relative;
    left: 82%;
  }

 100% {
  position: relative;
  left: -95%;

  }`;


  const customAnimationLast = keyframes`
  0% {
    position: relative;
    top: -90%;
  }

 100% {
  position: relative;
  top: 0%;

  }`;


  return<>
       <div className="container item-mac2 text-center m-auto bgContainerwhite mt-5 mb-5 pb-5">
        <div className="row m-auto">
          <div className="col-md-4 mt-4 ">
        <Reveal className=' m-auto' keyframes={customAnimationLeft} duration={2000}>
        <div  className="right-anmation-def  ">
            <div className="imgefx ">
              <img className="" src={ap12} alt="" />
            </div>
            <h4>Fast delivery or pickup</h4>
            <p>
              Enjoy two‑hour delivery from an
              <br /> Apple Store, free delivery, or
              <br /> easy pickup.
            </p>
            </div>
          </Reveal>
          </div>
          <div className="col-md-4">
          <Reveal keyframes={customAnimationLast}  duration={2000}>
          <div  className="top-anmation">
            <div className="imge">
              <img className="" src={ap13} alt="" />
            </div>
            <h4>Pay monthly at 0% APR</h4>
            <p>
              You can pay over time when you
              <br /> choose to check out with Apple Card
              <br /> Monthly Installments.
            </p>
            </div>
          </Reveal>
          </div>
          <div className="col-md-4   ">
          <Reveal keyframes={customAnimationRight} duration={2000}>
          <div  className="right-anmation">
            <div className="imge-denf " >
              <img className="" src={ap14} alt="" />
            </div>
            <h4 className="pt-2">Get help buying</h4>
            <p>
              Have a question? Call a Specialist or
              <br /> chat online. Call 1‑800-MY‑APPLE.
            </p>
            </div>
          </Reveal>
          </div>
        </div>
      </div>
    </>
  
}
