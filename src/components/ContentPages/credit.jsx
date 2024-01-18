import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import credit from "../../Image/credit.jpg";
// import "../css/credit.css"

function Credit() {
  const navigate = useNavigate();

  return (
    <div>
      <Container fluid>
        <Row>
          <div
            className="color mt-5 mx-2"
            style={{
              backgroundImage: `url(${credit})`,
            }}
          >
            <div className="overlay-effect">
              <h1 className="name">Credit Scorings gg</h1>
            </div>
          </div>
        </Row>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h3 className="heading mt-5 mb-3 headline">What is a credit score?</h3>
        <p className="para">
          Before deciding on what terms they will offer you a loan (which they base on their risk), lenders want to
          discover two things about you: your ability to pay back the loan, and{" "}
          <b>if you are willing to pay it back.</b> To assess your ability to repay, they assess your{" "}
          <a className="contact" href="">
            debt-to-income ratio
          </a>{" "}
          . To assess how willing you are to repay, they use your credit score.{" "}
        </p>
        <p className="para">
          The most widely used credit scores are called FICO scores, which were developed by Fair Isaac & Company, Inc.
          Your FICO score ranges from 350 (very high risk) to 850 (low risk). For details on FICO,{" "}
          <a href="read more here">read more here</a>.
        </p>
        <p className="para">
          Credit scores only assess the info in your credit reports. They don't consider income or personal
          characteristics. Fair Isaac invented FICO specifically to exclude demographic factors like these. Credit
          scoring was invented as a way to consider only that which was relevant to a borrower's willingness to pay back
          a loan.
        </p>
        <p className="para">
          Deliquencies, payment behavior, current debt level, length of credit history, types of credit and the number
          of inquiries are all considered in credit scoring. Your score reflects the good and the bad in your credit
          history. Late payments will lower your credit score, but consistently making future payments on time will
          improve your score.
        </p>
        <p className="para">
          Your report should have at least one account which has been open for six months or more, and at least one
          account that has been updated in the past six months for you to get a credit score. This payment history
          ensures that there is enough information in your report to calculate an accurate score. Should you not meet
          the criteria for getting a score, you may need to establish a credit history before you apply for a mortgage
          loan.
        </p>
        <p className="mt-5 mb-5">
          <b>
            Have questions about the loan process? Call Vijay at{" "}
            <a className="contact" href="309-750-1082">
              309-750-1082
            </a>
            . We answer questions about the loan process every day.
          </b>
        </p>
        <div className="homepage-button mt-5 mb-5">
          <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
            {" "}
            Apply Now
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Credit;
