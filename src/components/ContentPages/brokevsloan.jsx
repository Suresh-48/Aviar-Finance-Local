import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import broker from "../img/discussion.jpg";
function Brokevsloan() {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid>
        <Row>
          <div
            className="color mt-5 mx-2"
            style={{
              backgroundImage: `url(${broker})`,
            }}
          >
            <div className="overlay-effect">
              <h1 className="name">Mortgage Broker vs. Loan Officer</h1>
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h3 className="heading mt-5 mb-3 headline">Mortgage Broker or Loan Officer?</h3>
        <p className="para">
          Either a mortgage broker or a loan officer can assist you when you apply for a mortgage loan. It's common to
          confuse them as both will glean the same result: a new home. But as you begin the application process, it will
          help if you recognize the ways they differ.
        </p>
        <h3 className="head headline">About Mortgage Brokers</h3>
        <p className="para">
          A mortgage broker is a person or company that serves as an independent agent for both the mortgage loan
          borrower and the lender. Acting as a facilitator between you and your lender, your mortgage broker can match
          you with a bank, trust company, credit union, mortgage corporation, finance company or even an individual,
          private investor. You partner with a mortgage broker to examine your financial circumstance and find the
          lender who has the best mortgage loan for you. You give your mortgage application to your broker, who submits
          it to various lenders. Your mortgage broker then assists your work with the lender chosen until closing. At
          closing, the broker's commission is paid by either the lender or borrower, your choice.
        </p>
        <h3 className="head headline">What is a Loan Officer?</h3>
        <p className="para">
          The biggest difference between a mortgage broker and a loan officer is that the latter works for a lending
          institution (a bank, credit union, or others) to process loans only originated from that institution. They may
          have the ability to offer loans to fit many different situations, but all the loans will be programs of the
          same lender
        </p>
        <p className="para">
          A loan officer (also called an "account executive" or "loan representative") acts on behalf of the borrower to
          the lender. A loan officer will guide the borrower through the application, processing and closing of the
          loan. Lenders compensate their loan officers with a commission or salary.
        </p>
        <p className="pt-3 text-center">
          Have questions about the loan process? Call Vijay at{" "}
          <a className="contact" href="309-750-1082">
            309-750-1082
          </a>
          . We answer questions about the loan process every day.
        </p>
        <div className="homepage-button mt-5 mb-5">
          <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
            Apply Now
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Brokevsloan;
