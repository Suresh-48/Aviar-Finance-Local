import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.scss";
function ContactUs() {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid>
        <div
          className="color mx-2 mt-5"
          style={{
            backgroundImage: `url("	https://asset-service-bucket-prod.s3.us-west-2.amazonaws.com/b3294070-4057-49ae-a463-66c62ddce0e8")`,

            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundColor: "rgba(0, 86, 184, 0.75)",
          }}
        >
          <div className="overlay-effect">
            <h1 className="name">CONTACT US</h1>
          </div>
        </div>
        <Container className="mt-5" fluid style={{ width: "90%" }}>
          <h3 style={{ color: "#2D90F9" }} className="mt-5">
            More information? Call/Text or email!
          </h3>
          <h4 className="mt-3" style={{ color: "#2D90F9" }}>
            Vijay Govindarajan
          </h4>
          <p>Branch Manager</p>
          <a href="Email: Vijay@teamusamtg.com">Email:vijay@aviartechservices.com</a>
          <p>Cell: 309-750-1082</p>
          <div className="homepage-button mt-5 mb-5">
            <Button
              className="px-4 py-2 homepage-btn"
              //  onClick={() => navigate("/forms/application")}
              onClick={() => window.open("https://aviarfs.my1003app.com/")}
            >
              Apply Now
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default ContactUs;
