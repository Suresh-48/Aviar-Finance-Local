import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Earlypayoff() {
  const [loanAmountRange, setLoanAmountRange] = useState(0);
  const [interestRange, setInterestRange] = useState(0);
  const [alreadyPaidRange, setAlreadyPaidRange] = useState(0);
  const [payOffRange, setPayOffRange] = useState(0);
  const [loanTerms, setLoanTerms] = useState();
  const validationSchema = Yup.object().shape({
    originalloanAmount: Yup.string().required("required"),
    originalInterestRate: Yup.string().required("required"),
    originalLoanTerm: Yup.string().required("required"),
    monthsAlreadyPaid: Yup.string().required("required"),
    requestedYearstoPayoff: Yup.string().required("required"),
  });
  const submitForm = (values) => {
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
              <h1>EARLY PAYOFF CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Early Payoff Calculator</h5>
              <p>Find the additional payment required to pay off your loan early.</p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    originalloanAmount: "",
                    originalInterestRate: "",
                    originalLoanTerm: "",
                    monthsAlreadyPaid: "",
                    requestedYearstoPayoff: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Original Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            value={loanAmountRange}
                            name="originalloanAmount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={loanAmountRange}
                            onChange={(e) => {
                              setLoanAmountRange(e.target.value);
                            }}
                            name="loanAmountRange"
                            min="0"
                            max="1000000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="originalloanAmount" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Original Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="originalInterestRate"
                            value={interestRange}
                            placeholder="0"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={interestRange}
                            onChange={(e) => {
                              setInterestRange(e.target.value);
                            }}
                            name="interestRange"
                            min="0"
                            max="30"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="originalInterestRate" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Original Loan Term</Form.Label>
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
                          <Form.Label>Months Already Paid</Form.Label>
                          <Form.Control
                            type="number"
                            name="monthsAlreadyPaid"
                            placeholder="Months"
                            value={alreadyPaidRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={alreadyPaidRange}
                            onChange={(e) => {
                              setAlreadyPaidRange(e.target.value);
                            }}
                            name="AlreadyPaidRange"
                            min="0"
                            max="1000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="monthsAlreadyPaid" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Requested Years to Payoff</Form.Label>
                          <Form.Control
                            type="number"
                            name="requestedYearstoPayoff"
                            value={payOffRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={payOffRange}
                            onChange={(e) => {
                              setPayOffRange(e.target.value);
                            }}
                            name="payOffRange"
                            min="0"
                            max="1000000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="requestedYearstoPayoff" />
                        </Form.Group>

                        <Form.Group className="mt-3">
                          <Button className="button_1" type="submit">
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
                  <h6 className="calculator-heading">Current Monthly Payment</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-5">
                  <h6 className="calculator-heading">Early Payoff Monthly Payment</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-5">
                  <h6 className="calculator-heading">Additional Monthly Payment</h6>
                  <p>$0.00</p>
                </div>
              </Row>
            </Col>
            {/* <Col className="d-flex justify-content-end mt-5">
            <p className=" calculator-heading me-2">Print</p>
          </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Earlypayoff;
