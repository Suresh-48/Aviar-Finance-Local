import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loancost from "../img/taxCost.jpg";

function Loancost() {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid>
        <div
          className="color mx-2 mt-5"
          style={{
            backgroundImage: `url(${loancost})`,
          }}
        >
          <div className="overlay-effect">
            <h1 className="name">Loan Related Closing Costs</h1>
          </div>
        </div>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h4 className="headline mt-4">Loan Origination Fees</h4>
        <p className="para">
          This covers the administrative expenses in setting-up and processing the loan. The loan origination fee may be
          a percentage of the mortgage amount.
        </p>
        <h4 className="headline">Points (optional)</h4>
        <p className="para">
          An option for the home buyer is to pay points to lower the interest rate at which the loan will be repaid.
          Each point equals 1 percent of the mortgage amount. For example: on a $150,000 loan, 1 point would equal
          $1,500
        </p>
        <h4 className="headline">Appraisal Fee</h4>
        <p className="para">
          The fee for having the house appraised may be incorporated into the closing costs or payment may be required
          by the lender at the time the loan application is submitted.
        </p>
        <h4 className="headline">Credit Report</h4>
        <p className="para">
          The lender uses a credit report to determine the creditworthiness of the loan applicant. This fee is often
          paid when the loan application is submitted.
        </p>
        <h4 className="headline">Interest Payment</h4>
        <p className="para">
          Typically the buyer is required to pay interest on the mortgage loan to cover the time between the closing
          date and when the first mortgage payment period begins. For example: If closing is on May 15. Your first
          monthly payment begins to accrue interest on June 1 with your first mortgage payment due July 1. At closing an
          interest payment covering the accrual period between May 15 and May 31 may be required.
        </p>
        <h4 className="headline">Escrow Account</h4>
        <p className="para">
          At closing a payment may be required to fund the escrow account if the lender is paying home insurance,
          property taxes and/or other expenses out of the escrow account.
        </p>
        <p className="mb-5">
          <b>
            Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> . We answer
            questions about the loan process every day.
          </b>
        </p>
        <div className="homepage-button mt-5 mb-5">
          <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
            Apply Now
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Loancost;
