import React from "react";
import { Button, Container } from "react-bootstrap";
import taxCost from "../img/taxCost.jpg";

function taxcost() {
  return (
    <div>
      <div>
        <Container fluid>
          <div
            className="color mx-2 mt-5"
            style={{
              backgroundImage: `url(${taxCost})`,
            }}
          >
            <div className="overlay-effect">
              <h1 className="name">Tax Closing Costs</h1>
            </div>
          </div>
        </Container>
        <Container fluid style={{ width: "90%" }}>
          <h3 className=" mt-5 headline">Property Taxes</h3>
          <p className="para ml-5 ">
            This is the one closing cost that is often prorated between the buyer and seller. If the seller has already
            paid the annual property taxes, the buyer typically reimburses the seller for the period in which the buyer
            will be occupying the property. Likewise, if the taxes have not yet been paid, the seller typically
            reimburses the buyer for the period in which the seller occupied the property.
          </p>
          <h3 className=" ml-5 headline">Transfer Taxes and Recording Fees</h3>
          <p className="para ml-5">
            This is the cost for transferring ownership of the property and recording the purchase documents. The fee is
            often calculated as a percentage of the sales price.
          </p>
          <p className="pt-3 mb-5 headline">
            <b>
              Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> . We answer
              questions about the loan process every day.
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
    </div>
  );
}

export default taxcost;
