import React from "react";
import "../css/css/style.scss";
import logo from "./logo.png";
import { BsArrowLeftShort, BsList } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { Nav, Navbar } from "react-bootstrap";

export default function HeaderNavbar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(false);
  };
  // const [show, setShow] = useState(false);
  // const [score, setScore] = useState(false);

  // const showDropdown = (e) => {
  //   setShow(!show);
  // };
  // const hideDropdown = (e) => {
  //   setShow(false);
  // };
  // const scoreDropdown = (e) => {
  //   setScore(!show);
  // };
  // const hideScoreDropdown = (e) => {
  //   setScore(false);
  // };

  return (
    <Navbar bg="light" expand="lg">
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">
          <a href="/#/index" className="logo me-auto">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <nav id="navbar" className={show ? "navbar-mobile w-100" : "navbar"}>
            <ul>
              <li>
                <Nav.Link href="/#/" onClick={handleClick}>
                  YOUR MORTGAGE SPECIALIST
                </Nav.Link>
              </li>
              <li className="dropdown">
                <Nav.Link href="/#/loanprocess" onClick={handleClick}>
                  <span>THE LOAN PROCESS</span> <FiChevronDown className="bi bi-chevron-down ms-2 mt-1" size={25} />
                </Nav.Link>
                <ul className="dropdown-active">
                  <li>
                    <Nav.Link href="/#/homeloan/basics" onClick={handleClick}>
                      WHO DOES WHAT ?
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/credit" onClick={handleClick}>
                      WHAT IS A CREDIT SCORE
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/brokevsloan" onClick={handleClick}>
                      BROKER VS LOAN
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/fico" onClick={handleClick}>
                      FICO CREDIT SCORE
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/qualified" onClick={handleClick}>
                      GETTING QUALIFIED
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/downpayment" onClick={handleClick}>
                      YOUR DOWNPAYMENT
                    </Nav.Link>
                  </li>
                  <li className="dropdown">
                    <Nav.Link href="/#/closingcost">
                      <BsArrowLeftShort size={20} /> <span>CLOSING COSTS</span>
                    </Nav.Link>
                    <ul className="dropdown-active">
                      <li>
                        <Nav.Link href="/#/taxcost" onClick={handleClick}>
                          Tax Closing costs
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/#/loancost" onClick={handleClick}>
                          Loan Related cost
                        </Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/#/insurancecosts" onClick={handleClick}>
                          Insurance Closing costs
                        </Nav.Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Nav.Link href="/#/calculator" onClick={handleClick}>
                  <span>CALCULATORS</span> <FiChevronDown className="bi bi-chevron-down ms-2 mt-1" size={25} />
                </Nav.Link>
                <ul className="dropdown-active">
                  <li>
                    <Nav.Link href="/#/armorization" onClick={handleClick}>
                      PAYMENT AMORTIZATION
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/rentvsown" onClick={handleClick}>
                      RENT VS OWN
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/annualpercentage" onClick={handleClick}>
                      ANNUAL PERCENTAGE RATE
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/debtconsolidation" onClick={handleClick}>
                      DEBT CONSOLIDATION
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/prepaymentsavings" onClick={handleClick}>
                      PREPAYMENT SAVINGS
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/earlypayoff" onClick={handleClick}>
                      EARLY PAYOFF
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/refinance" onClick={handleClick}>
                      REFINANCE BREAK EVEN
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/taxsaving" onClick={handleClick}>
                      TAX SAVINGS
                    </Nav.Link>
                  </li>
                </ul>
              </li>
              <li>
                <Nav.Link href="/#/contactus" onClick={handleClick}>
                  CONTACT
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#/mortgage/calculator" onClick={handleClick}>
                  MORTGAGE CALCULATOR
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#/borrower/signup" onClick={handleClick}>
                  BORROWER SIGNUP
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/#/login" onClick={handleClick}>
                  LOGIN
                </Nav.Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle">
              {show ? (
                <MdClose onClick={() => setShow(!show)} />
              ) : (
                <BsList color="#0085cb" onClick={() => setShow(!show)} />
              )}
            </i>
          </nav>
        </div>
      </header>
    </Navbar>
  );
}

//second navbar

// <Navbar bg="light" expand="lg" fixed="top" className="m-0">
//   <Container className="m-0">
//     <Navbar.Brand href="/#/#/index">
//       <img src={logo} width="180" height="43" className="d-inline-block align-top" alt="Logo" />
//     </Navbar.Brand>{" "}
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="navbar ms-5" >
//         <Nav.Item className="nvaLinks" >
//           <Nav.Link href="/#/#/">YOUR MORTGAGE SPECIALIST</Nav.Link>
//         </Nav.Item>
//         {/* <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link> */}
//         <NavDropdown
//           title="THE LOAN PROCESS"
//           show={score}
//           onMouseEnter={scoreDropdown}
//           onMouseLeave={hideScoreDropdown}
//           id="basic-nav-dropdown"

//         >
//           <div>

//                           {/* <NavDropdown.Divider></NavDropdown.Divider> */}
//                           <NavDropdown.Item href="/#/#/brokevsloan">BROKER VS LOAN</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/credit">WHAT IS A CREDIT SCORE</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/fico">FICO CREDIT SCORE</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/qualified">GETTING QUALIFIED</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/downpayment">YOUR DOWNPAYMENT</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/loanprocess">THE LOAN PROCESS</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/closingcost">CLOSING COSTS</NavDropdown.Item>

//           <NavDropdown.Divider></NavDropdown.Divider>
//           <NavDropdown.Item href="/#/#/taxcost"><p style={{margin:"0"}} className="ms-5">Tax Closing costs</p></NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/loancost"><p  style={{margin:"0"}} className="ms-5">Loan Related cost</p> </NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/insurancecosts"><p  style={{margin:"0"}} className="ms-5">Insurance Closing costs</p></NavDropdown.Item>
//           </div>
//         </NavDropdown>
//         <NavDropdown
//           title="CALCULATORS"
//           id="nav-bar-calculator"
//           show={show}
//           onMouseEnter={showDropdown}
//           onMouseLeave={hideDropdown}
//         >
//           <NavDropdown.Item href="/#/#/calculator">CALCULATORS</NavDropdown.Item>

//           <NavDropdown.Item href="/#/#/armorization">PAYMENT AMORTIZATION</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/rentvsown">RENT VS OWN</NavDropdown.Item>
//           <NavDropdown.Item href="#/annualpercentage">ANNUAL PERCENTAGE RATE</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/debtconsolidation">DEBT CONSOLIDATION</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/prepaymentsavings">PREPAYMENT SAVINGS=</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/earlypayoff">EARLY PAYOFF</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/refinance">REFINANCE BREAK EVEN</NavDropdown.Item>
//           <NavDropdown.Item href="/#/#/taxsaving">TAX SAVINGS</NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Item>
//           <Nav.Link href="/#/#/contactus">CONTACT US</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/#/#/login">LOG IN</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
