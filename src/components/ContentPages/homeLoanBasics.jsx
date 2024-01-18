import React from "react";
import HomeLoan from "../../Image/homeloan.jpg";
import "../../css/Homepage.scss";
import RealEstate from "../../Image/agent.png";
import { Button, Col, Container, Row } from "react-bootstrap";
export default function homeLoanBasics() {
  return (
    <>
      <div
        className="color mx-2"
        style={{
          backgroundImage: `url(${HomeLoan})`,
        }}
      >
        <div className="overlay-effect">
          <h1 className="name ms-4 ">Home Purchase Loan</h1>
        </div>
      </div>
      <Container>
        <h3 className="mt-4 h3-color">Home Purchase Basics</h3>
        <p>
          Congratulations on your decision to buy a new home! There are many important things to consider throughout the
          process, especially if you're a first-time homebuyer. Here's some information that will keep you on track.
        </p>
        <strong>In General....</strong>
        <p className="mt-1">
          A home purchase may be your largest financial transaction to date, so it's important to make the right
          decisions and to keep an eye on the details. With the assistance of your Real Estate Agent and Loan Officer,
          it should be an efficient, pleasant, and ultimately rewarding experience.
        </p>
        <section>
          <h3 className="mt-4 h3-color mb-3">Count On Your Real Estate Agent To :</h3>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <ol>
                <p>
                  1. Preview available homes to weed out those that are overpriced, or undesirable in some other way.
                </p>
                <p>2. Present the homes that suit your needs as you've defined them.</p>
                <p>
                  3. Help you determine the difference between a "good buy" and a property which, because of its nature
                  (neighborhood, market appeal, etc.), might have to be discounted if you decide to sell in the future.
                </p>
                <p>
                  4. Negotiate the best deal for you. With a Pre-Qualification letter from us in hand, your Real Estate
                  Agent will be able to demonstrate that you are a qualified and capable borrower. This will strongly
                  influence the Seller, and may make the difference between the Seller accepting your offer or someone
                  else's -- even if your offer is lower!
                </p>
              </ol>
            </Col>
            <Col className="d-flex alignment-itens-center justify-content-center" sm={12} md={5} lg={5}>
              <img src={RealEstate} className="w-100 border-info rounded" />
            </Col>
          </Row>
        </section>
        <section>
          <h3 className="mt-4 h3-color mb-3">Count On Your Mortgage Broker and Loan Officer To :</h3>
          <Row>
            <Col sm={12} md={5} lg={5} className="d-flex justify-content-center align-items-center">
              <img src={require("../../Image/officer.jpg")} className="w-100" />
            </Col>
            <Col sm={12} md={7} lg={7}>
              <ol className="mt-3">
                <p>
                  1. Assist you in selecting the best loan to meet your personal situation and goals. (This single
                  decision can save you thousands of dollars throughout the years!)
                </p>
                <p>2. Keep you informed of your loan status throughout the entire process.</p>
                <p>
                  3. Keep your Real Estate Agent informed of our loan progress (Note: your personal information is
                  always kept confidential between you and us; only deal points and progress are shared).
                </p>
                <p>
                  4. Get the appropriate loan for you at the best rates and fees. This will save you significant money
                  "up front" and throughout the years to come.
                </p>
              </ol>
            </Col>
          </Row>
        </section>
        <section>
          <h3 className=" h3-color mb-3">Count On Yourself To :</h3>
          <Row>
            <Col sm={12} md={7} lg={7}>
              <ol>
                <p>1. Keep your Real Estate Agent informed of any questions or concerns as they develop.</p>
                <p>
                  2. Keep the process moving by providing documentation and decisions as soon as reasonably possible. By
                  doing so, many of the details are taken care of early in the process so you can comfortably
                  concentrate on any last-minute details or events that require your attention.
                </p>
                <p>
                  3. Enjoy purchasing your home, but do remain objective throughout -- to make the business decisions
                  that are best for you.
                </p>
                <p>
                  4. Make sure you are pre-approved as early as possible. This will put the power of financing behind
                  you so you can concentrate on selecting your home.
                </p>
              </ol>
            </Col>
            <Col sm={12} md={5} lg={5} className="d-flex justify-content-center align-items-center">
              <img src={require("../../Image/findself.jpg")} className="w-100" />
            </Col>
          </Row>
          <div className="homepage-button mt-5 mb-5">
            <Button className="px-4 py-2 homepage-btn" onClick={() => window.open("https://aviarfs.my1003app.com/")}>
              {" "}
              Apply Now
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}
