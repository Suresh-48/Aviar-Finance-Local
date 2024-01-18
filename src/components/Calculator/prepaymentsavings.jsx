import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Prepaymentsavings() {
  const [fixedRate, setFixedRate] = useState(true);
  const [adjustableRate, setAdjustableRate] = useState(false);
  const [additionalRange, setAdditionalRange] = useState(0);
  const [interestRange, setInterestRange] = useState(0);
  const [presentLoanBalanceRange, setPresentLoanBalanceRange] = useState(0);
  const [periodicRange, setPeriodicRange] = useState(0);
  const [lifeRange, setLifeRange] = useState(0);
  const [presentRange, setPresentRange] = useState(0);
  const [rateRange, setRateRange] = useState(0);
  const validationSchema = Yup.object().shape({
    additionalPaymentAmount: Yup.string().required("required"),
    firstPayment: Yup.string().required("required"),
    interestRate: Yup.string().required("required"),
    presentLoanBalance: Yup.string().required("required"),
    remainingLoanTermYears: Yup.string().required("required"),
    remainingLoanTermMonths: Yup.string().required("required"),
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
              <h1>PREPAYMENT CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Prepayment Savings Calculator</h5>
              <p>
                Making additional mortgage payments reduces your interest costs by shortening the time it takes to pay
                off your mortgage and lowering your balance along the wa
              </p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    additionalPaymentAmount: "",
                    firstPayment: "",
                    interestRate: "",
                    presentLoanBalance: "",
                    remainingLoanTermYears: "",
                    remainingLoanTermMonths: "",
                    fixedRate: fixedRate,
                    adjustableRate: adjustableRate,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Additional Payment Amount</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            value={additionalRange}
                            name="additionalPaymentAmount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={additionalRange}
                            onChange={(e) => {
                              setAdditionalRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <Select
                            type="number"
                            name="terms"
                            className="mt-2"
                            options={[
                              { value: "monthly", label: "Monthly" },
                              { value: "yearly", label: "Yearly" },
                            ]}
                          />
                          <ErrorMessage className="error text-danger" component="span" name="additionalPaymentAmount" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Make First Additional Payment</Form.Label>
                          <Select
                            type="number"
                            name="firstPayment"
                            className="mt-2"
                            options={[
                              {
                                value: "nextMonth",
                                label: "Starting Next Month",
                              },
                              { value: "oneYear", label: "One Year From Now" },
                              {
                                value: "nextYear",
                                label: "Starting Next Year",
                              },
                            ]}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Present Loan Balance</Form.Label>
                          <Form.Control
                            type="number"
                            name="presentLoanBalance"
                            value={presentLoanBalanceRange}
                            placeholder="0.00"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={presentLoanBalanceRange}
                            onChange={(e) => {
                              setPresentLoanBalanceRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="presentLoanBalance" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestRate"
                            value={interestRange}
                            placeholder="0.00"
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
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="presentLoanBalance" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Remaining Loan Term</Form.Label>
                          <div className="d-flex">
                            <Form.Control
                              type="number"
                              name="remainingLoanTermYears"
                              placeholder="Years"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage
                              className="error text-danger"
                              component="span"
                              name="remainingLoanTermYears"
                            />
                            <Form.Control
                              type="number"
                              name="remainingLoanTermMonths"
                              placeholder="Months"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            <ErrorMessage
                              className="error text-danger"
                              component="span"
                              name="remainingLoanTermMonths"
                            />
                          </div>
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
                            options={[
                              { value: "no", label: "No" },
                              { value: "monthly", label: "Monthly" },
                              { value: "yearly", label: "Yearly" },
                            ]}
                          />
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
                  <h6 className="calculator-heading">Loan Term Reduction</h6>
                  <p>0 Years</p>
                </div>
                <div className="mt-3">
                  <h6 className="calculator-heading">Interest Savings</h6>
                  <p>$0.00</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Prepaymentsavings;
