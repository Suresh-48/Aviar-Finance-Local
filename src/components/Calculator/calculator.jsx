import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Calculator/calculator.scss";
import { Link } from "react-router-dom";
import refinance from "../img/refinance.jpg";

function Calculator() {
  return (
    <Container fluid>
      <div
        className="color mt-5 mx-2"
        style={{
          backgroundImage: `url(${refinance})`,
        }}
      >
        <div className="overlay-text-text">
          <div className="page-name">
            <h1>CALCULATORS</h1>
          </div>
        </div>
      </div>
      <div className="heading_1">
        <h3 className="headline">FIND OUT HOW MUCH YOU CAN AFFORD</h3>
        <p className="para_1">The following online calculators serve as helpful tools during the mortgage process.</p>
      </div>
      <Container fluid style={{ width: "95%" }}>
        <Row className="calculator-option">
          <Col>
            <div>
              <img className="rounded mx-auto d-block " src={require("../img/calc_payment.png")} />
            </div>
            <div className="content">
              <Link className="calculators" to={{ pathname: "/armorization" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Payment / Amortization Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">
                Calculate your monthly payment and see how the principal is paid over time.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <img className="rounded mx-auto d-block " src={require("../img/calc_rent.png")} />
            </div>
            <div className="content">
              <Link className="calculators" to={{ pathname: "/rentvsown" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff", padding: "5px" }}>
                  Rent vs Own Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">Calculate the difference between renting and buying a home..</p>
            </div>
          </Col>
          <Col>
            <img className="rounded mx-auto d-block " src={require("../img/calc_apr.png")} />
            <div className="content">
              <Link className="calculators" to={{ pathname: "/annualpercentage" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Annual Percentage Rate Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">Calculate the APR for fixed-rate or adjustable-rate loans.</p>
            </div>
          </Col>
          <Col>
            <img className="rounded mx-auto d-block " src={require("../img/calc_debt.png")} />
            <div className="content">
              <Link className="calculators calcContents" to={{ pathname: "/debtconsolidation" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Debt Consolidation Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">
                Determine if you can consolidate your debt by combining it with your home mortgage.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="calculator-option">
          <Col>
            <div>
              <img className="rounded mx-auto d-block " src={require("../img/calc_prepay.png")} />
            </div>
            <div className="content">
              <Link className="calculators" to={{ pathname: "/prepaymentsavings" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Prepayment Savings Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">
                Find out how soon you can pay off your mortgage by making a prepayment.
              </p>
            </div>
          </Col>
          <Col>
            <img className="rounded mx-auto d-block" height={171} width={171} src={require("../img/pay.png")} />
            <div className="content">
              <Link className="calculators" to={{ pathname: "/earlypayoff" }}>
                <h6 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Early Payoff Calculator
                </h6>
              </Link>
              <p className="text-center calcContents">
                Determine the additional monthly payment amount needed to pay off the loan sooner.
              </p>
            </div>
          </Col>
          <Col>
            <img className="rounded mx-auto d-block" height={171} width={171} src={require("../img/refinan.png")} />
            <div className="content">
              <Link className="calculators" to={{ pathname: "/refinance" }}>
                <h5 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Refinance Break-Even Point Calculator
                </h5>
              </Link>
              <p className="text-center calcContents">
                Find out how long it will take to "break-even" on a refinanced loan.
              </p>
            </div>
          </Col>
          <Col>
            <img className="rounded mx-auto d-block " src={require("../img/calc_tax.png")} />
            <div className="content">
              <Link className="calculators" to={{ pathname: "/taxsaving" }}>
                <h5 className="text-center calcContents" style={{ color: "#0051ff" }}>
                  Tax Savings Calculator
                </h5>
              </Link>
              <p className="text-center calcContents">Determine the estimated tax savings with a new loan..</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Calculator;
