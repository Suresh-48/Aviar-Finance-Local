import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.scss";
import map from "./map.png";
import home from "./img/home.jpg";
import manager from "./img/Manager.jpg";
export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid>
        <div
          style={{
            backgroundImage: `url(${home})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "rgba(0, 86, 184, 0.75)",
            height: "480px",
            position: "relative",
          }}
          className=" name mt-5 mx-2"
        >
          <div className="overlay-texts">
            <h3 class="text-center">Aviar Financial Services and Vijay Govindarajan</h3>
            <p className=" mt-3  " style={{ fontSize: "22px", letterSpacing: "1px" }}>
              Aviar Financial Services LLC is committed to serving customers with respect and attention to detail. Our
              core values of Honesty, Integrity, and Transparency flow from the corporate office down to the Loan
              Officer who will serve you. Contact Vijay today and become a believer.
            </p>
          </div>
        </div>
        <Container>
          <Row className="mt-5  ">
            <Col md={6}>
              <div>
                <h5 className="text-center h3-color">HOME PURCHASING</h5>
                <p className="text-center">
                  Turn the home of your dreams into reality. Whether you are buying your first home, second home, or
                  vacation property.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h5 className="text-center" style={{ color: "#37517e" }}>
                  HOME REFINANCING
                </h5>
                <p className="text-center">
                  Save money by taking advantage of the lowest rates available. Whether you are looking to lower your
                  rate, lower your monthly payment, or tap into your home's equity.
                </p>
              </div>
            </Col>
            <div className="homepage-button mt-5 mb-5">
              <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
                Apply Now
              </Button>
            </div>
          </Row>

          <hr className="mt-5 mb-5 px-5" />
          <div>
            <h4 className="text-center" style={{ color: "#37517e" }}>
              We take care of all details, from application to closing.
            </h4>

            <p className="text-center">
              We have access to an endless pool of investors, so we can offer you more options with better rates and
              services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to. We’ll make
              sure you’re informed and updated every step of the way.
            </p>
          </div>
          <hr className="mt-4 mb-4" />

          <div className="d-flex justify-content-center">
            <img src={manager} alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
          <hr className="mt-4 mb-5" />
          <div>
            <h3 className="text-center mb-4" style={{ color: "#37517e" }}>
              How We Work
            </h3>
          </div>
          <Row>
            <Col md={6}>
              <div>
                <h5 className="text-center" style={{ color: "#37517e" }}>
                  Get the loan you need
                </h5>
                <p className="text-center">
                  Getting a loan doesn’t have to be a complicated process filled with headaches and paperwork. At Team
                  USA Mortgage, we’re not just committed to finding you the perfect loan, we’re committed to making sure
                  that the whole process is 100% pain–and hassle–free. We can qualify you in five minutes with our
                  loan-by-phone program.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <h5 className="text-center" style={{ color: "#37517e" }}>
                We take care of all details, from application to closing.
              </h5>
              <p className="text-center">
                We have access to an endless pool of investors, so we can offer you more options with better rates and
                services than other mortgage providers. We are quick, efficient, friendly, and easy to talk to. We’ll
                make sure you’re informed and updated every step of the way.
              </p>
            </Col>
          </Row>
          <hr className="mt-5 mb-3" />
          <Row>
            <Col md={6}>
              <h4 className="mb-5" style={{ color: "#37517e" }}>
                Aviar Financial Services LLC
              </h4>
              <h5 className="mb-3">Vijay Govindarajan</h5>
              <h5 className="mb-3">Branch Manager/Mortgage Loan Officer</h5>
              <h5 className="mb-3">NMLS #: 1860505</h5>
              <a className="mb-3" href="309-750-1082">
                Cell: 309-750-1082
              </a>
              <h6 className="mt-5" style={{ color: "#37517e" }}>
                --STATE OF ILLINOIS COMMUNITY REINVESTMENT NOTICE--
              </h6>
              <p>
                The Department of Financial and Professional Regulation (Department) evaluates our performance in
                meeting the financial services needs of this community, including the needs of low-income to
                moderate-income households. The Department takes this evaluation into account when deciding on certain
                applications submitted by us for approval by the Department. Your involvement is encouraged. You may
                obtain a copy of our evaluation. You may also submit signed, written comments about our performance in
                meeting community financial services needs to the Department. We will update this notice when our first
                evaluation has been issued.
              </p>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98980.77958290937!2d-86.60188667868584!3d39.17132507403884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1669109434552!5m2!1sen!2sbg"
                  frameBorder="0"
                  style={{ border: "0", width: " 100%", height: "290px" }}
                  allowfullscreen
                ></iframe>
                {/* <img src={map} alt="map" className="index-page-image" /> */}
              </>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
