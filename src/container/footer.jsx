import React from "react";
import "../css/Homepage.scss";
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaCalendarDay, FaPeopleCarry } from "react-icons/fa";
import { AiFillInstagram, AiOutlineHome } from "react-icons/ai";
import { BsSkype } from "react-icons/bs";
import { BiChevronRight, BiPhone } from "react-icons/bi";
import { MdOutlineMarkEmailUnread, MdPeopleAlt, MdPolicy } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-3 col-md-6 col-sm-6 footer-contact">
              <h4>Aviar Financial Service LLC </h4>
              <p>
                2103 Eastland Dr <br />
                Suite A<br />
                {/* New York, NY 535022 */}
                Bloomington, IL 61704
                <br />
                United States <br />
                <br />
                <strong>
                  <i className="bi bi-envelope">
                    <BiPhone className="me-1" />
                  </i>
                  Phone:
                </strong>
                <a href="tel:3097501082">+1 3097501082</a>
                <br />
                <strong>
                  <i className="bi bi-envelope">
                    <MdOutlineMarkEmailUnread className="me-1" />
                  </i>
                  Email:
                </strong>
                <a href="mailto:Vijay@aviarfs.com" className="ms-1">
                  Vijay@aviarfs.com
                </a>
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right">
                    <AiOutlineHome className="mb-1" />
                  </i>
                  <a href="/#/">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <FaCalendarDay className="mb-1" />
                  </i>
                  <a href="/#/calculator">Calculators</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <MdPeopleAlt className="mb-1" />
                  </i>
                  <a href="/#/contactus">Contact Us</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right">
                    <FaPeopleCarry className="mb-1" />
                  </i>
                  <a href="/#/">Terms of service</a>
                </li> */}
                <li>
                  <i className="bx bx-chevron-right">
                    <MdPolicy className="mb-1" />
                  </i>
                  <a href="/#/privacypolicy">Privacy policy</a>
                </li>{" "}
                <li>
                  <i className="bx bx-chevron-right">
                    <CgFileDocument className="mb-1" />
                  </i>
                  <a href="/#/companystatelicences">COMPANY STATE LICENSES</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right">
                    <BiChevronRight className="mb-1 me-1" size={15} />
                  </i>
                  <a href="/#/loanprocess">The Loan Process</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <BiChevronRight className="mb-1 me-1" size={15} />
                  </i>
                  <a href="/#/homeloan/basics">Who Does What ?</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <BiChevronRight className="mb-1 me-1" size={15} />
                  </i>
                  <a href="/#/calculator">Calculators</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <BiChevronRight className="mb-1 me-1" size={15} />
                  </i>
                  <a href="/#/annualpercentage">Annual Perentage Rate</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right">
                    <BiChevronRight className="mb-1 me-1" size={15} />
                  </i>
                  <a href="/#/earlypayoff">Early Payoff</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-lg-3 col-md-6 col-sm-6 footer-links">
              <h4>Our Social Networks</h4>
              <p style={{ fontSize: "x-small" }}>
                “STATE OF ILLINOIS COMMUNITY REINVESTMENT NOTICE The Department of Financial and Professional Regulation
                (Department) evaluates our performance in meeting the financial services needs of this community,
                including the needs of low-income to moderate-income households. The Department takes this evaluation
                into account when deciding on certain applications submitted by us for approval by the Department. Your
                involvement is encouraged. You may obtain a copy of our evaluation once the Department completes our
                first evaluation. You may also submit signed, written comments about our performance in meeting
                community financial services needs to the Department. We will update this notice when our first
                evaluation has been issued.”
              </p>
              <div className="social-links">
                <a href="#" className="twitter">
                  <FaTwitter color="#fff" />
                </a>
                <a href="#" className="facebook">
                  <FaFacebookSquare color="#fff" />
                </a>
                <a href="#" className="instagram">
                  <AiFillInstagram color="#fff" />
                </a>
                <a href="#" className="google-plus">
                  <BsSkype color="#fff" />
                </a>
                <a href="#" className="linkedin">
                  <FaLinkedinIn color="#fff" />
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span> AVIAR Financial Services LLC</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by
          <a href="https://aviartechservices.com/" target="_blank" className="ms-1">
            AVIAR Technology Services
          </a>
        </div>
      </div>
    </footer>
    // <Container fluid>
    //   <div className="footer-bottom">
    //     <Row>
    //       <Col xs={12} md={6}>
    //         <Row className="d-flex flex-direction-row">
    //           <Col xs={12}>
    //             <div className="footer-page-align">
    //               <Link to={{ pathname: "/companystatelicences" }} style={{ fontSize: "15px", textDecoration: "none", marginRight: "3%" }}>
    //                 COMPANY STATE LICENSES
    //               </Link>
    //             </div>
    //           </Col>
    //           <Col xs={12}>
    //             <div className="footer-page-align">
    //               <Link to={{ pathname: "/privacypolicy" }} style={{ fontSize: "15px", textDecoration: "none", marginRight: "3%" }}>
    //                 PRIVACY POLICY
    //               </Link>
    //             </div>
    //           </Col>
    //           <Col xs={12}>
    //             <div className="footer-page-align">
    //               <Link to="/#/footer" style={{ fontSize: "15px", textDecoration: "none", cursor: "pointer" }}>
    //                 SITE MAP
    //               </Link>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Col>
    //       <Col xs={12} md={6}>
    //         <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page">
    //           AVIAR Financial Services LLC
    //         </p>
    //         <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
    //           2103 Eastland Dr, Suite F
    //         </p>
    //         <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
    //           Bloomington, IL 61704
    //         </p>
    //         <p style={{ fontSize: "14px", textAlign: "end" }} className="footer-page-align">
    //           NMLS #: 1860404
    //         </p>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs={12} md={6}>
    //         <div className="footer-last-content-page">
    //           <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }}>
    //             Purchase Loans
    //           </Link>
    //           <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }} className="px-3">
    //             Refinance Loans
    //           </Link>
    //           <Link to={"#"} style={{ fontSize: "13px", textDecoration: "none" }}>
    //             Construction Loans
    //           </Link>
    //         </div>
    //       </Col>
    //       <Col xs={12} md={6}>
    //         <div className="footer-last-content">
    //           <text style={{ fontSize: "13px" }}>
    //             309-750-1082 |
    //             <a href="vijay@aviartechservices.com" style={{ fontSize: "15px" }}>
    //               vijay@aviartechservices.com
    //             </a>
    //           </text>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <div className="square">
    //         <FaFacebookSquare className="facebook  " size={40} />

    //         <FaTwitterSquare className="twitter " size={40} />

    //         <FaInstagramSquare className="instagram " size={40} />

    //         <FaInvision className="in" size={40} />
    //       </div>
    //     </Row>
    //     <div className="d-flex justify-content-end mt-3 footer-page-image">
    //
    //       <img
    //         alt="home"
    //         src="	https://asset-service-bucket-prod.s3.amazonaws.com/92f08dc6-86cf-4396-bc20-76d26155e94c"
    //         sizes="51"
    //         className="footer-image"
    //       />
    //     </div>
    //   </div>
    // </Container>
  );
}
