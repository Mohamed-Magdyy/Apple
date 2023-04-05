import React from "react";
import mac from "../Imge/apple-mac1.jpg";
import mac2 from "../Imge/apple-mac2.jpg";
import mac3 from "../Imge/mac2.png";
import color from "../Imge/color.png";
import color2 from "../Imge/color2.png";
import color3 from "../Imge/color3.png";
import ap from "../Imge/ap1.png";
import ap2 from "../Imge/ap2.png";
import ap3 from "../Imge/ap3.png";
import ap4 from "../Imge/ap4.png";
import ap5 from "../Imge/ap5.png";
import ap6 from "../Imge/ap6.png";
import ap7 from "../Imge/ap7.png";
import ap8 from "../Imge/ap8.png";
import ap9 from "../Imge/ap9.png";
import ap10 from "../Imge/ap10.jpg";
import ap11 from "../Imge/ap11.jpg";
import ap15 from "../Imge/ap15.jpg";
import ap16 from "../Imge/ap16.jpg";
import ap17 from "../Imge/ap17.jpg";
import "../Mac/Mac.css";
import { Fade, Zoom } from "react-awesome-reveal";
import LastSection from "../LastSection/LastSection";
import Loding from "../Loding/Loding";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function Mac() {
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
      <div className="home">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center m-auto mt-5 pt-5 pt-md-0">
              <div className="item pt-5 pt-md-0">
                <Fade direction="left" duration={2000}>
                  <div className="title mb-4 mt-5 pb-3">
                    <p className="">New</p>
                    <h2>MacBook Pro</h2>
                    <h4>Mover. Maker. Boundary breaker.</h4>
                    <p className="pb-5">From $1999</p>
                  </div>
                </Fade>
                <Fade direction="right" duration={2000}>
                  <div className="imge-mac pt-5 pt-md-4  w-100 hover">
                    <img className="w-75 pt-5 pt-md-0" src={mac} alt="" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home2">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 text-center m-auto mt-5">
              <div className="item">
                <Reveal
                  keyframes={customAnimationLeft}
                  delay={200}
                  duration={2000}
                >
                  <div className="left-anmation pt-5">
                    <p className="">New</p>
                    <h2>Mac mini</h2>
                    <h4>More muscle. More hustle.</h4>
                    <p>From $600</p>
                  </div>
                </Reveal>
                <Reveal
                  keyframes={customAnimationRight}
                  delay={200}
                  duration={2000}
                >
                  <div className="right-anmation w-100 hover">
                    <img className="w-50" src={mac2} alt="" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5  mb-5 pt-5 bgContainerwhite">
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation">
            <h1 className="pb-3">Which Mac is right for you?</h1>
          </div>
        </Reveal>
        <hr />
        <div className="row m-auto">
          <div className="col-md-3">
            <div className="item">
              <div className="imge-mac w-100">
                <img className="w-50" src={mac3} alt="" />
              </div>
              <img src={color} alt="" />
              <h4>MacBook Air</h4>
              <p>M1 chip</p>
              <p>From $999</p>
              <hr />
              <h4>13.3"</h4>
              <p>Retina disp </p>
              <img className="pt-5" src={ap} alt="" />
              <p>Apple M1 chip</p>
              <h4 className="pt-5">8-core</h4>
              <p>CPU</p>
              <h4 className="pt-5">7-core</h4>
              <p>GPU</p>
              <img className="pt-5" src={ap4} alt="" />
              <p>Up to 16GB unified memory</p>
              <h4 className="pt-5">2TB</h4>
              <p>Maximum configurable storage2</p>
              <img className="pt-5" src={ap5} alt="" />
              <p>Up to 18 hours battery life3</p>
              <img className="pt-5" src={ap6} alt="" />
              <p>720p FaceTime HD camera</p>
              <img className="pt-5" src={ap7} alt="" />
              <p>Three‑mic arrayStereo speakers</p>
              <h4 className="pt-5">2.8 lb.</h4>
              <p>Weight</p>
              <img className="pt-5" src={ap8} alt="" />
              <p>Touch ID</p>
              <hr />
            </div>
          </div>
          <div className=" col-md-3">
            <div className="item">
              <div className="imge-mac">
                <img className="w-50" src={mac3} alt="" />
              </div>
              <img src={color2} alt="" />

              <h4>MacBook Air</h4>
              <p>M1 chip</p>
              <p>From $999</p>
              <hr />
              <h4>13.6"</h4>
              <p>Liquid Retina </p>
              <img className="pt-5" src={ap3} alt="" />
              <p>Apple M2 chip</p>
              <h4 className="pt-5">8-core</h4>
              <p>CPU</p>
              <h4 className="pt-5">10-core</h4>
              <p>GPU</p>
              <img className="pt-5" src={ap4} alt="" />
              <p>Up to 24GB unified memory</p>
              <h4 className="pt-5">2TB</h4>
              <p>Maximum configurable storage2</p>
              <img className="pt-5" src={ap5} alt="" />
              <p>Up to 18 hours battery life4</p>
              <img className="pt-5" src={ap6} alt="" />
              <p>1080p FaceTime HD camera</p>
              <img className="pt-5" src={ap7} alt="" />
              <p>Three‑mic array Four-speaker  </p>
              <h4 className="pt-5">2.7 lb.</h4>
              <p>Weight</p>
              <img className="pt-5" src={ap8} alt="" />
              <p>Touch ID</p>
              <hr />
            </div>
          </div>
          <div className=" col-md-3">
            <div className="item">
              <div className="imge-mac">
                <img className="w-50" src={mac3} alt="" />
              </div>
              <img src={color2} alt="" />

              <h4>MacBook Air</h4>
              <p>M2 chip</p>
              <p>From $999</p>
              <hr />
              <h4>13.3"</h4>
              <p>Retina disp </p>
              <img className="pt-5" src={ap} alt="" />
              <p>Apple M1 chip</p>
              <h4 className="pt-5">8-core</h4>
              <p>CPU</p>
              <h4 className="pt-5">10-core</h4>
              <p>GPU</p>
              <img className="pt-5" src={ap4} alt="" />
              <p>Up to 24GB unified memory</p>
              <h4 className="pt-5">2TB</h4>
              <p>Maximum configurable storage2</p>
              <img className="pt-5" src={ap5} alt="" />
              <p>Up to 20 hours battery life5</p>
              <img className="pt-5" src={ap6} alt="" />
              <p>720p FaceTime HD camera</p>
              <img className="pt-5" src={ap7} alt="" />
              <p>Studio-quality three‑mic array Stereo speakers with Spatial</p>
              <h4 className="pt-4">3.0 lb.</h4>
              <p>Weight</p>
              <img className="pt-5" src={ap9} alt="" />
              <p>Touch Bar and Touch ID</p>
              <hr />
            </div>
          </div>
          <div className=" col-md-3">
            <div className="item">
              <div className="imge-mac">
                <img className="w-50" src={mac3} alt="" />
              </div>
              <img src={color3} alt="" />

              <h4>MacBook Pro</h4>
              <p>M1 chip</p>
              <p>From $1999</p>
              <hr />
              <h4> 16”</h4>
              <p>Liquid Retina XDR </p>
              <img className="pt-5" src={ap2} alt="" />
              <p className="pt-1">Apple M2 Pro , M2 </p>
              <h4 className="pt-5">12-core</h4>
              <p>CPU</p>
              <h4 className="pt-5">38-core</h4>
              <p>GPU</p>
              <img className="pt-5" src={ap4} alt="" />
              <p>Up to 96GB unified memory</p>
              <h4 className="pt-5">2TB</h4>
              <p>Maximum configurable storage2</p>
              <img className="pt-5" src={ap5} alt="" />
              <p>Up to 22 hours battery life6</p>
              <img className="pt-5" src={ap6} alt="" />
              <p>1080p FaceTime HD camera</p>
              <img className="pt-5" src={ap7} alt="" />
              <p>
                Studio-quality three‑mic array Six-speaker sound system with
                Spatial 
              </p>
              <h4 className="pt-4">3.5 lb. or 4.7.</h4>
              <p>Weight</p>
              <img className="pt-5" src={ap8} alt="" />
              <p>Touch ID</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 text-center mb-4 ">
        <div className="row">
          <div className="col-md-6">
            <div className="item-mac bgContainerOfwhiteMac ">
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="left-anmation p-4 mb-5">
                  <h6 className="text-dark">Accessories</h6>
                  <h1>
                    Explore Mac <br /> accessories.
                  </h1>
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationRight}
                delay={200}
                duration={2000}
              >
                <div className="imge mt-2 right-anmation hover">
                  <img className="w-100  position-relative" src={ap10} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-md-6  mt-5 mt-md-0">
            <div className="item-mac bgContainerOfwhiteMac  ">
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="left-anmation p-4 mb-4">
                  <h6 className="text-dark">Apple Trade In</h6>
                  <h1>Get credit toward a new Mac.</h1>
                  <p>
                    Just trade in your eligible computer for credit or recycle
                    it for free. It’s good for you and the planet.8
                  </p>
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="imge left-anmation hover">
                  <img className="w-50 pt-0 pt-md-5 " src={ap11} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 text-center overflow-hidden ">
        <Reveal keyframes={customAnimationRight} delay={200} duration={2000}>
          <div className="right-anmation">
            <h1 className="pb-5">What makes a Mac a Mac?</h1>
          </div>
        </Reveal>
        <div className="row ">
          <div className="col-md-6   ">
            <div className="item-mac2 pt-4 bgContainerOfwhite">
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="left-anmation pb-5 ">
                  <h2>Mac does that.</h2>
                  <p>Discover what Mac can do for you.</p>
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationRight}
                delay={200}
                duration={2000}
              >
                <div className="imge pb-3 right-anmation hover">
                  <img className="w-50  position-relative" src={ap15} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 ">
            <div className="item-mac2 pt-3 bgContainerOfwhite">
              <Reveal
                keyframes={customAnimationRight}
                delay={200}
                duration={2000}
              >
                <div className="right-anmation  pb-4" >
                  <h1>Get credit toward a new Mac.</h1>
                  <p>
                    Just trade in your eligible computer for credit or recycle
                    it for free. It’s good for you{" "}
                  </p>
                </div>
              </Reveal>
              <Reveal
                keyframes={customAnimationLeft}
                delay={200}
                duration={2000}
              >
                <div className="imge pb-3 left-anmation hover">
                  <img className="w-50 pt-5 " src={ap16} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center bgContainerOfwhite mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 m-auto mt-3 mt-md-0">
            <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
              <div className="left-anmation">
                <h1>
                  Works smarter.Plays harder.
                  <br />
                  Goes further
                </h1>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6">
            <Reveal
              keyframes={customAnimationRight}
              delay={200}
              duration={2000}
            >
              <div className=" w-100 right-anmation hover">
                <img className="w-100" src={ap17} alt="" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <LastSection />
    </>
  );
}
