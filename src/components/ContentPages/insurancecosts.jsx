import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import loancost from "../img/taxCost.jpg";

function Insurancecosts() {
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
          <div className="overlay-effect ">
            <h1 style={{ color: "whitesmoke" }} className="name">
              Homeowners Insurance
            </h1>
          </div>
        </div>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h3 className="headline head  mt-4">Homeowner's Insurance</h3>
        <p className="para">
          This insurance covers replacement costs for damages caused by fire, wind or other disaster that might affect
          the value of the property. Typically, the insurance also includes personal liability and theft coverage.
        </p>
        <h3 className="headline para">Flood or Quake Insurance</h3>
        <p className="para">
          Additional hazard insurance coverage that is required for homes located in a designated hazard zone as
          established by the Federal Emergency Management Agency (FEMA). As we tour houses, I will let you know if the
          property resides in a hazard zone.
        </p>
        <h3 className="headline head">Private Mortgage Insurance (PMI)</h3>
        <p className="para">
          Insurance required for conventional mortgage loans when the borrower's down payment on the house is less than
          20 percent of the loan value.
        </p>
        <h3 className="headline head">Title Insurance</h3>
        <p className="para">
          This policy protects both the buyer and lender by insuring a clear chain of title. (In other words, it insures
          that that the person who sells the house has the legal right to do so.)
        </p>
        <p className="mb-5 mt-5">
          <b>
            Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a> We answer
            questions about the loan process every day.
          </b>
        </p>
      </Container>
      <div className="homepage-button mt-5 mb-5">
        <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
          Apply Now
        </Button>
      </div>
    </>
  );
}

export default Insurancecosts;
