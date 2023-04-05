import React from "react";
import "../Ipad/Ipad.css";
import ipad from "../Imge/apple-ipad.jpg";
import ipad2 from "../Imge/apple-ipad2.jpg";
import ipad3 from "../Imge/apple-ipad3.png";
import ipad4 from "../Imge/apple-ipad4.png";
import ipad5 from "../Imge/apple-ipad5.png";
import ipad6 from "../Imge/apple-ipad6.png";
import ipad7 from "../Imge/apple-ipad7.jpg";
import ipad8 from "../Imge/apple-ipad8.jpg";
import ipad9 from "../Imge/apple-ipad9.jpg";
import ipad10 from "../Imge/apple-ipad10.jpg";
import color from "../Imge/color.png";
import color2 from "../Imge/color2.png";
import color3 from "../Imge/color3.png";
import ap from "../Imge/ap1.png";
import ap3 from "../Imge/ap3.png";
import ap18 from "../Imge/ap18.jpg";
import ap19 from "../Imge/ap19.jpg";
import ap20 from "../Imge/ap20.jpg";
import ap21 from "../Imge/ap21.jpg";
import ap22 from "../Imge/ap22.jpg";
import ap23 from "../Imge/ap23.jpg";
import ap24 from "../Imge/ap24.jpg";
import ap25 from "../Imge/ap25.jpg";
import ap26 from "../Imge/ap26.jpg";
import ap27 from "../Imge/ap27.jpg";
import ap28 from "../Imge/ap28.jpg";
import ap31 from "../Imge/ap31.jpg";
import ap32 from "../Imge/ap32.jpg";
import ap33 from "../Imge/ap33.jpg";
import { Fade, Zoom } from "react-awesome-reveal";
import LastSection from "../LastSection/LastSection";
import Loding from "../Loding/Loding";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function Ipad() {
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
      <div className="container-fuild bgContainerwhite  text-center">
        <div className="row ">
          <div className="col-md-6 ms-0 ms-md-5 pt-5 mt-5 mb-5 hover">
            <Fade direction="left" duration={2000}>
              <div className="image w-100">
                <img className="w-75" src={ipad} alt="" />
              </div>
            </Fade>
          </div>
          <div className="col-md-5 m-auto ">
            <Fade direction="right" duration={2000}>
              <div className="title mb-4 mt-5 pb-3">
                <p className="">New</p>
                <h2>IPad</h2>
                <h4>Lovable.Drawable.Magical.</h4>
                <p className="pb-5">From $500</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="container-fuild bgContainerblack text-center ">
        <div className="row">
          <div className="col-md-3 m-auto">
            <div className="title2 mb-4 mt-5 pb-3 ">
              <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
                <div className="left-anmation">
                  <p className="">New</p>
                  <h2>iPad Pro</h2>
                  <h4>Supercharged by M2</h4>
                  <p className="pb-5">From $799</p>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-md-8 m-auto">
            <Reveal keyframes={customAnimationRight} duration={2000} delay={400} >
              <div className="image-move mt-md-5 mt-0 w-100 hover right-anmation">
                <img className="w-100" src={ipad2} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container bgContainerwhite mt-5 mb-5">
        <div className="text-center mt-5 pt-4 mb-5">
          <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
            <div className="right-anmation">
              <h1 className="pb-3">Which iPad is right for you?</h1>
            </div>
          </Reveal>
          <hr />
        </div>
        <div className="text-center row">
          <div className="col-md-3">
            <div className="image ">
              <img className="w-50" src={ipad3} alt="" />
            </div>
            <img src={color} alt="" />
            <h2>iPad Pro</h2>
            <p>The ultimate iPad experience with advanced .</p>
            <p>From $799</p>
            <hr />
            <h4>12.9″ or 11″</h4>
            <p>Liquid Retina display </p>
            <p>ProMotion technology</p>
            <p>P3 wide color</p>
            <p>Antireflective coating</p>
            <img className="pt-5" src={ap3} alt="" />
            <p>M2 chip</p>
            <img className="pt-5" src={ap18} alt="" />
            <p>12MP Ultra front camera</p>
            <p>TrueDepth camera </p>
            <img className="pt-4" src={ap19} alt="" />
            <p>12MP Wide camera</p>
            <p>10MP Ultra Wide camera</p>
            <p>4K video, ProRes</p>
            <img className="pt-4" src={ap20} alt="" />
            <p>Face ID</p>
            <img className="pt-4" src={ap21} alt="" />
            <p>USB‑C connector</p>
            <p>Support for</p>
            <p>Thunderbolt / USB 4</p>
            <img className="pt-4" src={ap22} alt="" />
            <p>5G Capable2</p>
            <img className="pt-4" src={ap23} alt="" />
            <p>Supports Apple Pencil</p>
            <p>(2nd generation)</p>
            <img className="pt-4" src={ap24} alt="" />
            <p>Supports Magic Keyboard</p>
            <hr />
          </div>
          <div className="col-md-3">
            <div className="image-ipadSize">
              <img className="" src={ipad4} alt="" />
            </div>
            <img src={color3} alt="" />
            <h2>iPad</h2>
            <p>The all‑new colorful iPad for the things you do every day.</p>
            <p>From $449</p>
            <hr />
            <h4>10.9″</h4>
            <p>Liquid Retina display1</p>
            <p>---</p>
            <p>sRGB color</p>
            <p>---</p>
            <img className="pt-5" src={ap} alt="" />
            <p className="pb-2">M1 chip</p>
            <img className="pt-5" src={ap25} alt="" />
            <p> 12MP Ultra front camera</p>
            <p className="pb-1">---</p>
            <img className="pt-4" src={ap26} alt="" />
            <p>12MP Wide camera</p>
            <p>---</p>
            <p>4K video</p>
            <img className="pt-4" src={ap20} alt="" />
            <p className="pb-3">Face ID</p>
            <img className="pt-1" src={ap21} alt="" />
            <p>USB‑C connector</p>
            <p>---</p>
            <p>---</p>
            <img className="pt-4" src={ap22} alt="" />
            <p>5G Capable2</p>
            <img className="pt-4" src={ap23} alt="" />
            <p>Supports Apple Pencil</p>
            <p>(1st generation)3</p>
            <img className="pt-4" src={ap24} alt="" />
            <p>Supports Magic Keyboard </p>
            <hr />
          </div>
          <div className="col-md-3">
            <div className="image-ipadSize2">
              <img className="" src={ipad5} alt="" />
            </div>
            <img src={color3} alt="" />
            <h2>iPad</h2>
            <p>All the essentials in the most affordable iPad.</p>
            <p>From $330</p>
            <hr />
            <h4>10.2″</h4>
            <p>Retina display</p>
            <p>---</p>
            <p>sRGB color</p>
            <p>---</p>
            <img className="pt-5" src={ap} alt="" />
            <p className="">M1 chip</p>
            <img className="pt-5" src={ap18} alt="" />
            <p>12MP Ultra Wide front camera</p>
            <p className="pb-1">---</p>
            <img className="pt-4" src={ap33} alt="" />
            <p>8MP Wide camera</p>
            <p>---</p>
            <p>1080p video</p>
            <img className="pt-3" src={ap27} alt="" />
            <p className="pb-3">Touch ID in top button</p>
            <img className="pt-3" src={ap32} alt="" />
            <p>Lightning connector</p>
            <p>---</p>
            <p>---</p>
            <img className="pt-4" src={ap31} alt="" />
            <p>4G LTE cellular2</p>
            <img className="pt-4" src={ap23} alt="" />
            <p>Supports Apple Pencil</p>
            <p>(1st generation)3</p>
            <img className="pt-4" src={ap24} alt="" />
            <p>Supports Smart Keyboard</p>
            <hr />
          </div>
          <div className="col-md-3">
            <div className="image-ipadSize2">
              <img className="" src={ipad6} alt="" />
            </div>
            <img src={color2} alt="" />
            <h2>iPad mini</h2>
            <p>The full iPad experience designed to fit in one hand.</p>
            <p>From $449</p>
            <hr />
            <h4>8.3″</h4>
            <p>Liquid Retina display1</p>
            <p>---</p>
            <p>P3 wide color</p>
            <p>Antireflective coating</p>
            <img className="pt-5" src={ap3} alt="" />
            <p className="">M2 chip</p>
            <img className="pt-5" src={ap18} alt="" />
            <p>12MP Ultra Wide front camera</p>
            <p className="pb-1">---</p>
            <img className="pt-4" src={ap26} alt="" />
            <p>12MP Wide camera</p>
            <p>---</p>
            <p>4K video</p>
            <img className="pt-3" src={ap27} alt="" />
            <p className="pb-3">Touch ID in top button</p>
            <img className="pt-3" src={ap28} alt="" />
            <p>USB‑C connector</p>
            <p>---</p>
            <p>---</p>
            <img className="pt-4" src={ap22} alt="" />
            <p>5G cellular2</p>
            <img className="pt-4" src={ap23} alt="" />
            <p>Supports Apple Pencil</p>
            <p>(2nd generation)3</p>
            <img className="pt-4" src={ap24} alt="" />
            <p>Supports smart keyboards</p>
            <hr />
          </div>
        </div>
      </div>

      <div className="container  text-center mt-5 overflow-hidden">
        <Reveal keyframes={customAnimationLeft} duration={2000}>
          <div className="left-anmation">
            <h1 className="overflow-hidden">iPad essentials</h1>
          </div>
        </Reveal>
        <div className="row pt-5 mt-4 ">
          <div className="col-md-6 mt-4 hover">
            <div className="item bgContainerwhite">
              <Reveal
                keyframes={customAnimationRight}
                delay={200}
                duration={2000}
              >
                <div className="right-anmation">
                  <h2 className="pt-3 mb-5 pb-1">Apple Pencil</h2>
                  <p>Dream it up. Jot it down.</p>
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="left-anmation ">
                  <img className="w-100   " src={ipad7} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-md-6 mt-4 hover ">
            <div className="item  bgContainerwhite">
              <Reveal
                keyframes={customAnimationRight}
                delay={200}
                duration={2000}
              >
                <div className="right-anmation ">
                  <img className="w-100 " src={ipad8} alt="" />
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="left-anmation">
                  <h2>Keyboards for iPad</h2>
                  <p className="pb-2  ">Keyboards that have you covered.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5 overflow-hidden">
        <Reveal keyframes={customAnimationLeft} duration={2000}>
          <div className="left-anmation">
            <h1 className="pb-4">What makes an iPad an iPad?</h1>
          </div>
        </Reveal>
        <div className="row bgContainerwhite ">
          <div className="col-md-6 mt-5 pt-5 ">
            <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
              <div className="right-anmation">
                <h2 className="pt-md-5  mt-md-5">Why iPad</h2>
                <p>
                  Yes, it does that.
                  <br />
                  And then some.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6 ms-4 ms-md-0">
            <Reveal
              keyframes={customAnimationLeft}
              delay={200}
              duration={2000}
            >
              <div className="left-anmation ">
                <img className="w-100" src={ipad9} alt="" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="container bgContainerwhite text-center mt-5 pt-5 mb-5  ">
        <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
          <div className="left-anmation">
            <h2>iPadOS 16</h2>
            <p>Incredibly capable. Unmistakably iPad.</p>
          </div>
        </Reveal>
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation hover">
            <img className="w-100" src={ipad10} alt="" />
          </div>
        </Reveal>
      </div>
      <LastSection />
    </>
  );
}
