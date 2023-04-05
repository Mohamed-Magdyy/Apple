import React, { useEffect } from "react";
import "../Watch/Watch.css";
import watchApple from "../Imge/apple-watch.jpg";
import watchApple2 from "../Imge/last-watch.jpg";
import watchApple3 from "../Imge/apple-watch10.jpg";
import watchApple33 from "../Imge/apple-watch3.jpg";
import watchApple4 from "../Imge/apple-watch4.jpg";
import watchApple5 from "../Imge/apple-watch5.jpg";
import watchApple6 from "../Imge/apple-watch6.jpg";
import watchApple7 from "../Imge/apple-watch7.jpg";
import watchApple8 from "../Imge/apple-watch8.jpg";
import watchApple9 from "../Imge/apple-watch9.jpg";
import color5 from "../Imge/color5.png";
import color4 from "../Imge/color4.png";
import color3 from "../Imge/color3.png";
import ap66 from "../Imge/ap66.png";
import ap67 from "../Imge/ap67.png";
import ap68 from "../Imge/ap68.png";
import ap69 from "../Imge/ap69.png";
import ap46 from "../Imge/ap46.png";
import ap47 from "../Imge/ap47.png";
import ap48 from "../Imge/ap48.png";
import ap49 from "../Imge/ap49.png";
import ap50 from "../Imge/ap50.png";
import ap51 from "../Imge/ap51.png";
import ap52 from "../Imge/ap52.png";
import ap53 from "../Imge/ap53.png";
import ap54 from "../Imge/ap54.png";
import ap55 from "../Imge/ap55.jpg";
import ap70 from "../Imge/ap70.jpg";
import ap71 from "../Imge/ap71.png";
import { keyframes } from "@emotion/react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import LastSection from "../LastSection/LastSection";
import Loding from "../Loding/Loding";


export default function Watch() {

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
      <div className="container-fulid text-center bgContainerOf pt-5">
        <Fade direction="left" duration={2000}>
          <img className="pt-5" src={ap66} width="100" />
          <h1>Adventure awaits.</h1>
          <p>$799</p>
        </Fade>
        <Fade direction="right" duration={2000}>
          <div className="hover hoverHide">
          <img src={watchApple} className="w-100 pb-4" />
          </div>
        </Fade>
      </div>
      <div className="container-fuild bgContainerblack text-center  ">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 ms-0 ms-md-5 hover ">
              <div className="image m-auto m-md-0 w-50 up">
                <Reveal
                  delay={200}
                  keyframes={customAnimationLeft}
                  duration={2000}
                >
                  <div className="left-anmation">
                    <img className="w-100" src={watchApple2} alt="" />
                  </div>
                </Reveal>
              </div>
            </div>
            {/* moewalls */}
            <div className="col-md-5 m-auto">
              <Reveal
                delay={200}
                className="yy "
                keyframes={customAnimationRight}
                duration={2000}
              >
                <div className="right-anmation    me-0 mb-4 mt-5 pb-3 ">
                  <div>
                    <img className="pb-4" src={ap67} alt="" />
                  </div>
                  <div>
                    <h2>A healthy leap ahead.</h2>
                    <p className="pb-5">
                      From <span className="dlo">$</span> $399
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fuild  bgContainerblack text-center">
        <div className="row">
          <div className="col-md-6 m-auto  ">
            <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
              <div className=" left-anmation ">
                <div>
                  <img className=" mb-3" src={ap68} width="100" />
                </div>
                <div>
                  <h1>
                    Creativity and community.
                    <br /> Woven together.
                  </h1>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-md-6 up ">
            <Reveal
              keyframes={customAnimationRight}
              delay={200}
              duration={2000}
            >
              <div className="imge-critve w-100 right-anmation hover">
                <img className="" src={watchApple3} />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="container bgContainerwhite mt-5 text-center">
        <Reveal
          className=""
          keyframes={customAnimationRight}
          delay={200}
          duration={2000}
        >
          <div className="right-anmation">
            <h1 className="pt-5 pb-4 ">Which Apple Watch is right for you?</h1>
          </div>
        </Reveal>
        <hr />
        <div className="row">
          <div className="col-md-4 change mt-5  m-auto">
            <div className="item-moqrna">
              <div className="imge-watchz">
                {" "}
                <img src={watchApple4} />
              </div>
              <br />
              <img className="pb-3" src={color4} />
              <h4>Apple Watch S 8</h4>
              <p>From $249</p>
              <hr />
              <h4>45mm or 41mm</h4>
              <p>Swimproof1</p>
              <p>IP6X dust resistant1</p>
              <p>-</p>
              <p>-</p>
              <img className="pt-5 pb-1" src={ap46} />
              <p>Always-On Retina </p>
              <p>Up to 1000 nits</p>
              <img className="pt-5 pb-1" src={ap49} />
              <p>Blood Oxygen app2</p>
              <img className="pt-5 pb-1" src={ap50} />
              <p>ECG app3</p>
              <img className="pt-5 pb-1" src={ap51} />
              <p>
                High and low heart
                <br />
                rate notifications
              </p>
              <p>
                Irregular rhythm
                <br />
                notification4
              </p>
              <img className="pt-5 pb-1" src={ap52} />
              <p>Temperature </p>
              <p>
                cycle tracking
                <br />
                with retrospective
                <br />
                ovulation estimates6
              </p>
              <img className="pt-5 pb-1" src={ap53} />
              <p>Emergency SOS7</p>
              <p>
                International
                <br />
                emergency calling8
              </p>

              <p>Fall Detection</p>

              <p>Crash Detection7</p>
              <p>-</p>

              <img className="pt-5 pb-1" src={ap54} />
              <p>Cellular available9</p>
              <p>
                Family Setup — pair multiple watches
                <br />
                with one iPhone10
              </p>
              <hr />
            </div>
          </div>
          <div className="col-md-4 mt-5 change m-auto">
            <div className="item-moqrna">
              <div className="imge-watchz">
                {" "}
                <img src={watchApple5} />
              </div>
              <br />
              <img className="pb-3" src={color3} />
              <h4>Apple Watch SE</h4>
              <p>From $300</p>
              <hr />
              <h4>44mm or 40mm</h4>
              <p>Swimproof1</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <img className="pt-5 pb-1" src={ap47} />
              <p>Retina display</p>
              <p>Up to 1000 nits</p>
              <img className="pt-5 pb-1" src={ap49} />
              <p>Blood Oxygen app2</p>
              <img className="pt-5 pb-1" src={ap50} />
              <p>ECG app3</p>
              <img className="pt-5 pb-1" src={ap51} />
              <p>
                High and low heart
                <br />
                rate notifications
              </p>
              <p>
                Irregular rhythm
                <br />
                notification4
              </p>
              <img className="pt-5 pb-1" src={ap52} />
              <p>-</p>
              <p>
                Cycle tracking6
                <br />
                -
                <br />-
              </p>
              <img className="pt-5 pb-1" src={ap53} />
              <p>Emergency SOS7</p>
              <p>
                International
                <br />
                emergency calling8
              </p>

              <p>Fall Detection</p>

              <p>Crash Detection7</p>
              <p>-</p>

              <img className="pt-5 pb-1" src={ap54} />
              <p>Cellular available9</p>
              <p>
                Family Setup — pair multiple watches
                <br />
                with one iPhone10
              </p>
              <hr />
            </div>
          </div>
          <div className="col-md-4 mt-5 change m-auto">
            <div className="item-moqrna">
              <div className="imge-watchz">
                {" "}
                <img src={watchApple6} />
              </div>
              <br />
              <img className="pb-3" src={color5} />
              <h4>Apple Watch Ultra</h4>
              <p>From $799</p>
              <hr />
              <h4>49mm</h4>
              <p>Swimproof1</p>
              <p>IP6X dust resistant12</p>
              <p>MIL-STD 810H certification13</p>
              <p>Action button</p>
              <img className="pt-5 pb-1" src={ap46} />
              <p>Always-On Retina display</p>
              <p>Up to 2000 nits</p>
              <img className="pt-5 pb-1" src={ap49} />
              <p>Blood Oxygen app2</p>
              <img className="pt-5 pb-1" src={ap50} />
              <p>ECG app3</p>
              <img className="pt-5 pb-1" src={ap51} />
              <p>
                High and low heart
                <br />
                rate notifications
              </p>
              <p>
                Irregular rhythm
                <br />
                notification4
              </p>
              <img className="pt-5 pb-1" src={ap52} />
              <p>Temperature sensing5</p>
              <p>
                cycle tracking
                <br />
                with retrospective
                <br />
                ovulation estimates6
              </p>
              <img className="pt-5 pb-1" src={ap53} />
              <p>Emergency SOS7</p>
              <p>
                International
                <br />
                emergency calling8
              </p>

              <p>Fall Detection</p>

              <p>Crash Detection7</p>
              <p>86-decibel Siren to attract attention</p>

              <img className="pt-5 pb-1" src={ap54} />
              <p>Cellular available9</p>
              <p>
                Family Setup — pair multiple watches
                <br />
                with one iPhone10
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container bgContainerOf p-5 text-center mt-5">
        <div className="row">
          <div className="col-md-6 hover">
            <Reveal keyframes={customAnimationLeft} delay={200} duration={2000}>
              <div className="right-anmation-def ms-4 ms-md-5">
                <img className="w-100" src={watchApple7} />
              </div>
            </Reveal>
          </div>
          <div className="col-md-4 m-auto pt-4 pt-md-0  ">
            <Reveal
              keyframes={customAnimationRight}
              delay={200}
              duration={2000}
            >
              <div className="left-anmation-def me-5 me-md-0">
                <h5>Family Setup</h5>
                <h2>Your family joined at the wrist</h2>
                <h5>
                  {" "}
                  Family members who don't have an iPhone can stay in touch with
                  Apple Watch.
                </h5>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="container-fulid  bgContainerwhite mt-5">
        <div className="container text-center mt-5">
          <div className="row ">
            <div className="col-md-12 hide ">
              <div className="imge-fitnes w-100">
                <Reveal
                  delay={200}
                  keyframes={customAnimationLeft}
                  duration={2000}
                >
                  <div className="left-anmation">
                    <img className="w-100" src={ap55} alt="" />
                  </div>
                </Reveal>
                <div className="imge-fitnes2 ">
                  <Reveal
                    delay={200}
                    keyframes={customAnimationRight}
                    duration={2000}
                  >
                    <div className="right-anmation">
                      <img src={ap69} alt="" />
                      <h3>
                        Get 3 months free when you <br />
                        buy an Apple Watch.14
                      </h3>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
            <div className="col-md-8 hide2 ">
              <Reveal
                delay={200}
                keyframes={customAnimationLeft}
                duration={2000}
              >
                <div className="imge-fitnes22 w-100 left-anmation">
                  <img className="w-100" src={ap55} alt="" />
                </div>
              </Reveal>
            </div>
            <div className="col-md-4 hide2 m-auto">
              <div className="imge-fitnes22 ">
                <Reveal
                  delay={200}
                  keyframes={customAnimationRight}
                  duration={2000}
                >
                  <div className="right-anmation">
                    <img className="w-50 pb-3 pt-1 " src={ap69} alt="" />
                    <h2 className="mb-3">
                      Get 3 months free when you buy an Apple Watch.14
                    </h2>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bgContainerOf text-center mt-5">
        <Reveal delay={200} keyframes={customAnimationLeft} duration={2000}>
          <div className="left-anmation">
            <h4 className="pt-3">Apple Watch Studio</h4>
            <h2 className="pb-3">
              Any case. Any band.
              <br />
              Any style you want.
            </h2>
          </div>
        </Reveal>
        <div className="row">
          <div className="col-md-12">
            <div className="imge-acsesor">
              <Reveal
                delay={200}
                keyframes={customAnimationRight}
                duration={3000}
              >
                <div className="right-anmation-acsesor">
                  <img className="w-100" src={ap70} alt="" />
                </div>
              </Reveal>
              <div className="imge-watch-move">
                <img className="" src={ap71} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-md-6 hover">
            <div className="item-watchOs bgContainerOf ">
              <div className="title-watchOs pt-2 pb-2">
                <Reveal
                  delay={200}
                  keyframes={customAnimationLeft}
                  duration={2000}
                >
                  <div className="left-anmation">
                    <h3>Why Apple Watch</h3>
                    <h1>
                      It's the ultimate device <br />
                      for a healthy life.
                    </h1>
                  </div>
                </Reveal>
              </div>
              <Reveal
                delay={200}
                keyframes={customAnimationRight}
                duration={2000}
              >
                <div className="right-anmation-deff ">
                  <img className="w-100 pb-5 " src={watchApple9} alt="" />
                </div>
              </Reveal>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0 hover">
            <div className="item-watchOs bgContainerOf  ">
              <div className="title-watchOs pt-2 pb-2 ">
                <Reveal
                  delay={200}
                  keyframes={customAnimationRight}
                  duration={2000}
                >
                  <div className="right-anmation ">
                    <h1>watchOS 9</h1>
                    <h3>Extremely insightful. Exceptionally personal.</h3>
                  </div>
                </Reveal>
              </div>
              <Reveal
                keyframes={customAnimationLeft}
                duration={2000}
                delay={200}
              >
                <div className="left-anmation">
                  <img
                    className="w-100 bgContainerOf"
                    src={watchApple8}
                    alt=""
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      <LastSection />
    </>
  );
}
