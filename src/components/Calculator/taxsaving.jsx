import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "../Calculator/calculator.scss";
import taxSaving from "../img/taxsaving.jpg";
function Taxsaving() {
  const [propertyRange, setPropertyRange] = useState(0);
  const [loanAmountrange, setLoanAmountRange] = useState(0);
  const [interestAmount, setInterestAmount] = useState(0);
  const [taxRange, setTaxRange] = useState(0);
  const [points, setPoints] = useState(0);
  const [propertyTaxRange, setPropertTaxyRange] = useState(0);
  const [taxRateRange, setTaxRateRange] = useState(0);
  const [loanTerms, setLoanTerms] = useState();
  const validationSchema = Yup.object().shape({
    propertyValue: Yup.string().required("required"),
    loanAmount: Yup.string().required("required"),
    interestRate: Yup.string().required("required"),
    loanTerm: Yup.string().required("required"),
    points: Yup.string().required("required"),
    calculateTaxSavingsAfter: Yup.string().required("required"),
    propertyTaxRate: Yup.string().required("required"),
    yourIncomeTaxRate: Yup.string().required("required"),
  });
  const submitForm = (values) => {
  };
  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5 mx-2"
          style={{
            backgroundImage: `url(${taxSaving})`,
          }}
        >
          <div className="overlay-text-text">
            {" "}
            <div className="page-name">
              <h1>TAX SAVINGS CALCULATOR</h1>
            </div>
          </div>
        </div>

        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Tax Savings Calculator</h5>
              <p>Calculate your yearly tax savings.</p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    propertyValue: "",
                    loanAmount: "",
                    interestRate: "",
                    loanTerm: "",
                    points: "",
                    calculateTaxSavingsAfter: "",
                    propertyTaxRate: "",
                    yourIncomeTaxRate: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Property Value</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            name="propertyValue"
                            value={propertyRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={propertyRange}
                            onChange={(e) => {
                              setPropertyRange(e.target.value);
                            }}
                            name="propertyRange"
                            min="0"
                            max="1000000"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Loan Amount</Form.Label>
                          <Form.Control
                            type="number"
                            name="loanAmount"
                            placeholder="0"
                            value={loanAmountrange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={loanAmountrange}
                            onChange={(e) => {
                              setLoanAmountRange(e.target.value);
                            }}
                            name="loanAmountRange"
                            min="0"
                            max="1000000"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestRate"
                            value={interestAmount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={interestAmount}
                            onChange={(e) => {
                              setInterestAmount(e.target.value);
                            }}
                            name="interestAmount"
                            min="0"
                            max="30"
                          />
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
                          <Form.Label>Points</Form.Label>
                          <Form.Control
                            type="number"
                            name="points"
                            value={points}
                            placeholder="0"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={points}
                            onChange={(e) => {
                              setPoints(e.target.value);
                            }}
                            name="points"
                            min="0"
                            max="100"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Calculate Tax Savings After</Form.Label>
                          <Form.Control
                            type="number"
                            name="calculateTaxSavingsAfter"
                            placeholder="0"
                            value={taxRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={taxRange}
                            onChange={(e) => {
                              setTaxRange(e.target.value);
                            }}
                            name="taxRange"
                            min="0"
                            max="100"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Property Tax Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="propertyTaxRate"
                            value={propertyTaxRange}
                            placeholder="0"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={propertyTaxRange}
                            onChange={(e) => {
                              setPropertTaxyRange(e.target.value);
                            }}
                            name="propertyRange"
                            min="0"
                            max="100"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Your Income Tax Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="yourIncomeTaxRate"
                            placeholder="0"
                            value={taxRateRange}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={taxRateRange}
                            onChange={(e) => {
                              setTaxRateRange(e.target.value);
                            }}
                            name="taxRateRange"
                            min="0"
                            max="100"
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
                  <h6 className="calculator-heading">Total Tax Savings</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-3">
                  <h6 className="calculator-heading">Monthly Mortgage Payment</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-3">
                  <h6 className="calculator-heading">Annual Property Tax</h6>
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

export default Taxsaving;
