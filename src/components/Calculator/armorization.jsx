import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Armorization() {
  const [showAmortizationTable, setshowAmortizationTable] = useState("");
  const [fixedRate, setFixedRate] = useState(true);
  const [adjustableRate, setAdjustableRate] = useState(false);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [finalValue, setFinalValue] = useState();
  const [loanTerms, setLoanTerms] = useState();
  const [periodicRange, setPeriodicRange] = useState(0);
  const [lifeRange, setLifeRange] = useState(0);
  const [presentRange, setPresentRange] = useState(0);
  const [rateRange, setRateRange] = useState(0);

  // const loginPageStyle = {
  //   margin: "32px",
  //   maxWidth: "530px",
  //   background: "#fff",
  //   padding: "30px",
  //   borderRadius: "10px",
  // };
  const validationSchema = Yup.object().shape({
    // volume: Yup.string().required("required"),
    // interestRate: Yup.string().required("required"),
    // loanTerm: Yup.string().required("required"),
  });
  const submitForm = (values) => {
    // const loanAmount = loanAmount;
    // const loanTerm = values.loanTerm.value;
    const interestRates = interestRate / 100;
    const perMonthInterest = interestRates / 12;
    const loanValue = loanAmount * perMonthInterest;
    const a = 1 + perMonthInterest;
    const b = -12 * loanTerms;
    const c = a ** b;
    const d = 1 - c;
    const e = loanValue / d;
    setFinalValue(e);
  };

  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5 mx-2"
          style={{
            backgroundImage: `url(${refinance})`,
          }}
        >
          <div className="overlay-text-text">
            <div className="page-name">
              <h1>PAYMENT AMORTIZATION CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Payment/Amortization Calculator</h5>
              <p>Calculate your monthly payment for fixed rate or adjustable rate loans.</p>
              <Card
                className="p-md-3 p-sm-2 p-lg-3 p-xs-2"
                // className="pe-5 pt-5 ps-3 me-3 w-75 Calculator-color"
                style={{ backgroundColor: "#f7f7f7" }}
              >
                <Formik
                  initialValues={{
                    loanAmount: "",
                    interestRate: "",
                    loanTerm: "",
                    loanType: "",
                    showAmortizationTable: "",
                    fixedRate: fixedRate,
                    adjustableRate: adjustableRate,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { values, handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            min="0"
                            max="1000000"
                            name="loanAmount"
                            value={loanAmount}
                            onChange={(e) => {
                              setLoanAmount(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={loanAmount}
                            onChange={(e) => {
                              setLoanAmount(e.target.value);
                            }}
                            name="volume"
                            min="0"
                            max="1000000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="volume" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestRate"
                            placeholder="0"
                            value={interestRate}
                            onChange={(e) => {
                              setInterestRate(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={interestRate}
                            onChange={(e) => {
                              setInterestRate(e.target.value);
                            }}
                            name="interestRange"
                            min="0"
                            max="25"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="interestRate" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Loan Term</Form.Label>
                          <Select
                            name="loanTerms"
                            value={loanTerms?.value}
                            options={[
                              { value: "30", label: "30" },
                              { value: "20", label: "20" },
                              { value: "15", label: "15" },
                              { value: "10", label: "10" },
                            ]}
                            onChange={(e) => {
                              setFieldValue("loanTerms", e);
                              setLoanTerms(e.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <ErrorMessage className="error text-danger" component="span" name="loanTerm" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Loan Type</Form.Label>
                          <Form.Check
                            type="radio"
                            label=" Fixed Rate"
                            name="fixedRate"
                            checked={fixedRate}
                            onClick={() => {
                              setFixedRate(!fixedRate);
                              setAdjustableRate(!adjustableRate);
                            }}
                          />
                          <Form.Check
                            type="radio"
                            label=" Adjustable Rate"
                            name="adjustableRate"
                            checked={adjustableRate}
                            onClick={() => {
                              setAdjustableRate(!adjustableRate);
                              setFixedRate(!fixedRate);
                            }}
                          />
                        </Form.Group>

                        {adjustableRate === true ? (
                          <>
                            <Form.Group>
                              <Form.Label>Max Periodic Rate Increase</Form.Label>
                              <Form.Control
                                type="number"
                                name="maxPeriodicRateIncrease"
                                placeholder="0"
                                value={periodicRange}
                                onChange={(e) => {
                                  setPeriodicRange(e.target.value);
                                }}
                                onBlur={handleBlur}
                              />
                              <input
                                className="w-100"
                                type="range"
                                value={periodicRange}
                                onChange={(e) => {
                                  setPeriodicRange(e.target.value);
                                }}
                                name="periodicRange"
                                min="0"
                                max="1000000"
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="maxPeriodicRateIncrease"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Max Lifetime Rate Increase</Form.Label>
                              <Form.Control
                                type="number"
                                name="maxPeriodicRateIncrease"
                                value={lifeRange}
                                placeholder="0"
                                onChange={(e) => {
                                  setLifeRange(e.target.value);
                                }}
                                onBlur={handleBlur}
                              />
                              <input
                                className="w-100"
                                type="range"
                                id="volume"
                                value={lifeRange}
                                onChange={(e) => {
                                  setLifeRange(e.target.value);
                                }}
                                name="volume"
                                min="0"
                                max="25"
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="maxPeriodicRateIncrease"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Present Rate Changes After</Form.Label>
                              <Form.Control
                                type="number"
                                name="presentRateChangesAfter"
                                placeholder="Months"
                                value={presentRange}
                                onChange={(e) => {
                                  setPresentRange(e.target.value);
                                }}
                                onBlur={handleBlur}
                              />
                              <input
                                className="w-100"
                                type="range"
                                id="volume"
                                value={presentRange}
                                onChange={(e) => {
                                  setPresentRange(e.target.value);
                                }}
                                name="presentRange"
                                min="0"
                                max="25"
                              />
                              <ErrorMessage
                                className="error text-danger"
                                component="span"
                                name="presentRateChangesAfter"
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Rate Can Change Every</Form.Label>
                              <Form.Control
                                type="number"
                                name="rateCanChangeEvery"
                                value={rateRange}
                                placeholder="Months"
                                onChange={(e) => {
                                  setRateRange(e.target.value);
                                }}
                                onBlur={handleBlur}
                              />
                              <input
                                className="w-100"
                                type="range"
                                id="volume"
                                value={rateRange}
                                onChange={(e) => {
                                  setRateRange(e.target.value);
                                }}
                                name="rateRange"
                                min="0"
                                max="25"
                              />
                              <ErrorMessage className="error text-danger" component="span" name="rateCanChangeEvery" />
                            </Form.Group>
                          </>
                        ) : (
                          ""
                        )}
                        <Form.Group>
                          <Form.Label>Show Amortization Table</Form.Label>
                          <Select
                            type="text"
                            name="showAmortizationTable"
                            value={showAmortizationTable?.value}
                            options={[
                              { value: "No", label: "No" },
                              { value: "Monthly", label: "Monthly" },
                              { value: "Yerly", label: "Yerly" },
                            ]}
                            onChange={(e) => {
                              setFieldValue("showAmortizationTable", e);
                              setshowAmortizationTable(e.value);
                            }}
                            onBlur={handleBlur}
                          />
                        </Form.Group>
                        {showAmortizationTable === "Monthly" || showAmortizationTable === "Yerly" ? (
                          <Form.Group>
                            <Form.Label>Beginning Month & Year</Form.Label>

                            <Form.Control type="text" placeholder="mm/yyyy" name="monthAndYear" />
                          </Form.Group>
                        ) : (
                          ""
                        )}
                        <Form.Group className="mt-3">
                          <Button type="submit" className="button_1 mt-2" disabled={!isValid}>
                            Calculate
                          </Button>
                        </Form.Group>

                        <p className="instruction mt-3 mb-5">
                          Default amounts are hypothetical and may not apply to your individual situation. This
                          calculator provides approximations for informational purposes only. Actual results will be
                          provided by your lender and will likely vary depending on your eligibility and current market
                          rates.
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
              </Card>
            </Col>

            <Col className="results-padding">
              <Row>
                <Col className=" d-flex justify-content-between">
                  <b className="mt-2 mb-5">Results</b>
                  <text>Print</text>
                </Col>
                <hr className="my-2" />
                <div className="mt-5">
                  <h6 className="calculator-heading">Monthly Payment</h6>
                  <h3>${finalValue?.toFixed(2)}</h3>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}

export default Armorization;

// import React from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Calculator from "./calculator";

// function armorization() {
//   const loginPageStyle = {
//     margin: "32px",
//     maxWidth: "530px",
//     background: "#fff",
//     padding: "30px",

//     borderRadius: "10px",
//     // boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"
//   };
//   return (
//     <div>
//       <Container fluid>
//         <div
//           className="color mt-5"
//           style={{
//             backgroundImage: `url("https://asset-service-bucket-prod.s3.amazonaws.com/f0544e8f-5a69-480f-b1de-156918163c82")`,
//           }}
//         >
//           <div className="overlay-text-text">
//             {" "}
//             <div className="page-name">
//               <h2>PAYMENT AMORTIZATION CALCULATOR</h2>
//             </div>
//           </div>
//         </div>
//         {/* <Row style={loginPageStyle}>
//             <Col>
//             <Form class>
//         <h5>Payment/Amortization Calculator</h5>
//         <p>Calculate your monthly payment for fixed rate or adjustable rate loans.</p>
//         <Form.Group>
//           <Form.Label>User Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter username" id="username" name="username" />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" id="password" name="password" placeholder="Password" />
//         </Form.Group>
//         <div class="custom-control custom-checkbox mt-3">
//         <Form.Check

//         type="checkbox"
//         label= "Remember me"
//       />

//   </div>
//         <Form.Group className='mt-3'>
//           <Button className='button_1'>Log In</Button>
//         </Form.Group>

//       <p>Forgot your username or password?</p>
//       <br/>
//       <p>Don't have an account? Create Account.</p>

//       </Form>

//             </Col>
//         </Row> */}
//       </Container>
//     </div>
//   );
// }

// export default armorization;
