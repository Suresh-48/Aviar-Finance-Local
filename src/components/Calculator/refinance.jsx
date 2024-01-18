import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Refinance() {
  const [monthlyRange, setMonthlyRange] = useState(0);
  const [loanRange, setLoanRange] = useState(0);
  const [interestRange, setInterestRange] = useState(0);
  const [closingRange, setClosingRange] = useState(0);
  const [loanTerms, setLoanTerms] = useState();
  const validationSchema = Yup.object().shape({
    currentMonthlyPayment: Yup.string().required("required"),
    newLoanAmount: Yup.string().required("required"),
    loanTerm: Yup.string().required("required"),
    newinterestRate: Yup.string().required("required"),
    closingCosts: Yup.string().required("required"),
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
            {" "}
            <div className="page-name">
              <h1>REFINANCE BREAK-EVEN POINT CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">
                Refinance Break-Even Point
                <br /> Calculator
              </h5>
              <p>Calculate the number of months to break-even if you refinance the loan.</p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    currentMonthlyPayment: "",
                    newLoanAmount: "",
                    newinterestRate: "",
                    loanTerm: "",
                    closingCosts: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Current Monthly Payment</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            value={monthlyRange}
                            name="currentMonthlyPayment"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={monthlyRange}
                            onChange={(e) => {
                              setMonthlyRange(e.target.value);
                            }}
                            name="monthlyRange"
                            min="0"
                            max="1000000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="currentMonthlyPayment" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>New Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            name="newLoanAmount"
                            placeholder="0"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={loanRange}
                            onChange={(e) => {
                              setLoanRange(e.target.value);
                            }}
                            name="loanRange"
                            min="0"
                            max="1000000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="newLoanAmount" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>New Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="newinterestRate"
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
                          <ErrorMessage className="error text-danger" component="span" name="newinterestRate" />
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
                          <Form.Label>Closing Costs</Form.Label>
                          <Form.Control
                            type="number"
                            name="closingCosts"
                            value={closingRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={closingRange}
                            onChange={(e) => {
                              setClosingRange(e.target.value);
                            }}
                            name="closingRange"
                            min="0"
                            max="30"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="closingCosts" />
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
                  <h5 className="mt-2 mb-5">Results</h5>
                  <text>Print</text>
                </Col>
                <hr className="my-2" />
                <div className="mt-5">
                  <h6 className="calculator-heading">New Monthly Payment</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-3">
                  <h6 className="calculator-heading">Monthly Savings</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-3">
                  <h6 className="calculator-heading">Number of months to break even</h6>
                  <p>0</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Refinance;
