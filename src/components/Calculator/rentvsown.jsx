import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../Calculator/calculator.scss";
import Card from "react-bootstrap/Card";
import rent from "../img/rent.jpg";
function Rentvsown() {
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [rentIncreaseRange, setRentIncreaseRange] = useState(0);
  const [rentMonthlyRange, setrentMonthlyRange] = useState(0);
  const [purchaseRange, setPurchaseRange] = useState(0);
  const [downPaymentRange, setdownPaymentRange] = useState(0);
  const [mortgageInterestRange, setMortgageInterestRange] = useState(0);
  const [homePurchaseCostsRange, setHomePurchaseCostsRange] = useState(0);
  const [propertyTaxRange, setPropertyTaxRange] = useState(0);
  const [annualHomeRange, setAnnualHomeRange] = useState(0);
  const [sellingRange, setSellingRange] = useState(0);
  const [homeRange, setHomeRange] = useState(0);
  const [sellingCostrange, setsellingCostrange] = useState(0);
  const [interestEarnedRange, setInterestEarnedRange] = useState(0);
  const [taxRaterange, setTaxRaterange] = useState(0);
  const validationSchema = Yup.object().shape({
    // monthlyRent: Yup.string().required("required"),
    // annualRentIncrease: Yup.string().required("required"),
    // monthlyInsurance: Yup.string().required("required"),
    // homePurchasePrice: Yup.string().required("required"),
    // downPayment: Yup.string().required("required"),
    // mortgageInterestRate: Yup.string().required("required"),
    // estimatedHomePurchaseCosts: Yup.string().required("required"),
    // propertyTaxRate: Yup.string().required("required"),
    // annualHomeMaintenance: Yup.string().required("required"),
    // howlongbeforeselling: Yup.string().required("required"),
    // annualHomeAppreciation: Yup.string().required("required"),
    // yourIncomeTaxRate: Yup.string().required("required"),
    // interestEarnedonDownPayment: Yup.string().required("required"),
    // sellingCosts: Yup.string().required("required")
  });
  const submitForm = (values) => {
  };
  return (
    <div>
      <Container fluid>
        <div
          className="color mt-5 mx-2"
          style={{
            backgroundImage: `url(${rent})`,
          }}
        >
          <div className="overlay-text-text">
            <div className="page-name">
              <h1>RENT VS OWN CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="d-flex mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline ">Rent Vs. Own Calculator</h5>
              <p>Calculate the difference between renting and buying a home.</p>
              <Card className="p-md-3 p-sm-2 p-lg-3 p-xs-2" style={{ backgroundColor: "#f7f7f7" }}>
                <Formik
                  initialValues={{
                    monthlyRent: "",
                    annualRentIncrease: "",
                    monthlyInsurance: "",
                    homePurchasePrice: "",
                    downPayment: "",
                    mortgageInterestRate: "",
                    estimatedHomePurchaseCosts: "",
                    propertyTaxRate: "",
                    annualHomeMaintenance: "",
                    howlongbeforeselling: "",
                    annualHomeAppreciation: "",
                    yourIncomeTaxRate: "",
                    interestEarnedonDownPayment: "",
                    sellingCosts: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit} className="m-3">
                        <Form.Group>
                          <Form.Label>Monthly Rent</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="0.00"
                            name="monthlyRent"
                            value={monthlyRent}
                            onChange={(e) => {
                              setMonthlyRent(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={monthlyRent}
                            onChange={(e) => {
                              setMonthlyRent(e.target.value);
                            }}
                            name="volume"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="monthlyRent" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Annual Rent Increase</Form.Label>
                          <Form.Control
                            type="number"
                            name="annualRentIncrease"
                            value={rentIncreaseRange}
                            min="0"
                            max="10"
                            placeholder="0"
                            onChange={(e) => {
                              setRentIncreaseRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={rentIncreaseRange}
                            onChange={(e) => {
                              setRentIncreaseRange(e.target.value);
                            }}
                            name="rentIncreaseRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="annualRentIncrease" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Monthly Renter's Insurance</Form.Label>
                          <Form.Control
                            type="number"
                            name="monthlyInsurance"
                            placeholder="0"
                            value={rentMonthlyRange}
                            onChange={(e) => {
                              setrentMonthlyRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={rentMonthlyRange}
                            onChange={(e) => {
                              setrentMonthlyRange(e.target.value);
                            }}
                            name="rentMonthlyRange"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="monthlyInsurance" />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label>Home Purchase Price</Form.Label>
                          <Form.Control
                            type="number"
                            name="homePurchasePrice"
                            value={purchaseRange}
                            placeholder="0.00"
                            onChange={(e) => {
                              setPurchaseRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={purchaseRange}
                            onChange={(e) => {
                              setPurchaseRange(e.target.value);
                            }}
                            name="purchaseRange"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="homePurchasePrice" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Down Payment</Form.Label>
                          <Form.Control
                            type="number"
                            name="downPayment"
                            placeholder="0.00"
                            value={downPaymentRange}
                            onChange={(e) => {
                              setdownPaymentRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={downPaymentRange}
                            onChange={(e) => {
                              setdownPaymentRange(e.target.value);
                            }}
                            name="downPaymentRange"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="downPayment" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Mortgage Interest Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="mortgageInterestRate"
                            value={mortgageInterestRange}
                            placeholder="0"
                            onChange={(e) => {
                              setMortgageInterestRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={mortgageInterestRange}
                            onChange={(e) => {
                              setMortgageInterestRange(e.target.value);
                            }}
                            name="mortgageInterestRange"
                            min="0"
                            max="25"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="mortgageInterestRate" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Estimated Home Purchase Costs</Form.Label>
                          <Form.Control
                            type="number"
                            name="estimatedHomePurchaseCosts"
                            value={homePurchaseCostsRange}
                            placeholder="0"
                            onChange={(e) => {
                              setHomePurchaseCostsRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={homePurchaseCostsRange}
                            onChange={(e) => {
                              setHomePurchaseCostsRange(e.target.value);
                            }}
                            name="homePurchaseCostsRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage
                            className="error text-danger"
                            component="span"
                            name="estimatedHomePurchaseCosts"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Property Tax Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="propertyTaxRate"
                            placeholder="0"
                            value={propertyTaxRange}
                            onChange={(e) => {
                              setPropertyTaxRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={propertyTaxRange}
                            onChange={(e) => {
                              setPropertyTaxRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="propertyTaxRate" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Annual Home Maintenance</Form.Label>
                          <Form.Control
                            type="number"
                            name="annualHomeMaintenance"
                            placeholder="0"
                            value={annualHomeRange}
                            onChange={(e) => {
                              setAnnualHomeRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={annualHomeRange}
                            onChange={(e) => {
                              setAnnualHomeRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="annualHomeMaintenance" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>How long before selling?</Form.Label>
                          <Form.Control
                            type="number"
                            name="howlongbeforeselling"
                            value={sellingRange}
                            placeholder="Years"
                            onChange={(e) => {
                              setSellingRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={sellingRange}
                            onChange={(e) => {
                              setSellingRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="30"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="howlongbeforeselling" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Annual Home Appreciation</Form.Label>
                          <Form.Control
                            type="number"
                            name="annualHomeAppreciation"
                            value={homeRange}
                            placeholder="0"
                            onChange={(e) => {
                              setHomeRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={homeRange}
                            onChange={(e) => {
                              setHomeRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="30"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="annualHomeAppreciation" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Selling Costs</Form.Label>
                          <Form.Control
                            type="number"
                            name="sellingCosts"
                            placeholder="0"
                            value={sellingCostrange}
                            onChange={(e) => {
                              setsellingCostrange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={sellingCostrange}
                            onChange={(e) => {
                              setsellingCostrange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="sellingCosts" />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Interest Earned on Down Payment</Form.Label>
                          <Form.Control
                            type="number"
                            name="interestEarnedonDownPayment"
                            placeholder="0"
                            value={interestEarnedRange}
                            onChange={(e) => {
                              setInterestEarnedRange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={interestEarnedRange}
                            onChange={(e) => {
                              setInterestEarnedRange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100000"
                          />
                          <ErrorMessage
                            className="error text-danger"
                            component="span"
                            name="interestEarnedonDownPayment"
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Your Income Tax Rate</Form.Label>
                          <Form.Control
                            type="number"
                            name="yourIncomeTaxRate"
                            placeholder="0"
                            value={taxRaterange}
                            onChange={(e) => {
                              setTaxRaterange(e.target.value);
                            }}
                            onBlur={handleBlur}
                          />
                          <input
                            className="w-100"
                            type="range"
                            id="volume"
                            value={taxRaterange}
                            onChange={(e) => {
                              setTaxRaterange(e.target.value);
                            }}
                            name="propertyTaxRange"
                            min="0"
                            max="100"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="yourIncomeTaxRate" />
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
                  <h6 className="calculator-heading">Monthly Payment</h6>
                  <p>---</p>
                </div>
                <div className="mt-2">
                  <h6 className="calculator-heading">Average Monthly Payment Savings</h6>
                  <p>$0.00</p>
                </div>
                <div className="mt-2">
                  <h6 className="calculator-heading">Estimated Total Gain</h6>
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

export default Rentvsown;
