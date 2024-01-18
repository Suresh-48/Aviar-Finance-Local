import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../css/loanprocess.scss";
import loanprocess from "../img/loanprocess.jpg";
function Loanprocess() {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid>
        <div
          className="color mx-2 mt-5"
          style={{
            backgroundImage: `url(${loanprocess})`,
          }}
        >
          <div className="overlay-effect">
            <h1 className="name">The Loan Process</h1>
          </div>
        </div>
      </Container>
      <Container fluid style={{ width: "90%" }}>
        <h1 className="heading mt-5 mb-3 headline">The Loan Process: an Overview</h1>
        <div>
          <p className="para">
            There is no doubt ; getting a mortgage loan is a complicated process. You wouldn't be visiting our website
            if you could fill out a simple application and get the best loan funded the same day. We do the heavy
            lifting for you, so you can concentrate on what's important — preparing to move into your new home or saving
            money.
            <br />
            Getting a mortgage loan involves four major steps.
          </p>
        </div>
        {/* Broker vs laon office */}
        <h3 className="head headline">Step one: determine how much you can borrow</h3>
        <p className="para">
          A couple of factors determine this amount. What kind of monthly payment are you looking for? And given your
          unique credit and employment history, income and debt, and goals, how much will a lender loan you? You can get
          a good idea of your preferred payment abount using the calculators on our website. We'll also help you through
          different scenarios by asking a few simple questions. Because lender guidelines are fairly standard, we can
          give you a good idea of how much you can borrow after a short conversation.
        </p>
        <h3 className="head headline">Step two: pre-qualify for your loan</h3>
        <p className="para">
          This is where Aviar Financial Services can begin saving you money. You will give us information on your
          employment, assets, and your residence history. You'll provide information on your employment, asset, and
          residence history. We will get your credit report and score (with your permission. After we have reviewed all
          this info we give you a letter of pre-qualification. Your REALTOR® should use the pre-qual (as they may call
          it) in order to make the best offer on the home you choose. The pre-qual letter gives you buying clout! While
          you're picking out the home that's right for you, we're busy researching the loan program that's right for
          your situation.
        </p>
        <h3 className="head headline">
          Step three: <span className="text-primary">apply now!</span> We make it easy
        </h3>
        <p className="para">
          Once you've made an offer and it's been accepted, it's time to apply for the loan. It's very easy, and you can{" "}
          <span className="text-primary">apply online</span>, right here on our website. After the offer has been
          accepted and you have submitted your loan application, we'll order the professional appraisal on the home.
        </p>
        <h3 className="head headline">Step four: funding</h3>
        <p className="para">
          The agents will find an escrow/title company to handle the "funding" of the loan and closing. We'll coordinate
          with this company to make sure the papers your lender needs are in order, and you will probably likely sign
          all these papers at their officeWe do all the work to coordinate with this company on your date to close.
          Because you don't have to worry with this coordination, you can think about the move, painting, new carpet,
          and the details involved in getting a new home.
        </p>
        <p className="para ">
          You've answered some few questions, provided lots of information, applied online, and before you know it,
          you're deciding when to move in! We take care of the mortgage legwork so you can spend your time finding your
          new home.
        </p>
        <p className="mt-5 mb-5">
          <b>
            Have questions about the loan process? Call Vijay at <a href="309-750-1082">309-750-1082</a>. We answer
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
  );
}

export default Loanprocess;
