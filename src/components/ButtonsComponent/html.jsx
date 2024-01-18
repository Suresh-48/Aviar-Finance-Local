import React, { useState } from "react";
import img from "../img/why-us.png";
import { BiCheckDouble, BiTachometer, BiLayer, BiPlayCircle, BiHelpCircle } from "react-icons/bi";
import { BsDribbble, BsHandThumbsUpFill } from "react-icons/bs";
import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";
import { Button, Card, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import mission from "../img/mision.jpg";
import vision from "../img/vision.jpg";
import "../../css/Form.scss";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaChessPawn,
  FaHandsHelping,
  FaHandshake,
  FaFan,
  FaSlideshare,
} from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread, MdLocationOn } from "react-icons/md";

function Html() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h1>Get Pre-Approved and Save more Money</h1>
                <h2>
                  AVIAR Financial Services LLC is committed to serving customers with respect and attention to detail.
                  Our core values of Honesty, Integrity, and Transparency flow from the corporate office down to the
                  Loan Officer who will serve you. Contact Vijay today and become a believer.
                </h2>
                <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                  <a href="https://aviarfs.my1003app.com/" target="_blank" className="btn-get-started scrollto">
                    Get Started
                  </a>
                  {/* <a
                    href="https://auth.lendwize.io/login?state=hKFo2SBCaTRYYjlJVzBOWFlVSzNTYUtONGR4LU5GeHNseGZHV6FupWxvZ2luo3RpZNkgcllSaFlQelAzbmdQTGhncXMtYjhtaWhKWnlMLUpLZ0ujY2lk2SA5RWlhalM5OUYzRUJVTkU0ZjkxbHRiNHQ3THNiTnc1ZA&client=9EiajS99F3EBUNE4f91ltb4t7LsbNw5d&protocol=oauth2&redirect_uri=https%3A%2F%2Faviarfs.my1003app.com%2Fcallback&connection=borrowerposprod&responseType=token&scope=openid%20profile%20email%20name%20companyName%20user_metadata%20app_metadata&returnTo=https%3A%2F%2Faviarfs.my1003app.com%2Fsession-ended&redirectPath=%2Fpos%2Fapp%2Fselect-loan&portal_config=%7B%22portal%22%3A%22custom-new%22%2C%22path%22%3A%22assets%2Funiversal-login%2Fpos%2F%22%2C%22origin%22%3A%22https%3A%2F%2Faviarfs.my1003app.com%2F%22%2C%22theme%22%3A%7B%22loginTitle%22%3A%22LendWize%22%2C%22logo%22%3A%22logo.svg%22%2C%22remoteAssetPath%22%3A%22https%3A%2F%2Flwapiprod.s3.amazonaws.com%2Fthemes%2Fpos%2Flight%2F%22%7D%2C%22metadata%22%3A%7B%22WizeOrgUnit%22%3A%7B%22logoUrl%22%3A%22https%3A%2F%2Flwapiprod.s3.amazonaws.com%2F4858%2Flogo%2Flogo_1672171411165.png%22%2C%22complianceLogo%22%3A%22https%3A%2F%2Flwapiprod.s3.amazonaws.com%2Fcompliance-logos%2Fequal-housing-opportunity.svg%22%2C%22displayName%22%3A%22AVIAR%20Financial%20Services%20LLC%22%2C%22email%22%3A%22vijay%40aviarfs.com%22%2C%22phone%22%3A%223097501082%22%2C%22companyName%22%3A%22AVIAR%20Financial%20Services%20LLC%22%2C%22streetAddress%22%3A%222103%20Eastland%20Dr%22%2C%22apt%22%3A%22Suite%20A%22%2C%22city%22%3A%22Bloomigton%22%2C%22state%22%3A%22IL%22%2C%22zipCode%22%3A%2261704%22%2C%22id%22%3A4858%7D%2C%22WizeUser%22%3A%7B%22name%22%3A%22Vijay%20Govindarajan%22%2C%22email%22%3A%22vijay%40aviarfs.com%22%2C%22phone%22%3A%223097501082%22%2C%22workPhoneExt%22%3Anull%2C%22nmlsId%22%3A%221860404%22%2C%22jobTitle%22%3A%22Mortgage%20Loan%20Officer%22%2C%22profileImage%22%3A%22https%3A%2F%2Flwapiprod.s3.amazonaws.com%2FWizeUsers%2F61648.jpg%3Ft%3D1672180798029%22%7D%2C%22BranchWizeOrgUnit%22%3Anull%2C%22RealtorUser%22%3Anull%7D%2C%22nmls%22%3A%7B%22broker%22%3Anull%2C%22company%22%3A%222440802%22%7D%2C%22url%22%3A%7B%22signUp%22%3A%22register%22%2C%22forgotPassword%22%3A%22forgotPassword%22%2C%22privacyPolicy%22%3A%22http%3A%2F%2Fnext.arive.com%2Fprivacy_policy.html%22%2C%22termsOfUse%22%3A%22http%3A%2F%2Fnext.arive.com%2Fterms_of_use.html%22%2C%22nmlsConsumerAccess%22%3A%22https%3A%2F%2Fnmlsconsumeraccess.org%2FEntityDetails.aspx%2FCOMPANY%2F%22%7D%2C%22font%22%3A%7B%22file%22%3A%5B%5D%7D%2C%22poweredBy%22%3A%22powered-by-logo.svg%22%2C%22supportEmail%22%3A%22support%40arive.com%22%2C%22serverUri%22%3A%22https%3A%2F%2Fposapi.my1003app.com%22%7D&response_type=code&response_mode=query&nonce=VWo4aX5RTTBKLmw1N1BWWFFjUFZPQVA3R0IydURnWVZ2SU56aWJqcnNkWA%3D%3D&code_challenge=GmCU2rIhMRBVdv-aVg3aOHmYRfc_f2rzI57qhCXqwEY&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuMjIuMSJ9"
                    className="glightbox btn-watch-video"
                  >
                    <i className="bi bi-play-circle">
                      <BiPlayCircle />
                    </i>
                    <span>Watch Video</span>
                  </a> */}
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                <img src={require("../img/hero-img.png")} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>
        </section>

        <main id="main">
          <section id="clients" className="clients section-bg">
            <div className="container">
              <div className="row" data-aos="zoom-in">
                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-1.png")} className="img-fluid secondImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-2.png")} className="img-fluid firstImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-3.png")} className="img-fluid thirdImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-4.png")} className="img-fluid fourthImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-5.png")} className="img-fluid fifthImage" alt="logo" />
                </div>

                <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                  <img src={require("../img/clients/client-6.png")} className="img-fluid fifthImage" alt="logo" />
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>How We Work</h2>
              </div>

              <div className="row p-0 ">
                <div className="col-lg-6">
                  <h5>Get the loan you need</h5>
                  <p>
                    Getting a loan doesn’t have to be a complicated process filled with headaches and paperwork. At Team
                    USA Mortgage, we’re not just committed to finding you the perfect loan, we’re committed to making
                    sure that the whole process is 100% pain–and hassle–free. We can qualify you in five minutes with
                    our loan-by-phone program.
                  </p>
                  <ul>
                    <li style={{ listStyle: "none" }}>
                      <BiCheckDouble color="#109bdd" size={20} />
                      Apply now for a better mortgage experience through Encompass
                    </li>
                    <li style={{ listStyle: "none" }}>
                      <BiCheckDouble color="#109bdd" size={20} />
                      The property serves as protection for loans.
                    </li>
                    {/* <li>
                      <BiCheckDouble color="blue" size={20} /> Duis aute irure dolor in reprehenderit in voluptate velit
                    </li>
                    <li>
                      <BiCheckDouble color="blue" size={20} /> Ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </li> */}
                  </ul>
                </div>

                <div className="col-lg-6 pt-4 pt-lg-0">
                  <h5>We take care of all details, from application to closing.</h5>
                  <p>
                    We have access to an endless pool of investors, so we can offer you more options with better rates
                    and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to.
                    We’ll make sure you’re informed and updated every step of the way.
                  </p>
                  <a
                    href="https://aviarfs.my1003app.com/"
                    target="_blank"
                    className="border px-3 py-2 btn-learn-more-homepage mt-2"
                  >
                    Apply Now
                  </a>
                  {/* <Link to={{ pathname: "/forms/step-1" }} className="btn-learn-more" state={{ value: true }}>
                    Apply Now
                  </Link> */}
                </div>
              </div>
            </div>
          </section>

          <section id="vision">
            <div className="row homepage-mission d-flex justify-content-evenly">
              <div
                className="col-xl-5 col-md-6 col-lg-5 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Card className="vission-card-home">
                  <div className="icon-box">
                    <Card.Img variant="top" className="card-img-home" src={vision}></Card.Img>
                    <Card.Body>
                      <h3 className="text-center home-page-mission-color mb-3">
                        <a href="/">Our Mission</a>
                      </h3>
                      <p>
                        It is the mission of AVIAR Financial Services LLC to provide education and guidance in the
                        mortgage process for past, current, and future homeowners. We will be the source of up-to-date
                        mortgage industry information and maintain high-trust relationships with our clients, business
                        partners, team members, and community. We are committed to sustaining a superior level of
                        integrity and excellence so that our clients feel empowered to make important financial
                        decisions. .
                      </p>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div
                className="col-xl-5 col-md-6 col-lg-5 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Card className="vission-card-home">
                  <div className="icon-box">
                    <Card.Img variant="top" className="card-img-home" src={mission}></Card.Img>
                    <Card.Body>
                      <h3 className="text-center home-page-mission-color mb-3">
                        <a href="/">Our Vision</a>
                      </h3>
                      <p>
                        Our vision is to be the best mortgage broker in our community by being the #1 trustworthy
                        financing source for our clients and referral partners, becoming the top-of-mind choice for
                        alltheir mortgage financing needs.
                      </p>
                    </Card.Body>
                  </div>
                </Card>
              </div>
              <div className="mt-3">
                <Row className="d-flex justify-content-center">
                  <div className="section-title mt-4">
                    <h2>Our Core Values</h2>
                  </div>
                  <Row>
                    <Col>
                      <FaChessPawn size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center mt-2 core-value-h4-color">Intergrity</h4>
                      <p className="text-center">
                        We will lead with truth and honesty and pledge to be forthright with our clients.
                      </p>
                    </Col>
                    <Col>
                      <FaHandshake size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center mt-2 core-value-h4-color">Compassionate</h4>
                      <p className="text-center">
                        We will remember and honor the client experience by treating each borrower like a family.
                      </p>
                    </Col>
                    <Col>
                      <FaFan size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center mt-2 core-value-h4-color">Quality</h4>
                      <p className="text-center">
                        We strive for excellence through continuous improvement of our processes and service clients.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FaHandsHelping size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center core-value-h4-color mt-2">Dedication</h4>
                      <p className="text-center">
                        We are committed to providing our clients with timely communication and helping to guide them in
                        achieving their homeownership goals.
                      </p>
                    </Col>
                    <Col>
                      <BsHandThumbsUpFill size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center core-value-h4-color mt-2">Appreciation</h4>
                      <p className="text-center">
                        We will show gratitude in our daily lives, both professionally and personally, to our families,
                        friends, clients, and business partners.
                      </p>
                    </Col>
                    <Col>
                      <FaSlideshare size="50" color="#0c93bf" className="w-100" />
                      <h4 className="text-center mt-2 core-value-h4-color">Efficiency</h4>
                      <p className="text-center">
                        We will continually review our processes and support systems in place for our clients in order
                        to ensure client satisfaction.
                      </p>
                    </Col>
                  </Row>
                </Row>
              </div>
            </div>
          </section>

          <section id="why-us" className="mission why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                  <div className="content">
                    <h3>
                      We take care of all details, from <strong>application to closing</strong>
                    </h3>
                    <p>
                      We have access to an endless pool of investors, so we can offer you more options with better rates
                      and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk
                      to. We’ll make sure you’re informed and updated every step of the way.
                    </p>
                  </div>

                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">
                          <span>01</span> HOME PURCHASING
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                          <p>
                            Turn the home of your dreams into reality. Whether you are buying your first home, second
                            home, or vacation property.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">
                          <span>02</span> HOME REFINANCING
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                          <p>
                            Save money by taking advantage of the lowest rates available. Whether you are looking to
                            lower your rate, lower your monthly payment, or tap into your home's equity.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">
                          <span>03</span> We make it easy
                          <i className="bx bx-chevron-down icon-show">
                            <FiChevronDown />
                          </i>
                          <i className="bx bx-chevron-up icon-close">
                            <FiChevronUp />
                          </i>
                        </a>
                        <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                          <p>
                            Once you've made an offer and it's been accepted, it's time to apply for the loan. It's very
                            easy, and you can apply online, right here on our website. After the offer has been accepted
                            and you have submitted your loan application, we'll order the professional appraisal on the
                            home.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                  // style='background-image: url("../ img/why-us.png");'
                  style={{ backgroundImage: `url(${img})` }}
                  data-aos="zoom-in"
                  data-aos-delay="150"
                ></div>
              </div>
            </div>
          </section>

          <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                  <img src={require("../img/skills.png")} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                  <h3>Progressbar</h3>
                  <p className="fst-italic">
                    Bank's mortgage loans and start your home mortgage process today. Compare mortgages, see current
                    rates, calculate monthly payments and more.
                  </p>

                  <div className="skills-content">
                    <div className="progress">
                      <span className="skill">
                        Home Purchase<i className="val">100%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={100} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Home Refinance <i className="val">90%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={90} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Home Construction <i className="val">75%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={75} />
                      </div>
                    </div>

                    <div className="progress">
                      <span className="skill">
                        Investment Property<i className="val">55%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <ProgressBar now={55} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Services</h2>
                <p>
                  Also known as a direct lender, a mortgage company typically only specializes in mortgage products and
                  does not offer other banking services such as checking, investments, or loans for other purposes.
                  Moreover, they will usually offer their own products and will not offer loans or products from other
                  companies.
                </p>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon">
                      <BsDribbble size={35} color="#47B2E4" />
                    </div>
                    <h4>
                      <a href="">Home Purchase</a>
                    </h4>
                    <p>
                      Buying a home has long been considered a cornerstone of the American dream. Whether it's your
                      first, or one of many, getting a home loan to purchase a home is one of the most significant
                      financial decisions you’ll make in your life
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <FiFileText size={35} color="#47B2E4" />
                    </div>
                    <h4>
                      <a href="">Home Refinance</a>
                    </h4>
                    <p>
                      Refinancing replaces an existing mortgage with a new one, and you can customize details on the new
                      loan including the type of interest rate, the term length, and the amount borrowed
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <BiTachometer size={35} color="#47B2E4" />
                    </div>
                    <h4>
                      <a href="">Home Construction</a>
                    </h4>
                    <p>
                      Building a new home to your exact specifications is one of the most exciting and rewarding
                      projects you could ever undertake. We offer a number of construction loans designed to fit nearly
                      every new home construction need.
                    </p>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="icon-box">
                    <div className="icon">
                      <BiLayer size={35} color="#47B2E4" />
                    </div>
                    <h4>
                      <a href="">Investment Property</a>
                    </h4>
                    <p>
                      An investment property can be a long-term commitment or a short-term endeavor, such as "house
                      flipping", where a home is purchased, renovated, and then sold at a profit. Regardless of the
                      specifics, the needs of real estate investors are different from the needs of a typical home
                      buyer, so working with a lender who understands your goals is beneficial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                  <h3>We take care of all details, from application to closing.</h3>
                  <p>
                    We have access to an endless pool of investors, so we can offer you more options with better rates
                    and services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to.
                    We’ll make sure you’re informed and updated every step of the way.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a className="cta-btn align-middle" target="_blank" href="https://aviarfs.my1003app.com/">
                    Apply To Action
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2> AVIAR Financial Services’ core philosophy of “customers for Life”</h2>
                <p>
                  A strong and genuine belief in the “customers for life” principal of doing business is what fuels this
                  company. Referrals from previous customers and local real estate professionals have always delivered
                  the majority of the company’s production. We believe in doing the job right the first time so our
                  customers feel comfortable calling on us the next time.
                </p>
              </div>

              <img src={require("../../Image/communication.jpg")} className="fixed-image mx-auto" />

              <div className="mt-4">
                <h5 className="headline">We Listen… then find the best loan product for you!</h5>
                <p>
                  Our goal in serving our customers is letting them tell us what they wish to accomplish in the best
                  possible scenario. Then we work hard to make that scenario a reality. We are proud of our commitment
                  to get the job done right the first time. In times of uncertainty you want a mortgage company that
                  will fight for your best interest. At AVIAR Financial Services, we are committed to doing what’s best
                  for our customers. Let us prove it to you!
                </p>
              </div>
              <Col className="d-flex justify-content-center mt-4">
                <button className="px-3 py-2 mx-auto getmorebutton" onClick={() => setShow(!show)}>
                  Get More Details
                </button>
              </Col>
            </div>
          </section>

          {/* <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Team</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                  fugiat sit in iste officiis commodi quidem hic quas.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                    <div className="pic">
                      <img src={require("../img/team/team-1.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                    <div className="pic">
                      <img src={require("../img/team/team-2.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                    <div className="pic">
                      <img src={require("../img/team/team-3.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mt-4">
                  <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                    <div className="pic">
                      <img src={require("../img/team/team-4.jpg")} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                      <div className="social">
                        <a href="">
                          <FaTwitter color="#37517e" />
                        </a>
                        <a href="">
                          <FaFacebookF color="#37517e" />
                        </a>
                        <a href="">
                          <AiFillInstagram color="#37517e" />
                        </a>
                        <a href="">
                          <FaLinkedin color="#37517e" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>The Loan Process : an Overview</h2>
                <p>
                  There is no doubt ; Getting a mortgage loan is a complicated process. You wouldn't be visiting our
                  website if you could fill out a simple application and get the best loan funded the same day. We do
                  the heavy lifting for you, so you can concentrate on what's important — preparing to move into your
                  new home or saving money.
                </p>
              </div>

              <div className="faq-list">
                <p className="mb-2">
                  <b>Getting a mortgage loan involves four major steps.</b>
                </p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="100">
                    <a data-bs-toggle="collapse" className="collapse " data-bs-target="#faq-list-1">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step one: determine how much you can borrow
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                      <p>
                        A couple of factors determine this amount. What kind of monthly payment are you looking for? And
                        given your unique credit and employment history, income and debt, and goals, how much will a
                        lender loan you? You can get a good idea of your preferred payment abount using the calculators
                        on our website. We'll also help you through different scenarios by asking a few simple
                        questions. Because lender guidelines are fairly standard, we can give you a good idea of how
                        much you can borrow after a short conversation.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="200">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step two: pre-qualify for your loan
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        This is where AVIAR Financial Services can begin saving you money. You will give us information
                        on your employment, assets, and your residence history. You'll provide information on your
                        employment, asset, and residence history. We will get your credit report and score with your
                        permission. After we have reviewed all this info we give you a letter of pre-qualification. Your
                        REALTOR® should use the pre-qual (as they may call it) in order to make the best offer on the
                        home you choose. The pre-qual letter gives you buying clout! While you're picking out the home
                        that's right for you, we're busy researching the loan program that's right for your situation.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="300">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step three: apply now! We make it easy
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Once you've made an offer and it's been accepted, it's time to apply for the loan. It's very
                        easy, and you can apply online, right here on our website. After the offer has been accepted and
                        you have submitted your loan application, we'll order the professional appraisal on the home.
                      </p>
                    </div>
                  </li>

                  <li data-aos="fade-up" data-aos-delay="400">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">
                      <BiHelpCircle color="#47b2e4" size={23} className="me-2" />
                      Step four: funding
                      <i className="bx bx-chevron-down icon-show">
                        <FiChevronDown />
                      </i>
                      <i className="bx bx-chevron-up icon-close">
                        <FiChevronUp />
                      </i>
                    </a>
                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        The agents will find an escrow/title company to handle the "funding" of the loan and closing.
                        We'll coordinate with this company to make sure the papers your lender needs are in order, and
                        you will probably likely sign all these papers at their officeWe do all the work to coordinate
                        with this company on your date to close. Because you don't have to worry with this coordination,
                        you can think about the move, painting, new carpet, and the details involved in getting a new
                        home.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="mt-3">
                You've answered some few questions, provided lots of information, applied online, and before you know
                it, you're deciding when to move in! We take care of the mortgage legwork so you can spend your time
                finding your new home.
              </p>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  {/* Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
                  fugiat sit in iste officiis commodi quidem hic quas. */}
                </p>
              </div>

              <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt">
                        <MdLocationOn />
                      </i>
                      <h4>Location:</h4>
                      <p>2103 Eastland Dr, STE A, Bloomington, IL 61704</p>
                    </div>

                    <div className="email">
                      <i className="bi bi-envelope">
                        <MdOutlineMarkEmailUnread />
                      </i>
                      <h4>Email:</h4>
                      <p>
                        <a href="mailto:vijay@aviarfs.com">Vijay@aviarfs.com</a>
                      </p>
                    </div>

                    <div className="phone">
                      <i className="bi bi-phone">
                        <FiPhoneCall />
                      </i>
                      <h4>Call:</h4>
                      <p>
                        <a href="tel:3097501082">+1 3097501082</a>
                      </p>
                    </div>

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98980.77958290937!2d-86.60188667868584!3d39.17132507403884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1669109434552!5m2!1sen!2sbg"
                      frameBorder="0"
                      style={{ border: "0", width: " 100%", height: "290px" }}
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label for="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="name">Subject</label>
                      <input type="text" className="form-control" name="subject" id="subject" required />
                    </div>
                    <div className="form-group">
                      <label for="name">Message</label>
                      <textarea className="form-control" name="message" rows="10" required></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* <div id="preloader"></div> */}
        {/* <a href="/#/" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a> */}
      </div>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        onHide={() => setShow(!show)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">AVIAR Financial Services</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-sm-3 p-md-5 p-lg-5">
          <div>
            <h4 style={{ color: "#37517e" }}>Low rates and fees through knowledge and technology</h4>
            <p>
              We use the most advanced technology available to close loans quickly, and at low cost. AVIAR Financial
              Services combines the use of the internet along with advanced processing software and automated
              underwriting systems to find the best loan program for our customers. We’ve essentially taken the mystery
              out of approving and closing a home loan.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#37517e" }}>Not just for those with perfect credit</h4>
            <p>
              AVIAR Financial Services is dedicated in the pursuit of offering competitive rates and terms for our “A”
              credit customers. We are also just as driven to provide customers who may have had credit problems in the
              past with the opportunity to obtain a mortgage. Just ask about our low down payment purchase and FHA
              programs.
            </p>
          </div>
          <div>
            <h4 style={{ color: "#37517e" }}>We Listen… then find the best loan product for you!</h4>
            <p>
              Our goal in serving our customers is letting them tell us what they wish to accomplish in the best
              possible scenario. Then we work hard to make that scenario a reality. We are proud of our commitment to
              get the job done right the first time. In times of uncertainty you want a mortgage company that will fight
              for your best interest. At AVIAR Financial Services, we are committed to doing what’s best for our
              customers. Let us prove it to you!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)} className="px-4">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Html;
