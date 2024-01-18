import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Card from "react-bootstrap/Card";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Debtconsolidation() {
  const [balanceRange, setBalanceRange] = useState(0);
  const [monthlyRange, setMonthlyrange] = useState(0);
  const [loanTerms, setLoanTerms] = useState();
  const [newInterestRateRange, setNewInterestRateRange] = useState(0);
  const [estimatedRange, setEstimatedRange] = useState(0);
  const [interestRateRange, setInterestRateRange] = useState(0);
  const validationSchema = Yup.object().shape({
    typeOfCredit: Yup.string().required("required"),
    balance: Yup.string().required("required"),
    monthlyPayment: Yup.string().required("required"),
    interestRate: Yup.string().required("required"),
    newInterestRate: Yup.string().required("required"),
    term: Yup.string().required("required"),
    estimatedClosingCosts: Yup.string().required("required"),
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
              <h2>DEBT CONSOLIDATION CALCULATOR</h2>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Debt Consolidation Calculator</h5>
              <p>
                Calculate the effect of combining other debt with your home mortgage. If you select Credit Card, Auto
                Loan, or Other but leave the interest rate blank, the calculator assumes a rate of 17.5%
              </p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <h6 className="calculator-heading mx-3 mt-3 ">CURRENT DEBT</h6>
                <Formik
                  initialValues={{
                    typeOfCredit: "",
                    balance: "",
                    monthlyPayment: "",
                    interestRate: "",
                    newInterestRate: "",
                    term: "",
                    estimatedClosingCosts: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { values, handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Type of Credit</Form.Label>
                          <Select
                            type="number"
                            name="typeOfCredit"
                            options={[
                              { value: "mortgage", label: "Mortgage" },
                              { value: "creditCard", label: "Credit Card" },
                              { value: "autoLoan", label: "Auto Loan" },
                              { value: "other", label: "Other" },
                            ]}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Balance</Form.Label>
                          <Form.Control
                            type="number"
                            name="balance"
                            placeholder="0"
                            value={balanceRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={balanceRange}
                            onChange={(e) => {
                              setBalanceRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="balance" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Monthly Payment</Form.Label>
                          <Form.Control
                            type="number"
                            name="monthlyPayment"
                            value={monthlyRange}
                            placeholder="Years"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={monthlyRange}
                            onChange={(e) => {
                              setMonthlyrange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="monthlyPayment" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestRate"
                            value={interestRateRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={interestRateRange}
                            onChange={(e) => {
                              setInterestRateRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="25"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="interestRate" />
                        </Form.Group>

                        <Form.Group className="mt-3">
                          <Button className="button_1">Add Debt</Button>
                        </Form.Group>

                        <hr />
                        <h6 className="calculator-heading mx-3 mt-3">NEW LOAN</h6>

                        <Form.Group>
                          <Form.Label>New Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="newInterestRate"
                            placeholder="0"
                            value={newInterestRateRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={newInterestRateRange}
                            onChange={(e) => {
                              setNewInterestRateRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="newInterestRate" />
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
                          <Form.Label>Estimated Closing Costs</Form.Label>
                          <Form.Control
                            type="number"
                            name="estimatedClosingCosts"
                            placeholder="0"
                            value={estimatedRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={estimatedRange}
                            onChange={(e) => {
                              setEstimatedRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="estimatedClosingCosts" />
                        </Form.Group>

                        <Form.Group className="mt-3">
                          <Button className="button_1" type="submit">
                            Calculate
                          </Button>
                        </Form.Group>
                      </Form>
                    );
                  }}
                </Formik>

                <p className="instruction mt-3 mb-5">
                  Default amounts are hypothetical and may not apply to your individual situation. This calculator
                  provides approximations for informational purposes only. Actual results will be provided by your
                  lender and will likely vary depending on your eligibility and current market rates.
                </p>
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
                  <h6 className="calculator-heading">Total Debt to be Refinanced</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-5">
                  <h6 className="calculator-heading">
                    If using the term of the new loan, the monthly payment decreased by
                  </h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-5">
                  <h6 className="calculator-heading">
                    If keeping the original pay off date, the monthly payment decreased by:
                  </h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-5">
                  <h6 className="calculator-heading">If keeping the original payment, all debt will be paid off:</h6>
                  <p>0 months early</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Debtconsolidation;
