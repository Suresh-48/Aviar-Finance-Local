import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import Card from "react-bootstrap/Card";
import "../../css/Form.scss";
import "../Calculator/calculator.scss";
import refinance from "../img/refinance.jpg";
function Armorization() {
  const [showAmortizationTable, setshowAmortizationTable] = useState("");
  const [fixedRate, setFixedRate] = useState(true);
  const [adjustableRate, setAdjustableRate] = useState(false);
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerms, setLoanTerms] = useState();
  const [periodicRange, setPeriodicRange] = useState(0);
  const [lifeRange, setLifeRange] = useState(0);
  const [presentRange, setPresentRange] = useState(0);
  const [rateRange, setRateRange] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [enterTotalClosingCosts, setEnterTotalClosingCosts] = useState(true);
  const [enterClosingCostsIndividually, setEnterClosingCostsIndividually] = useState(false);
  const [lenderRange, setLenderrange] = useState(0);
  const [originFeeRange, setOriginFeeRange] = useState(0);
  const [pointstoBrokerRange, setPointstoBrokerRange] = useState(0);
  const [loanOriginationFeetoBrokerRange, setLoanOriginationFeetoBrokerRange] = useState(0);
  const [yearlyRange, setYearlyRange] = useState(0);
  const [inspectionRange, setInspectionRange] = useState(0);
  const [brokerRange, setBrokerRange] = useState(0);
  const [applicationRange, setApplicationRange] = useState(0);
  const [reviewRange, setReviewRange] = useState(0);
  const [otherRange, setOtherRange] = useState(0);
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
              <h1>ANNUAL PERCENTAGE RATE CALCULATOR</h1>
            </div>
          </div>
        </div>
        <Container className="mt-4">
          <Row>
            <Col sm={8} md={4} lg={4} xs={12}>
              <h5 className="font-weight-bold headline">Annual Percentage Rate (APR) Calculator</h5>
              <p>Calculate the annual percentage rate for a loan.</p>
              <Card style={{ backgroundColor: "#f7f7f7", padding: "10px" }} className="p-md-3 p-sm-2 p-lg-3 p-xs-2">
                <Formik
                  initialValues={{
                    loanAmount: "",
                    interestRate: "",
                    loanTerm: "",
                    loanType: "",
                    fixedRate: fixedRate,
                    adjustableRate: adjustableRate,
                    enterTotalClosingCosts: "",
                    enterClosingCostsIndividually: "",
                    closingCost: "",
                    totalClosingCosts: "1000",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values) => submitForm(values)}
                >
                  {(formik) => {
                    const { values, handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
                    return (
                      <Form onSubmit={handleSubmit}>
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
                          <span>$</span>
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
                          <Form.Group>
                            <Form.Label>Closing Costs</Form.Label>
                            <Form.Check
                              type="radio"
                              label="Enter Total Closing Costs"
                              name="enterTotalClosingCosts"
                              checked={enterTotalClosingCosts}
                              onClick={() => {
                                setEnterTotalClosingCosts(!enterTotalClosingCosts);
                                setEnterClosingCostsIndividually(!enterClosingCostsIndividually);
                              }}
                            />
                            <Form.Check
                              type="radio"
                              label="Enter Closing Costs Individually"
                              name="enterClosingCostsIndividually"
                              checked={enterClosingCostsIndividually}
                              onClick={() => {
                                setEnterClosingCostsIndividually(!enterClosingCostsIndividually);
                                setEnterTotalClosingCosts(!enterTotalClosingCosts);
                              }}
                            />
                          </Form.Group>

                          {enterClosingCostsIndividually === true ? (
                            <>
                              <Form.Group>
                                <Form.Label>Points to Lender</Form.Label>
                                <Form.Control
                                  type="number"
                                  placeholder="0"
                                  name="pointstoLender"
                                  value={lenderRange}
                                  onChange={(e) => {
                                    setLenderrange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={lenderRange}
                                  onChange={(e) => {
                                    setLenderrange(e.target.value);
                                  }}
                                  name="lenderRange"
                                  min="0"
                                  max="25"
                                />
                                <ErrorMessage className="error text-danger" component="span" name="pointstoLender" />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Loan Origination Fee to Lender</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="loanOriginationFeetoLender"
                                  value={originFeeRange}
                                  onChange={(e) => {
                                    setOriginFeeRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={originFeeRange}
                                  onChange={(e) => {
                                    setOriginFeeRange(e.target.value);
                                  }}
                                  name="originFeeRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="loanOriginationFeetoLender"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Points to Broker</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="pointstoBroker"
                                  value={pointstoBrokerRange}
                                  onChange={(e) => {
                                    setPointstoBrokerRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={pointstoBrokerRange}
                                  onChange={(e) => {
                                    setPointstoBrokerRange(e.target.value);
                                  }}
                                  name="pointstoBrokerRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage className="error text-danger" component="span" name="pointstoBroker" />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Loan Origination Fee to Broker</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="loanOriginationFeetoBroker"
                                  value={loanOriginationFeetoBrokerRange}
                                  onChange={(e) => {
                                    setLoanOriginationFeetoBrokerRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={loanOriginationFeetoBrokerRange}
                                  onChange={(e) => {
                                    setLoanOriginationFeetoBrokerRange(e.target.value);
                                  }}
                                  name="loanOriginationFeetoBrokerRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="loanOriginationFeetoBroker"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Yearly Private Mortgage Insurance</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="yearlyPrivateMortgageInsurance"
                                  value={yearlyRange}
                                  onChange={(e) => {
                                    setYearlyRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={yearlyRange}
                                  onChange={(e) => {
                                    setYearlyRange(e.target.value);
                                  }}
                                  name="yearlyRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="yearlyPrivateMortgageInsurance"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Lender's Inspection Fee</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="lenderInspectionFee"
                                  value={inspectionRange}
                                  onChange={(e) => {
                                    setInspectionRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={inspectionRange}
                                  onChange={(e) => {
                                    setInspectionRange(e.target.value);
                                  }}
                                  name="inspectionRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="lenderInspectionFee"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Underwriting Review Fee</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="underwritingReviewFee"
                                  value={reviewRange}
                                  onChange={(e) => {
                                    setReviewRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={reviewRange}
                                  onChange={(e) => {
                                    setReviewRange(e.target.value);
                                  }}
                                  name="reviewRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="underwritingReviewFee"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Application Fee</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="applicationFee"
                                  value={applicationRange}
                                  onChange={(e) => {
                                    setApplicationRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={applicationRange}
                                  onChange={(e) => {
                                    setApplicationRange(e.target.value);
                                  }}
                                  name="applicationRange"
                                  min="0"
                                  max="1000"
                                />
                                <ErrorMessage className="error text-danger" component="span" name="applicationFee" />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Broker Processing Fee</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="brokerProcessingFee"
                                  value={brokerRange}
                                  onChange={(e) => {
                                    setBrokerRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={brokerRange}
                                  onChange={(e) => {
                                    setBrokerRange(e.target.value);
                                  }}
                                  name="brokerRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage
                                  className="error text-danger"
                                  component="span"
                                  name="brokerProcessingFee"
                                />
                              </Form.Group>
                              <Form.Group>
                                <Form.Label>Other (excl Appraisal/Title/Escrow/Attorney)</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="other"
                                  value={otherRange}
                                  placeholder="0.00"
                                  onChange={(e) => {
                                    setOtherRange(e.target.value);
                                  }}
                                  onBlur={handleBlur}
                                />
                                <input
                                  className="w-100"
                                  type="range"
                                  id="volume"
                                  value={otherRange}
                                  onChange={(e) => {
                                    setOtherRange(e.target.value);
                                  }}
                                  name="otherRange"
                                  min="0"
                                  max="1000000"
                                />
                                <ErrorMessage className="error text-danger" component="span" name="other" />
                              </Form.Group>
                            </>
                          ) : (
                            <Form.Group>
                              <Form.Label>Total Closing Costs</Form.Label>
                              <Form.Control
                                type="number"
                                name="totalClosingCosts"
                                value={values.totalClosingCosts}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <ErrorMessage className="error text-danger" component="span" name="totalClosingCosts" />
                            </Form.Group>
                          )}
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
                  <b className="headline">Results</b>
                  <text>Print</text>
                </Col>
                <hr className="my-2" />
                <h6 className="calculator-heading">Initial Monthly Payment</h6>
                <p>${finalValue?.toFixed(2)}</p>
                <hr className="my-2" />
                <h6 className="calculator-heading headline">APR</h6>
                <p>0 %</p>
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
