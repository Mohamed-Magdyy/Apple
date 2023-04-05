import React, { useEffect } from "react";
import homeImge from "../Imge/home-1.png";
import homeImge2 from "../Imge/home-2.jpg";
import homeImge3 from "../Imge/home-3.jpg";
import about from "../Imge/about-apple1.png";
import about5 from "../Imge/about-apple5.png";
import about4 from "../Imge/about-apple4.png";
import about2 from "../Imge/about-apple2.jpg";
import about3 from "../Imge/about-apple3.jpg";
import aboutForm from "../Imge/about-form1.jpg";
import aboutForm2 from "../Imge/about-form2.jpg";
import serviceApple from "../Imge/srvice-apple1.jpg";
import serviceApple2 from "../Imge/srvice-apple2.jpg";
import serviceApple3 from "../Imge/srvice-apple3.jpg";
import serviceApple4 from "../Imge/about-apple6.jpg";
import serviceApple5 from "../Imge/srvice-apple4.jpg";
import aboutForm3 from "../Imge/about-formm1.jpg";
import aboutForm4 from "../Imge/about-formm2.jpg";
import aboutForm5 from "../Imge/about-formm3.jpg";
import aboutForm6 from "../Imge/about-formm4.jpg";
import aboutForm7 from "../Imge/last-form4.png";
import aboutForm8 from "../Imge/last-form5.jpg";
import aboutForm9 from "../Imge/last-form6.png";
import aboutForm10 from "../Imge/last-form7.png";
import aboutForm11 from "../Imge/last-form8.png";
import aboutForm88 from "../Imge/last-form1.jpg";
import aboutForm889 from "../Imge/vedioiphone.mp4";
import Loding from "../Loding/Loding";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home/Home.css";
import apple from "../Imge/apple.png";


import {Fade} from "react-reveal"
import {Zoom} from "react-reveal"
export default function Home() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Loding />
      
        <video  autoPlay loop muted
           >  
          <source  autoplay loop muted   src={aboutForm889}/> 
        </video>
        <div className="video-container">
        </div>
   
      {/* START CAROUSEL */}
      {/* <section className="position-relative ">
        <div className="container-fluid crousel pt-5 position-relative">
          <div className="crousel-inner m-auto pt-5">
            <Slider {...settings}>
              <div className="crousel-item">
                <div className="imge-carousel position-relative">
                  <img className="w-100 position-relative" src={homeImge} />
                  <div className="layout position-absolute"></div>
                </div>
                <div className="crousel-title ms-4">
                  <h2>
                    Pro Laptops Preformance <br /> Phons, Great Tablets .
                  </h2>
                  <p>Apple is always with you .</p>
                </div>
              </div>
              <div className="crousel-item">
                <div className="imge-carousel position-relative">
                  <img
                    className="w-50 position-relative m-auto "
                    src={homeImge2}
                  />
                  <div className="layout position-absolute"></div>
                </div>
                <div className="crousel-title mt-2 ms-4">
                  <h2>
                    We always strive to achieve <br />
                    the best equipment
                  </h2>
                  <p>and continuous development in performance and design</p>
                </div>
              </div>
              <div className="crousel-item">
                <div className="imge-carousel position-relative">
                  <img
                    className="w-50 m-auto position-relative"
                    src={homeImge3}
                  />
                  <div className="layout position-absolute"></div>
                </div>
                <div className="crousel-title mt-5 ms-4">
                  <h2>
                    Complete your elegance by wearing <br />
                    the distinguished Apple watches
                  </h2>
                  <p>Enjoy the features of the Apple Watch .</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section> */}
      {/* END CAROUSEL */}

      {/* START ABOUT */}
      <section className="overflow-hidden">
        <div className="container-fulid about overflow-hidden">
          <div className="row ">
            <Fade  duration={2000} delay={1000}>
              <div className="watch-about">
                <img className="" src={about5} alt="" />
              </div>
            </Fade>
            {/* <Fade direction="right" duration={2000}> */}

            <div className="col-md-6 ps-md-5 ps-0 face-about m-md-auto mt-md-0 mt-5 ">
              <div className="about-1 ms-0 ps-md-4 ">
                <div className="imge-about ms-md-5 ms-0 ps-md-5 ps-0 ">
                    <div>
                <Fade right  duration={2000}>

                    <img className="w-100 ps-md-5 ps-3 " src={about} alt="" />
                    </Fade>
                    </div>
                  
                  <Fade direction="bottom"  duration={2000}>
                  <Zoom duration={2000}>
                    <div className="container title-about text-white text-center ms-1  mt-5 ps-md-5 mb-5 mb-md-0">
                      
                      <div>
                        <h2>Apple makes business better.</h2>
                        <p>
                          Apple hardware, software, and services work <br />
                          together to give your employees the power and <br />
                          flexibility to do whatever needs doing — whether{" "}
                          <br />
                          you’re running a startup, scale-up, or global
                          enterprise.
                        </p>
                        </div>
                      
                    </div>
                    </Zoom>
                  </Fade>
                </div>
              </div>
              </div>
                

            
            <Fade top duration={2000} delay={100}>
              <div className="col-md-2 phone-about">
                <img className="w-100 pb-5" src={about2} alt="" />
                <div>
                  <img className="w-50 pt-5" src={about3} alt="" />
                </div>
              </div>
            </Fade>
            <div className="row">
              <Zoom duration={2000} delay={1000}>
                <div className="col-md-3 mac-about">
                  <img className="w-100" src={about4} alt="" />
                </div>
              </Zoom>
            </div>
          </div>
          </div>

      </section>
      {/* END ABOUT */}
      {/* START FORM */}
      <section id="trt" className="overflow-hidden">
        <div className="container-fulid  position-relative overflow-hidden">
          <div className="lay-form "></div>
          <div className="imge-form">
            <img className="w-100 " src={aboutForm88} alt="" />
            <div className="row ">
              <div className="col-md-4 title-form position-absolute  m-2 m-md-5 pt-md-5 pt-3 ">
                <Fade left duration={2000}>
                  <h1 className="pt-md-5 mt-md-5 mt-0 pt-0">
                    Hardware, software, and services, working together as one.
                  </h1>
                </Fade>
                <Fade right duration={2000}>
                  <div className="">
                    <p className="">
                      You can start a project on Mac and finish it on iPad, use
                      your screens side by side to extend your workspace, and
                      even draw with Apple Pencil on your iPad or use your
                      iPhone to make live updates on your Mac. And it’s all
                      compatible with apps from Microsoft and Google, so your
                      team has everything it needs to get any job done.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END FORM */}
      {/* START Service */}
      <section className="overflow-hidden">
        <div className="container">
          <div className="head-serv text-center mt-5">
            <div>
              <Fade right duration={2000}>
                <h1>Service</h1>
              </Fade>
            </div>
            <Fade left duration={2000}>
              <span></span>
            </Fade>
          </div>
          <div className="row  ">
            {/* <Fade left  duration={1000}> */}
            <div className="col-md-6  mt-5 ">
              <div className="item-serv p-1">
                <Fade left duration={2000}>
                  <div className="imge-serv text-center mt-5 ">
                    <img className="w-75" src={serviceApple} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-5 p-3">
                    <p>Mac |</p>
                    <p>
                      Mac is supercharged by Apple silicon, so you can build
                      complex spreadsheets, create stunning presentations, and
                      multitask across all your projects — all day. Mac does
                      that.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            {/* </Fade> */}
            {/* <Fade right  duration={1000}> */}
            <div className="col-md-6 mt-5 mt-5 ">
              <div className="item-serv p-2">
                <Fade right duration={2000}>
                  <div className="imge-serv text-center mt-5">
                    <img className="w-75" src={serviceApple2} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv p-2">
                    <p>iPad |</p>
                    <p>
                      Get power that outpaces most PC laptops in a design that
                      goes everywhere. Scan merchandise, visualize models in 3D,
                      and breeze through work when you multitask with Split
                      View.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            {/* </Fade> */}
            {/* <Fade left  duration={1000}> */}
            <div className="col-md-6  mt-5 mt-5">
              <div className="item-serv p-2">
                <Fade left duration={2000}>
                  <div className="imge-serv text-center mt-5 ">
                    <img className="w-25" src={serviceApple3} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-3 p-3">
                    <p>iPhone |</p>
                    <p>
                      Do incredible things on the go. Visualize 3D projects
                      using augmented reality. Collaborate with your team on
                      Keynote presentations. And stay connected with FaceTime,
                      Messages, and Mail.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            {/* </Fade> */}
            {/* <Fade right  duration={1000}> */}
            <div className="col-md-6  mt-5">
              <div className="item-serv p-3  ">
                <Fade right duration={2000}>
                  <div className="imge-serv text-center  mt-5 pb-4">
                    <img className="w-25" src={serviceApple4} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-5">
                    <p>Apple Watch |</p>
                    <p className="pb-4">
                      Stay connected at a glance. Handle notifications as they
                      pop up with a single tap, track Messages, and get the most
                      out of apps for work and wellness.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            {/* </Fade> */}
            {/* <Fade bottom  duration={1000}> */}
            <div className="col-md-11  mt-5 pb-5 mt-5 m-auto">
              <div className="item-serv p-2 pb-4 d-flex ">
                <Fade left duration={2000}>
                  <div className="imge-serv text-center mt-5 pt-md-0 pt-5">
                    <img className="w-50" src={serviceApple5} alt="" />
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  <div className="form-serv mt-5 pt-5">
                    <p>Apple TV |</p>
                    <p>
                      Turn your best work into a cinematic experience. Put
                      important presentations and data-driven dashboards on
                      display.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </section>
      {/* END Service */}
      {/* START FORM2 */}
      <section className="overflow-hidden">
        <div className="container-fulid  position-relative overflow-hidden">
          <div className="lay-formm "></div>
          <div className="imge-form">
            <img className="w-100 " src={aboutForm2} alt="" />
            <div className="row ">
              <div className="col-md-4 title-form position-absolute  m-2 m-md-5 pt-md-5 pt-5 ">
                <Fade right duration={2000}>
                  <h1 className="pt-md-5 mt-md-5 mt-0 pt-0">
                    Anything’s possible with apps.
                  </h1>
                </Fade>
                <Fade left duration={2000}>
                  <div className="p-reht">
                    <p>
                      Apple devices come with powerful apps built in. The App
                      Store offers even more tools for almost any job — from
                      sales and engineering to fixing jets and building
                      skyscrapers. And the Apple developer platform gives
                      businesses the power to create custom solutions that the
                      world has yet to see.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-4  mt-5 mt-5">
              <div className="item-serv p-2">
                <Fade left duration={2000}>
                  <div className="imge-serv text-center mt-5 ">
                    <img className="w-25" src={aboutForm3} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-3 p-3">
                    <p>Built-in Apps </p>
                    <p>
                      Notes, Siri Shortcuts, and Reminders make simple things
                      even easier, like signing and scanning documents to share
                      and adding a sketch with Apple Pencil on iPad.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="col-md-4  mt-5 mt-5">
              <div className="item-serv p-2 ">
                <Fade bottom duration={2000}>
                  <div className="imge-serv text-center mt-5 ">
                    <img className="w-25" src={aboutForm4} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-3 p-3 ">
                    <p>App Store </p>
                    <p>
                      Over 235,000 business apps help you get any job done, like
                      Cisco Webex and Microsoft Excel for daily needs and
                      industry-specific tools like Shapr3D and Scandit for
                      specialized tasks.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="col-md-4  mt-5 mt-5">
              <div className="item-serv p-2">
                <Fade right duration={2000}>
                  <div className="imge-serv text-center mt-5 ">
                    <img className="w-25" src={aboutForm5} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="form-serv mt-2 p-3">
                    <p>Custom Apps </p>
                    <p>
                      custom apps Create your own game-changing applications
                      using the latest technology to meet your business needs
                      and the many advantages at your disposal.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END FORM2 */}
      {/* START FORM3 */}
      <div className="container-fluid lay-container text-white mt-5 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center mt-5">
              <Fade right duration={2000}>
                <h2>Security first, second, and third.</h2>
              </Fade>
              <Fade left duration={2000}>
                <div className="rtr">
                  <p>
                    Apple devices and platforms are designed to keep your
                    personal data and corporate information secure. Key security
                    features, like hardware-based device encryption, can’t be
                    disabled by mistake. Touch ID and Face ID make it easy to
                    secure every device. And because many of these features are
                    enabled by default, employees and IT won’t need to perform
                    extensive configurations.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Zoom duration={2000}>
          <div className="imgeform4 mt-5 mb-5 ">
            <img className=" w-100" src={aboutForm6} alt="" />
          </div>
        </Zoom>
      </div>
      {/* END FORM3 */}
      {/* START FORM4 */}
      <div className="container-fluid lay-container text-white overflow-hidden">
        <div className="container ">
          <div className="row ">
            <div className="col-md-6  mt-5 mb-5 ms-md-5 ms-0">
              <div className="imge-appleB mt-5 ms-md-4 ms-0">
                <Fade left duration={2000}>
                  <img className="w-75 " src={aboutForm7} alt="" />
                </Fade>
                <Fade right duration={2000}>
                  <h4 className="pt-3 ps-md-1 ps-0">
                    The easy way for small businesses to manage
                    <br /> every aspect of their Apple devices.
                  </h4>
                </Fade>
              </div>
            </div>
            <div className="col-md-12 mb-5">
              <Zoom duration={2000}>
                <div className="tre">
                  <img className="w-100" src={aboutForm8} alt="" />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      {/* END FORM4 */}
      {/* START FORM5 */}
      <div className="container-fluid lay-container text-white overflow-hidden  ">
        <div className="container">
          <div className="row">
            <Fade left duration={2000}>
              <div className="col-md-4 mt-5">
                <h1>Working to make the world a better place.</h1>
              </div>
            </Fade>
          </div>
          <div className="col-md-12 text-center mt-5">
            <div className="item-serv p-5">
              <Fade top duration={2000}>
                <div className="imge-prev mb-3">
                  <img src={aboutForm9} alt="" />
                </div>
              </Fade>
              <Zoom duration={2000}>
                <div className="title-prev">
                  <h4>Privacy</h4>
                  <p>
                    Every Apple product is built from the ground up to protect
                    your privacy. We don’t create user profiles, sell personal
                    information, or share data with third parties to use for
                    marketing or advertising. And apps share only the
                    information that you authorize.
                  </p>
                </div>
              </Zoom>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mt-5 text-center">
              <div className="item-serv p-5">
                <Fade left duration={2000}>
                  <div className="imge-prev mb-3">
                    <img src={aboutForm10} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="title-prev">
                    <h4>Environment</h4>
                    <p>
                      Apple products are designed to reduce our impact on the
                      planet while maximizing performance and strength. We
                      strictly monitor our supply chain during manufacturing,
                      are careful to design for energy efficiency, and work to
                      make our products as recyclable as possible.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
            <div className="col-md-6 mt-5 text-center mb-5">
              <div className="item-serv p-5">
                <Fade right duration={2000}>
                  <div className="imge-prev mb-3">
                    <img src={aboutForm11} alt="" />
                  </div>
                </Fade>
                <Zoom duration={2000}>
                  <div className="title-prev">
                    <h4>Accessibility</h4>
                    <p>
                      We build Apple products to empower everyone. Every device,
                      every piece of software, and every service is created with
                      accessibility features built in. Because when everyone can
                      participate in the ways that work best for them, people
                      and businesses are at their best.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END FORM5 */}

      {/* <div className="container test mt-5 ">
          <div className="row testz m-auto ">
            <div className="col-md-4 tests text-center ">
       
     <img className='w-50' src={iphoneService} alt="" />
  <img className='w-50' src={ipaipadService} alt="" />

            <img className='w-50' src={macService} alt="" />
            <img className='w-50' src={watchService} alt="" />
            <img className='w-75' src={airService} alt="" />
            <img className='w-75' src={pcService}alt="" />
            </div>
          </div>

         </div>
          */}
    </>
  );
}
