import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import downpayment from "../img/house.jpg";
function Downpayment() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Container fluid>
          <div
            className="color mt-5 mx-2"
            style={{
              backgroundImage: `url(${downpayment})`,
            }}
          >
            <div className="overlay-effect">
              <h1 className="name">Your Down Payment</h1>
            </div>
          </div>
        </Container>
        <Container style={{ width: "90%" }}>
          <h2 className="heading1 headline mt-5">Putting Together Your Down Payment</h2>
          <p className="para">
            Lots of borrowers can easily qualify for several different kinds of mortgages, but they don't have a lot of
            money to put up a down payment. Here are a few ideas:
          </p>
          <p className="para">
            <b className="headline">Tighten your belt and save</b>. Scrutinize your budget to uncover extra money to go
            toward your down payment. You also might enroll in an automatic savings plan to have a portion of your pay
            automatically transferred into savings. Some practical methods to put together funds include moving into
            less expensive housing, and staying home for your family vacation for a year or two.
          </p>
          <p className="para">
            <b className="headline">Work more and sell things you don't need</b>. Look for a second job. This can be
            rough, but the temporary difficulty can help you get your down payment. In addition, you can put together a
            comprehensive inventory of things you can sell. Broken gold jewelry can be sold at local jewelers. A
            closetful of small things could add up to a nice sum at a garage or tag sale. You might also look into what
            your investments will bring if sold.
          </p>
          <p className="para">
            <b className="headline">Borrow from retirement funds</b>. Check the provisions of your particular plan. You
            may pull out money from a 401(k) for a down payment or withdraw from an Individual Retirement Account. Be
            sure to ask your plan representative about the tax consequences, repayment terms, and any early withdrawal
            penalties.
          </p>
          <p className="para">
            <b className="headline">Ask for assistance from generous family members</b>. First-time buyers are sometimes
            lucky enough to receive down payment assistance from gracious family members who are prepared to help them
            get into their own home. Your family members may be pleased to help you reach the goal of owning your first
            home.
          </p>
          <p className="para">
            <b className="headline">Contact housing finance agencies</b>. Provisional mortgage loans are offered to
            homebuyers in specific circumstances, such as low income buyers or homebuyers looking to renovating homes in
            a certain place, among others. With the help of a housing finance agency, you may be given an interest rate
            that is below market, down payment help and other incentives. These kinds of agencies can assist eligible
            homebuyers with a reduced interest rate, help with your down payment, and provide other advantages. The main
            goal of not-for-profit housing finance agencies is to promote residence ownership in certain parts of the
            city.
          </p>
          {/* <p className="para">
            <b className="headline">Research no-down and low-down mortgage loan programs.</b>
          </p> */}
          <b>
            <h2 className="headline">Research no-down and low-down mortgage loan programs.</h2>
          </b>
          <ul className="list">
            <li>
              <h4 className="headline">Federal Housing Administration (FHA) mortgage loans</h4> <br />
              The Federal Housing Administration (FHA), a part of the U.S. Department of Housing and Urban Development
              (HUD), plays a critical role in assisting low to moderate-income families qualify for mortgage loans. An
              office of the U.S. Department of Housing and Urban Development(HUD), FHA (Federal Housing Administration)
              aids homebuyers who wish to get mortgages. FHA assists first-time homebuyers and others who may not be
              eligible for a traditional mortgage loan by themselves, by providing mortgage insurance to lenders. Down
              payment sums for FHA mortgages are smaller than those for traditional mortgage loans, even though these
              loans have current interest rates. The required down payment may go as low as 3 percent while the closing
              costs may be covered by the mortgage.
            </li>
            <li>
              <h4 className="headline">VA mortgage loans</h4>
              <br />
              With a guarantee from the Department of Veterans Affairs, a VA loan is offered to service people and
              veterans. This specialized loan does not require a down payment, has limited closing costs, and provides
              the benefit of a competitive interest rate. Even though the mortgages aren't actually issued by the VA,
              the department certifies borrowers by issuing eligibility certificates.
            </li>
            <li>
              <h4 className="headline">Piggy-back loans</h4>
              <br />A piggy-back loan is a second mortgage that closes along with the first. Usually the first mortgage
              covers 80% of the cost of the home and the "piggyback" funds 10%. Rather than the traditional 20 percent
              down payment, the homebuyer will just have to cover the remaining 10 percent.
            </li>
            <li>
              <h4 className="headline">Carry-Back loans</h4>
              <br />
              In a "carry back" situation, the seller commits to loan you part of his home equity to assist you with
              your down payment funds. You would finance the majority of the purchase price with a traditional mortgage
              lender and borrow the remaining amount from the seller. Usually this form of second mortgage will have
              higher interest.
            </li>
          </ul>
          <p className="para">
            The feeling of accomplishment will be the same, no matter which method you use to put together your down
            payment. Your brand new home will be your reward!
          </p>
          <p className="pt-3">
            Have questions about the loan process? Call Vijay at{" "}
            <a className="contact" href="309-750-1082">
              309-750-1082
            </a>
            . We answer questions about the loan process every day.
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

export default Downpayment;
