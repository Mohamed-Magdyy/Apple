import React from "react";
import "../Iphone/Iphone.css";
import iphone from "../Imge/iphone.jpg";
import iphone2 from "../Imge/iphone2.jpg";
import iphone3 from "../Imge/iphone3.jpg";
import iphone4 from "../Imge/apple-iphone5.jpg";
import iphone5 from "../Imge/apple-iphone6.jpg";
import iphone6 from "../Imge/apple-iphone7.jpg";
import iphone7 from "../Imge/apple-iphone8.jpg";
import ap53 from "../Imge/ap53.png";
import ap57 from "../Imge/ap57.png";
import ap58 from "../Imge/ap58.png";
import ap59 from "../Imge/ap59.png";
import ap60 from "../Imge/ap60.png";
import ap61 from "../Imge/ap61.png";
import ap62 from "../Imge/ap62.png";
import ap63 from "../Imge/ap63.png";
import ap65 from "../Imge/ap65.jpg";
import ap72 from "../Imge/ap72.jpg";
import ap73 from "../Imge/ap73.png";
import ap30 from "../Imge/ap30.jpg";
import ap20 from "../Imge/ap20.jpg";
import ap22 from "../Imge/ap22.jpg";
import ap8 from "../Imge/ap8.png";
import color from "../Imge/color.png";
import color5 from "../Imge/color5.png";
import color4 from "../Imge/color4.png";
import { Fade, Zoom } from "react-awesome-reveal";
import LastSection from "../LastSection/LastSection";
import Loding from "../Loding/Loding";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
export default function Iphone() {
  const customAnimationLeft = keyframes`
  0% {
    position: relative;
    left: -82%;
  }

 100% {
  position: relative;
  left: 82%;

  }`;

  const customAnimationRight = keyframes`
  0% {
    position: relative;
    left: 97%;
  }

 100% {
  position: relative;
  left: -97%;

  }`;
  return (
    <>
      <Loding />
      <div className="container-fulid text-center pb-5 pb-md-0 pt-5 bgContainerwhite ">
        <Fade direction="left" duration={2000}>
          <p className="pt-5 new">New</p>
          <h5>Iphone14</h5>
          <h2>Two great sizes.Now with a splash of yellow.</h2>
          <p>
            From $799 or $33.29/mo. for 24 mo.
            <br /> before trade‑in2
          </p>
        </Fade>
        <Fade direction="right" duration={2000}>
          <div className="hover">
          <img src={iphone} className="w-75 pb-4 pt-4" />
          </div>
        </Fade>
      </div>

      <div className="container-fulid text-center pt-4 bgContainerblack ">
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation">
            <h5 className="pt-5">Iphone14 Pro</h5>
            <h2>Pro Beyond.</h2>
            <p>
              From $999 or $41.62/mo. for 24 mo.
              <br /> before trade‑in2
            </p>
          </div>
        </Reveal>
        <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
          <div className="left-anmation hover">
            <img src={iphone2} className="w-75  pt-4" />
          </div>
        </Reveal>
      </div>

      <div className="container-fuild text-center pt-4 pt-md-0  bgContainerOfwhite">
        <div className="row">
          <div className="col-md-3 m-auto">
            <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
              <div className="left-anmation">
                <p>Iphone SE</p>
                <h1>
                  Love the power.
                  <br />
                  Love the price.
                </h1>
                <p>
                  From $429 or $17.87/mo. for 24 mo.
                  <br /> before trade‑in2
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal
              keyframes={customAnimationRight}
              delay={200}
              duration={2000}
            >
              <div className="imge-critve w-75 right-anmation hover">
                <img className="" src={iphone3} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container bgContainerwhite mt-5 mb-5">
        <div className="text-center mt-5  mb-5">
          <Reveal keyframes={customAnimationRight} duration={2000}>
            <div className="right-anmation">
              <h1 className="pb-3">Which iPhone is right for you?</h1>
            </div>
          </Reveal>
          <hr />
        </div>
        <div className="text-center row">
          <div className="col-md-3 ">
            <div className="image">
              <img className="w-50" src={iphone4} alt="" />
            </div>
            <img src={color} alt="" />
            <p>New</p>
            <h2>Iphone14 Pro</h2>
            <p>The ultimate iPhone.</p>
            <p>From $999</p>
            <hr />
            <h4>6.7″ or 6.1″</h4>
            <p>Super Retina XDR display3</p>
            <p>ProMotion technology</p>
            <p>Always-On display</p>
            <img className="pt-5" src={ap57} alt="" />
            <p>
              Dynamic Island
              <br />A new way to
              <br />
              interact with iPhone
            </p>
            <img className="pt-5 pb-1" src={ap53} />
            <p>Emergency SOS via satellite4</p>
            <p>Emergency SOS</p>
            <p>Crash Detection5</p>
            <img className="pt-5" src={ap58} alt="" />
            <p>Pro camera system</p>
            <p>48MP Main Ultra Wide</p>
            <p>Telephoto</p>
            <p>Photonic Engine for incredible</p>
            <p>detail and color</p>
            <p>Autofocus on TrueDepth</p>
            <p>front camera</p>
            <img className="pt-5" src={ap61} alt="" />
            <p>
              Action mode smooths out shaky
              <br /> handheld videos
            </p>
            <img className="pt-5" src={ap62} alt="" />
            <p>
              Up to 29 hours
              <br />
              video playback6
            </p>
            <img className="pt-5" src={ap63} alt="" />
            <p>A16 Bionic chip</p>
            <img className="pt-5" src={ap20} alt="" />
            <p>Face ID</p>
            <img className="pt-5" src={ap22} alt="" />
            <p>Superfast 5G cellular7</p>
            <hr />
          </div>
          <div className="col-md-3 ">
            <div className="image-iphone">
              <img src={iphone5} alt="" />
            </div>
            <img src={color} alt="" />
            <p>New</p>
            <h2>Iphone14</h2>
            <p>A total powerhouse.</p>
            <p>From $799</p>
            <hr />
            <h4>6.7″ or 6.1″</h4>
            <p>Super Retina XDR display3</p>
            <p>-</p>
            <p>-</p>
            <img className="pt-5" src={ap57} alt="" />
            <p>
              Dynamic Island
              <br />A new way to
              <br />
              interact with iPhone
            </p>
            <img className="pt-5 pb-1" src={ap53} />
            <p>Emergency SOS via satellite4</p>
            <p>Emergency SOS</p>
            <p>Crash Detection5</p>
            <img className="pt-5" src={ap59} alt="" />
            <p>Advanced dual-camera </p>
            <p>12MP Main Ultra Wide</p>
            <p>-</p>
            <p>Photonic Engine for incredible</p>
            <p>detail and color</p>
            <p>Autofocus on TrueDepth</p>
            <p>front camera</p>
            <img className="pt-5" src={ap61} alt="" />
            <p>
              Action mode smooths out shaky
              <br /> handheld videos
            </p>
            <img className="pt-5" src={ap62} alt="" />
            <p>
              Up to 26 hours
              <br />
              video playback6
            </p>
            <img className="pt-5" src={ap30} alt="" />
            <p>A15 Bionic chip</p>
            <img className="pt-5" src={ap20} alt="" />
            <p>Face ID</p>
            <img className="pt-5" src={ap22} alt="" />
            <p>Superfast 5G cellular7</p>
            <hr />
          </div>
          <div className="col-md-3 ">
            <div className="image-iphone2">
              <img src={iphone6} alt="" />
            </div>
            <img src={color4} alt="" />
            <p>New</p>
            <h2>Iphone13</h2>
            <p>As amazing as ever.</p>
            <p>From $599</p>
            <hr />
            <h4>6.7″ or 5.4″</h4>
            <p>Super Retina XDR display3</p>
            <p>-</p>
            <p>-</p>
            <img className="pt-5" src={ap57} alt="" />
            <p>
              Dynamic Island
              <br />A new way to
              <br />
              interact with iPhone
            </p>
            <img className="pt-5 pb-1" src={ap53} />
            <p>-</p>
            <p>Emergency SOS</p>
            <p>-</p>
            <img className="pt-5" src={ap59} alt="" />
            <p>Dual‑camera system</p>
            <p>12MP Main Ultra Wide</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>TrueDepth front camera</p>
            <p>front camera</p>
            <img className="pt-5" src={ap61} alt="" />
            <p>
              Action mode smooths out shaky
              <br /> handheld videos
            </p>
            <img className="pt-5" src={ap62} alt="" />
            <p>
              Up to 19 hours
              <br />
              video playback6
            </p>
            <img className="pt-5" src={ap30} alt="" />
            <p>A15 Bionic chip</p>
            <img className="pt-5" src={ap20} alt="" />
            <p>Face ID</p>
            <img className="pt-5" src={ap22} alt="" />
            <p>Superfast 5G cellular7</p>
            <hr />
          </div>
          <div className="col-md-3 ">
            <div className="image-iphone3">
              <img src={iphone7} alt="" />
            </div>
            <img src={color5} alt="" />
            <p>New</p>
            <h2>Iphone SE</h2>
            <p>Serious power Serious .</p>
            <p>From $400</p>
            <hr />
            <h4>4.7″</h4>
            <p>Retina HD display</p>
            <p>-</p>
            <p>-</p>
            <img className="pt-5" src={ap57} alt="" />
            <p>
              Dynamic Island
              <br />A new way to
              <br />
              interact with iPhone
            </p>
            <img className="pt-5 pb-1" src={ap53} />
            <p>-</p>
            <p>Emergency SOS</p>
            <p>-</p>
            <img className="pt-5" src={ap60} alt="" />
            <p>Advanced camera system</p>
            <p>12MP Main</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>front camera</p>
            <img className="pt-5" src={ap61} alt="" />
            <p>
              Action mode smooths out shaky
              <br /> handheld videos
            </p>
            <img className="pt-5" src={ap62} alt="" />
            <p>
              Up to 15 hours
              <br />
              video playback6
            </p>
            <img className="pt-5" src={ap30} alt="" />
            <p>A15 Bionic chip</p>
            <img className="pt-5" src={ap20} alt="" />
            <p>Face ID</p>
            <img className="pt-5" src={ap22} alt="" />
            <p>Superfast 5G cellular7</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="container bgContainerwhite  text-center mt-5 pt-5 mb-5 p-0 ">
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation">
            <h1>
              Trade in your current phone for
              <br /> credit toward a new one.
            </h1>
            <p className="pb-3">
              Get $200-$600 in credit when you
              <br /> trade in iPhone 11 or higher and upgrade
              <br /> to iPhone 14 or iPhone 14 Pro.1
            </p>
          </div>
        </Reveal>
        {/* <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}> */}
          <div className=" hover">
            <img className="w-100" src={ap73} alt="" />
          </div>
        {/* </Reveal> */}
      </div>


<div className="container hide-container bgContainerwhite  text-center mt-5  mb-5 p-0 ">
        <div className="imge-bestIphone position-relative hover">
          <img className="w-100" src={ap72} alt="" />
          <div className="text-bestIphone pt-5">
          <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
              <div className="left-anmation ">
                <h1>
                  Why Apple is the best
                  <br /> place to buy iPhone.
                </h1>
                <p>
                  You can choose a payment option that works for
                  <br /> you, pay less with a trade‑in, connect your new
                  <br /> iPhone to your carrier, and get set up quickly.
                  <br />
                  You can also chat with a Specialist anytime.
                </p>
              </div>  
          </Reveal>
          </div>
        </div>
      </div>
      
      <div className="container bgContainerwhite  text-center mt-5 pt-5 mb-5 p-0 ">
        <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
          <div className="left-anmation">
            <h1>What makes an iPhone an iPhone?</h1>
            <h2>iOS 16</h2>
            <p>Personal is powerful.</p>
          </div>
        </Reveal>
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation hover">
            <img className="w-100" src={ap65} alt="" />
          </div>
        </Reveal>
      </div>
      <LastSection />
    </>
  );
}
