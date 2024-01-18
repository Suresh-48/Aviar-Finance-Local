import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import moment from "moment";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Img from "../../Image/Picture1.png";
import Services from "../../Services";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";

function BorrowerLoanDetail(props) {
  const { id } = useParams();
  const location = useLocation();
  const [loanId, setLoanId] = useState(id);
  const [loanAmount, setLoanAmount] = useState("");
  const [loanNumber, setLoanNumber] = useState();
  const [interestRate, setInterestRate] = useState("");
  const [loanTermInYears, setLoanTermInYears] = useState("");
  const [paymentsMadePerYear, setPaymentsMadePerYear] = useState(12);
  const [loanRepaymentStartDate, setLoanRepayMentStartDate] = useState("");
  const [lateFees, setLateFees] = useState();
  const [data, setData] = useState([]);
  const [enterValues, setEnterValues] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [borrowerData, setBorrowerData] = useState();
  const [borrowerLoanData, setBorrowerLoanData] = useState();
  const [borrowerLoanId, setBorrowerLoanId] = useState();
  const [borrowerScheduleLoanData, setBorrowerScheduleLoanData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [isPMI, setIsPMI] = useState(false);
  const [pmiValue, setPMIvalue] = useState();

  const [isEscrow, setIsEscrow] = useState(false);
  const [escrowAmtRET, setEscrowAmtRET] = useState();
  const [escrowAmtHOI, setEscrowAmtHOI] = useState();

  const [isEscrowAdvance, setIsEscrowAdvance] = useState(false);
  const [escrowAdvancePaidDateRET, setEscrowAdvancePaidDateRET] = useState();
  const [escrowAdvancePaidAmountRET, setEscrowAdvancePaidAmountRET] = useState();
  const [escrowAdvanceNumberOfMonthsRET, setEscrowAdvanceNumberOfMonthsRET] = useState();
  const [escrowAdvancePaidDateHOI, setEscrowAdvancePaidDateHOI] = useState();
  const [escrowAdvancePaidAmountHOI, setEscrowAdvancePaidAmountHOI] = useState();
  const [escrowAdvanceNumberOfMonthsHOI, setEscrowAdvanceNumberOfMonthsHOI] = useState();
  const [escrowAdvancePMI, setEscrowAdvancePMI] = useState();
  const [escrowAdvancePmiPaidAmount, setEscrowAdvancePmiPaidAmount] = useState();
  const [escrowAdvancePmiNumberOfMonths, setEscrowAdvancePmiNumberOfMonths] = useState();

  const [PMIvalidation, setPMIvalidation] = useState(false);
  const [escrowRETvalidation, setEscrowRETvalidation] = useState(false);
  const [escrowHOIvalidation, setEscrowHOIvalidation] = useState(false);

  const [escrowAdvancePaidDateRETvalidation, setEscrowAdvancePaidDateRETvalidation] = useState(false);
  const [escrowAdvancePaidAmountRETvalidation, setEscrowAdvancePaidAmountRETvalidation] = useState(false);
  const [escrowAdvanceNumberOfMonthsRETvalidation, setEscrowAdvanceNumberOfMonthsRETvalidation] = useState(false);
  const [escrowAdvancePaidDateHOIvalidation, setEscrowAdvancePaidDateHOIvalidation] = useState(false);
  const [escrowAdvancePaidAmountHOIvalidation, setEscrowAdvancePaidAmountHOIvalidation] = useState(false);
  const [escrowAdvanceNumberOfMonthsHOIvalidation, setEscrowAdvanceNumberOfMonthsHOIvalidation] = useState(false);

  const [propertyDoorNo, setPropertyDoorNo] = useState();
  const [propertyStreetName, setPropertyStreetName] = useState();
  const [propertyCityName, setPropertyCityName] = useState();
  const [propertyState, setPropertyState] = useState();
  const [propertyZipCode, setPropertyZipCode] = useState();

  const [propertyDoorNoValidate, setPropertyDoorNoValidate] = useState();
  const [propertyStreetNameValidate, setPropertyStreetNameValidate] = useState();
  const [propertyCityNameValidate, setPropertyCityNameValidate] = useState();
  const [propertyStateValidate, setPropertyStateValidate] = useState();
  const [propertyZipCodeValidate, setPropertyZipCodeValidate] = useState();

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  const options = ["5", "10", "15", "20", "25", "30"];

  useEffect(() => {
    getBorrowerDetails();
    getBorrowerLoanDetails();
  }, [id]);

  const getBorrowerDetails = () => {
    Services.GetSingleBorrowerLoanDetails(loanId).then((res) => {
      setBorrowerData(res.borrowerData);
    });
  };

  const getBorrowerLoanDetails = () => {
    Services.getBorrowerLoanData(loanId).then((res) => {
      setBorrowerLoanData(res.borrowerLoanData);
      getBorrowerLoanSchedule(res?.borrowerLoanData?.id);
      setBorrowerLoanId(res?.borrowerLoanData?.id);
    });
  };

  const getBorrowerLoanSchedule = (loanId) => {
    Services.getBorrowerLoanSchedules(loanId).then((res) => {
      setBorrowerScheduleLoanData(res.loanScheduleData);
    });
  };

  const handleChangePMI = () => {
    setIsPMI(!isPMI);
    if (isPMI === true) {
      setPMIvalue("");
      setEscrowAdvancePMI("");
      setEscrowAdvancePmiPaidAmount("");
      setEscrowAdvancePmiNumberOfMonths("");
      setPMIvalidation(false);
    }
  };

  const handleChangeEscrow = () => {
    setIsEscrow(!isEscrow);
    if (isEscrow === true) {
      setIsEscrowAdvance(false);
    }
    if (isEscrow === true) {
      setEscrowAmtRET("");
      setEscrowAmtHOI("");
      setEscrowRETvalidation(false);
      setEscrowHOIvalidation(false);
    }
  };

  const handleChangeEscrowAdvance = () => {
    setIsEscrowAdvance(!isEscrowAdvance);
    if (isEscrow === true) {
      setIsEscrowAdvance(!isEscrowAdvance);
    }
    if (isEscrowAdvance === true) {
      setEscrowAdvancePaidDateRET(null);
      setEscrowAdvancePaidAmountRET("");
      setEscrowAdvanceNumberOfMonthsRET("");
      setEscrowAdvancePaidDateHOI(null);
      setEscrowAdvancePaidAmountHOI("");
      setEscrowAdvanceNumberOfMonthsHOI("");
      setEscrowAdvancePMI("");
      setEscrowAdvancePmiPaidAmount("");
      setEscrowAdvancePmiNumberOfMonths("");
      setEscrowAdvancePaidDateRETvalidation(false);
      setEscrowAdvancePaidAmountRETvalidation(false);
      setEscrowAdvanceNumberOfMonthsRETvalidation(false);
      setEscrowAdvancePaidDateHOIvalidation(false);
      setEscrowAdvancePaidAmountHOIvalidation(false);
      setEscrowAdvanceNumberOfMonthsHOIvalidation(false);
    }
  };

  const updateLoanDetails = () => {};

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Create a range of years using Array.from
  const years = Array.from({ length: 101 }, (_, index) => 1950 + index);

  return (
    <div style={{ marginTop: "125px" }}>
      <div className="mx-5 d-flex justify-content-center">
        <img src={Img} alt="" style={{ width: "500px" }} />
      </div>

      <div className="mx-5 mt-5">
        <h3>MORTGAGE AMORTIZATION SCHEDULE</h3>
        <div style={{ backgroundColor: "#20394c", height: "3px" }} />
      </div>

      <div className="m-5 mb-0 ">
        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col className="d-flex">
            <div>
              <p className="fw-bold mb-2 fs-3">PMI (Private Mortgage Insurance) - </p>
            </div>
            <div
              className={`custom-switch mt-2 mx-3 ${borrowerLoanData?.isPMI ? "on" : "off"}`}
              onClick={handleChangePMI}
            >
              <span className="label">{borrowerLoanData?.isPMI ? "Yes" : "No"}</span>
            </div>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column">
            <label className="required">PMI</label>
            <input
              placeholder="Enter PMI"
              // disabled={isPMI ? false : true}
              disabled
              style={{ height: "35px", paddingLeft: "10px" }}
              onChange={(e) => {
                const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                setPMIvalue(valueWithoutDollarSign);
                setPMIvalidation(false);
              }}
              value={borrowerLoanData?.pmiValue ? `$${borrowerLoanData?.pmiValue}` : ""}
            />
            {PMIvalidation && <p style={{ color: "brown", marginBottom: 0 }}>PMI is Required</p>}
          </Col>
        </Row>
        <hr />

        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col className="d-flex">
            <div>
              <p className="fw-bold mb-2 fs-3">Escrow - </p>
            </div>
            <div
              className={`custom-switch mt-2 mx-3 ${borrowerLoanData?.isEscrow ? "on" : "off"}`}
              onClick={handleChangeEscrow}
            >
              <span className="label">{borrowerLoanData?.isEscrow ? "Yes" : "No"}</span>
            </div>
          </Col>
          <Row className="mb-4">
            <p className="fw-bold mb-2 fs-5">Real Estate Taxes</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Amount</label>
              <input
                placeholder="Enter Amount"
                // disabled={isEscrow ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAmtRET(valueWithoutDollarSign);
                  setEscrowRETvalidation(false);
                }}
                value={borrowerLoanData?.escrowAmtRET ? `$${borrowerLoanData?.escrowAmtRET}` : ""}
              />
              {escrowRETvalidation && <p style={{ color: "brown", marginBottom: 0 }}>Amount is Required</p>}
            </Col>
          </Row>

          <Row>
            <p className="fw-bold mb-2 fs-5">Home Owners Insurance</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Paid Amount</label>
              <input
                placeholder="Enter Paid Amount"
                // disabled={isEscrow ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAmtHOI(valueWithoutDollarSign);
                  setEscrowHOIvalidation(false);
                }}
                value={borrowerLoanData?.escrowAmtHOI ? `$${borrowerLoanData?.escrowAmtHOI}` : ""}
              />
              {escrowHOIvalidation && <p style={{ color: "brown", marginBottom: 0 }}>Amount is Required</p>}
            </Col>
          </Row>
        </Row>

        <hr />

        <Row style={{ display: "flex", flexDirection: "column" }}>
          <Col className="d-flex">
            <div>
              <p className="fw-bold mb-2 fs-3">Escrow Advance - </p>
            </div>
            <div
              className={`custom-switch mt-2 mx-3 ${borrowerLoanData?.isEscrowAdvance > 0 ? "on" : "off"}`}
              onClick={handleChangeEscrowAdvance}
            >
              <span className="label">{borrowerLoanData?.isEscrowAdvance > 0 ? "Yes" : "No"}</span>
            </div>
          </Col>
          <Row className="mb-4">
            <p className="fw-bold mb-2 fs-5">Real Estate Taxes</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Paid Date</label>
              <DatePicker
                renderCustomHeader={({ date, changeYear, changeMonth }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(value)}
                      className="mx-3"
                      style={{ width: "80px", height: "25px", borderRadius: "5px" }}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      className="mx-3"
                      style={{ height: "25px", borderRadius: "5px" }}
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                onChange={(date) => {
                  setEscrowAdvancePaidDateRET(date);
                  setEscrowAdvancePaidDateRETvalidation(false);
                }}
                isClearable={() => setEscrowAdvancePaidDateRET()}
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                className="form-control"
                value={
                  borrowerLoanData?.escrowAdvancePaidDateRET
                    ? moment(borrowerLoanData?.escrowAdvancePaidDateRET).format("MM/DD/YYYY")
                    : ""
                }
                // selected={borrowerLoanData?.escrowAdvancePaidDateRET}
                todayButton="TODAY"
                dateFormat="MM/dd/YYY"
                placeholderText="mm/dd/yyyy"
              />
              {escrowAdvancePaidDateRETvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Date is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Paid Amount</label>
              <input
                placeholder="Enter Paid Amount"
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePaidAmountRET(valueWithoutDollarSign);
                  setEscrowAdvancePaidAmountRETvalidation(false);
                }}
                value={
                  borrowerLoanData?.escrowAdvancePaidAmountRET ? `$${borrowerLoanData?.escrowAdvancePaidAmountRET}` : ""
                }
              />
              {escrowAdvancePaidAmountRETvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Amount is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Number of Months</label>
              <input
                placeholder="Enter Number of Months"
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  setEscrowAdvanceNumberOfMonthsRET(e.target.value);
                  setEscrowAdvanceNumberOfMonthsRETvalidation(false);
                }}
                value={borrowerLoanData?.escrowAdvanceNumberOfMonthsRET}
              />
              {escrowAdvanceNumberOfMonthsRETvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Number of Months Required</p>
              )}
            </Col>
          </Row>

          <Row className="mb-4">
            <p className="fw-bold mb-2 fs-5">Home Owners Insurance</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Paid Date</label>
              <DatePicker
                renderCustomHeader={({ date, changeYear, changeMonth }) => (
                  <div
                    style={{
                      margin: 10,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <select
                      value={getYear(date)}
                      onChange={({ target: { value } }) => changeYear(value)}
                      className="mx-3"
                      style={{ width: "80px", height: "25px", borderRadius: "5px" }}
                    >
                      {years.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <select
                      className="mx-3"
                      style={{ height: "25px", borderRadius: "5px" }}
                      value={months[getMonth(date)]}
                      onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                    >
                      {months.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                onChange={(date) => {
                  setEscrowAdvancePaidDateHOI(date);
                  setEscrowAdvancePaidDateHOIvalidation(false);
                }}
                isClearable={() => setEscrowAdvancePaidDateHOI()}
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                className="form-control"
                value={
                  borrowerLoanData?.escrowAdvancePaidDateHOI
                    ? moment(borrowerLoanData?.escrowAdvancePaidDateHOI).format("MM/DD/YYYY")
                    : ""
                }
                // selected={borrowerLoanData?.escrowAdvancePaidDateHOI}
                todayButton="TODAY"
                dateFormat="MM/dd/YYY"
                placeholderText="mm/dd/yyyy"
              />
              {escrowAdvancePaidDateHOIvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Date is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Paid Amount</label>
              <input
                placeholder="Enter Paid Amount"
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePaidAmountHOI(valueWithoutDollarSign);
                  setEscrowAdvancePaidAmountHOIvalidation(false);
                }}
                value={
                  borrowerLoanData?.escrowAdvancePaidAmountHOI ? `$${borrowerLoanData?.escrowAdvancePaidAmountHOI}` : ""
                }
              />
              {escrowAdvancePaidAmountHOIvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Amount is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Number of Months</label>
              <input
                placeholder="Enter Number of Months"
                // disabled={borrowerLoanData?.isEscrowAdvance ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  setEscrowAdvanceNumberOfMonthsHOI(e.target.value);
                  setEscrowAdvanceNumberOfMonthsHOIvalidation(false);
                }}
                value={borrowerLoanData?.escrowAdvanceNumberOfMonthsHOI}
              />
              {escrowAdvanceNumberOfMonthsHOIvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Number of Months Required</p>
              )}
            </Col>
          </Row>
          <Row>
            <p className="fw-bold mb-2 fs-5">PMI</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="">PMI</label>
              <input
                placeholder="Enter PMI"
                // disabled={isEscrowAdvance && isPMI ? false : true}
                disabled
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePMI(valueWithoutDollarSign);
                }}
                value={borrowerLoanData?.escrowAdvancePMI ? `$${borrowerLoanData?.escrowAdvancePMI}` : ""}
              />
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label>Paid Amount</label>
              <input
                placeholder="Enter Paid Amount"
                disabled={isEscrowAdvance && isPMI ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePmiPaidAmount(valueWithoutDollarSign);
                }}
                value={
                  borrowerLoanData?.escrowAdvancePmiPaidAmount ? `$${borrowerLoanData?.escrowAdvancePmiPaidAmount}` : ""
                }
              />
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label>Number of Months</label>
              <input
                placeholder="Enter Number of Months"
                disabled={isEscrowAdvance && isPMI ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  setEscrowAdvancePmiNumberOfMonths(e.target.value);
                }}
                value={borrowerLoanData?.escrowAdvancePmiNumberOfMonths}
              />
            </Col>
          </Row>
        </Row>
        <hr />
      </div>

      <div className="mx-5">
        <Row>
          <p className="fw-bold mb-2 fs-5">Property Address</p>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">Door No</Form.Label>
              <Form.Control
                disabled
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyDoorNo(e.target.value);
                  setPropertyDoorNoValidate(false);
                }}
                value={borrowerLoanData?.propertyDoorNo}
                name="propertyDoorNo"
              />
              {propertyDoorNoValidate && <p style={{ color: "brown", marginBottom: 0 }}>Door Number is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">Street Name</Form.Label>
              <Form.Control
                disabled
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyStreetName(e.target.value);
                  setPropertyStreetNameValidate(false);
                }}
                value={borrowerLoanData?.propertyStreetName}
                name="propertyStreetName"
              />
              {propertyStreetNameValidate && <p style={{ color: "brown", marginBottom: 0 }}>Street Name is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">City Name</Form.Label>
              <Form.Control
                disabled
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyCityName(e.target.value);
                  setPropertyCityNameValidate(false);
                }}
                value={borrowerLoanData?.propertyCityName}
                name="propertyCityName"
              />
              {propertyCityNameValidate && <p style={{ color: "brown", marginBottom: 0 }}>City Name is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">State</Form.Label>
              <Form.Control
                disabled
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyState(e.target.value);
                  setPropertyStateValidate(false);
                }}
                value={borrowerLoanData?.propertyState}
                name="propertyState"
              />
              {propertyStateValidate && <p style={{ color: "brown", marginBottom: 0 }}>State is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">Zip Code</Form.Label>
              <Form.Control
                disabled
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyZipCode(e.target.value);
                  setPropertyZipCodeValidate(false);
                }}
                value={borrowerLoanData?.propertyZipCode}
                name="propertyZipCode"
              />
              {propertyZipCodeValidate && <p style={{ color: "brown", marginBottom: 0 }}>Zip Code is Required</p>}
            </Form.Group>
          </Col>
        </Row>
      </div>
      <hr className="mx-5" />

      <div className="mt-4 mb-2 mx-5 d-flex">
        <Col xs={12} md={4}>
          <div className="d-flex">
            <p>Borrower Name : </p>{" "}
            <p className="mx-4 fw-bold">
              {borrowerData?.borrowerId?.firstName} {borrowerData?.borrowerId?.middleName} {borrowerData?.borrowerId?.lastName}
            </p>
          </div>
        </Col>
        <Col xs={12} md={4} className="mx-5">
          <div className="d-flex">
            <p>Loan Number : </p> <p className="mx-4 fw-bold">{borrowerData?.loanNumber}</p>
          </div>
        </Col>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Row style={{ width: "100%" }} className="mx-5">
          <Col>
            <div>
              <div className="mt-4">
                <h5>ENTER VALUES</h5>
                <div
                  style={{
                    backgroundColor: "#47b2e4",
                    height: "2px",
                    width: "90%",
                  }}
                />
              </div>

              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Loan Amount</label>
                <input
                  disabled={true}
                  className="mortgage-inp pe-1"
                  value={borrowerLoanData?.loanAmount}
                  onChange={(e) => {
                    const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                    setLoanAmount(valueWithoutDollarSign);
                    setEnterValues(false);
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Interest rate</label>
                <input
                  disabled={true}
                  className="mortgage-inp pe-1"
                  value={borrowerLoanData?.interestRate}
                  onChange={(e) => {
                    const valueWithoutPercentageSign = e.target.value.replace(/\%/g, "");
                    setInterestRate(valueWithoutPercentageSign);
                    setEnterValues(false);
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Loan term in years</label>
                <select
                  disabled={true}
                  name="maritalStatus"
                  className="mortgage-inp pe-1"
                  onChange={(e) => {
                    setLoanTermInYears(e.target.value);
                    setEnterValues(false);
                  }}
                  value={borrowerLoanData?.loanTermsInYear}
                >
                  <option value="" disabled selected>
                    Select Loan Term
                  </option>
                  {options.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Payments made per year</label>
                <input
                  className="mortgage-inp pe-1"
                  disabled
                  value={borrowerLoanData?.paymentPerYear}
                  onChange={(e) => {
                    setPaymentsMadePerYear(e.target.value);
                  }}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />

              {/* <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Loan repayment start date</label>
                <DatePicker
                  renderCustomHeader={({ date, changeYear, changeMonth }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                        className="mx-3"
                        style={{ width: "80px", height: "25px", borderRadius: "5px" }}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        className="mx-3"
                        style={{ height: "25px", borderRadius: "5px" }}
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  id="myDatePicker"
                  ref={datePickerRef}
                  // selected={borrowerLoanData?.loanStartDate}
                  onChange={(date) => {
                    setLoanRepayMentStartDate(date);
                    setEnterValues(false);
                  }}
                  todayButton="TODAY"
                  dateFormat="MM/dd/YYY"
                  placeholderText="mm/dd/yyyy"
                />
                <input
                  className="mortgage-inp "
                  type="text"
                  value={
                    borrowerLoanData?.loanStartDate ? moment(borrowerLoanData?.loanStartDate).format("MM/DD/YYYY") : ""
                  }
                  onClick={openDatePicker}
                  placeholder="mm/dd/yyyy"
                  disabled={true}
                />
              </div> */}
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />

              <div
                style={{
                  marginTop: "25px",
                  width: "90%",
                  backgroundColor: "black",
                }}
              />
              <div
                style={{
                  width: "90%",
                  backgroundColor: "black",
                }}
              />
              <div
                style={{
                  marginTop: "25px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Late Fees</label>
                <input
                  disabled={true}
                  className="mortgage-inp pe-1"
                  value={borrowerLoanData?.lateFees}
                  onChange={(e) => {
                    const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                    setLateFees(valueWithoutDollarSign);
                  }}
                />
              </div>
              <div
                style={{
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
            </div>

            <p style={{ color: "Brown", marginBottom: 0, marginTop: "10px" }}>
              {enterValues
                ? loanAmount === ""
                  ? "Loan Amount is Required *"
                  : interestRate === ""
                  ? "Interest Rate is Required *"
                  : loanTermInYears === ""
                  ? "Loan Term in Years is Required *"
                  : !loanRepaymentStartDate
                  ? "Loan Repayment Start Date is Required *"
                  : null
                : null}
            </p>
          </Col>

          <Col>
            <div>
              <div className="mt-4">
                <h5>LOAN SUMMARY</h5>
                <div
                  style={{
                    backgroundColor: "#20394c",
                    height: "2px",
                    width: "90%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Scheduled payment</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.schedulePayment}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Scheduled number of payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.scheduleNoOfPayment}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Actual number of payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.actualNoOfPayment}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Years saved off original loan term</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.yearSaveOrginalLoanTerm}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Total early payments</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.totalEarningPayment}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <label>Total interest</label>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.totalInterest}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <h6 className="m-0">LENDER NAME</h6>
                <input
                  disabled
                  className="mortgage-inp-sec pe-1"
                  value={borrowerLoanData?.lenderName}
                  //  onChange={()=>}
                />
              </div>
              <div
                style={{
                  margin: "0.5px",
                  width: "90%",
                  backgroundColor: "black",
                  height: "0.5px",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="m-4 me-5 d-flex justify-content-end ">
        <Button
          className="me-4"
          onClick={() => {
            if (isPMI === true && !pmiValue) {
              setPMIvalidation(true);
            } else if (isEscrow === true && !escrowAmtRET) {
              setEscrowRETvalidation(true);
            } else if (isEscrow === true && !escrowAmtHOI) {
              setEscrowHOIvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvancePaidDateRET) {
              setEscrowAdvancePaidDateRETvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvancePaidAmountRET) {
              setEscrowAdvancePaidAmountRETvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvanceNumberOfMonthsRET) {
              setEscrowAdvanceNumberOfMonthsRETvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvancePaidDateHOI) {
              setEscrowAdvancePaidDateHOIvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvancePaidAmountHOI) {
              setEscrowAdvancePaidAmountHOIvalidation(true);
            } else if (isEscrowAdvance === true && !escrowAdvanceNumberOfMonthsHOI) {
              setEscrowAdvanceNumberOfMonthsHOIvalidation(true);
            } else if (!propertyDoorNo) {
              setPropertyDoorNoValidate(true);
            } else if (!propertyStreetName) {
              setPropertyStreetNameValidate(true);
            } else if (!propertyCityName) {
              setPropertyCityNameValidate(true);
            } else if (!propertyState) {
              setPropertyStateValidate(true);
            } else if (!propertyZipCode) {
              setPropertyZipCodeValidate(true);
            } else {
              if (loanAmount === "" || interestRate === "" || loanTermInYears === "" || !loanRepaymentStartDate) {
                setEnterValues(true);
              } else {
                setEnterValues(false);
                setOpenModal(true);
              }
            }
          }}
        >
          Save Changes
        </Button>
      </div> */}

      <div className="m-5">
        <Table responsive="sm">
          <thead style={{ backgroundColor: "#20394c" }}>
            <tr style={{ color: "#fff", fontSize: 12 }}>
              <th style={{ width: "6%" }}>PMT No</th>
              <th style={{ width: "10%" }}>PAYMENT DATE</th>
              <th style={{ width: "12%" }}>BEGINNING BALANCE</th>
              <th style={{ width: "10%" }}>SCHEDULED PAYMENT</th>
              <th style={{ width: "10%" }}>PAID PAYMENT</th>
              <th style={{ width: "11%" }}>PAYMENT WITH ESCROW</th>
              <th style={{ width: "10%" }}>PRINCIPAL</th>
              <th style={{ width: "10%" }}>INTEREST</th>
              <th style={{ width: "12%" }}>ENDING BALANCE</th>
              <th style={{ width: "10%" }}>CUMULATIVE INTEREST</th>
              <th style={{ width: "10%" }}>PAYMENT STATUS</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "300px", overflowx: "auto" }}>
            {borrowerScheduleLoanData.length > 0 ? (
              borrowerScheduleLoanData.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "lightblue" : "lightgray",
                  }}
                >
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>{row?.pmtNo}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>
                    {moment(row?.paymentDate).format("M/D/YYYY")}
                  </td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.beginingBalance}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.schedulePayment}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.totalPayment}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.totalEscrowPayment}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.principalAmount}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.interest}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.endingBalance}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.cumulativeInterest}</td>
                  <td
                    style={{
                      paddingBottom: "0px",
                      paddingTop: "0px",
                      backgroundColor: row?.isPaid ? "green" : "brown",
                      color: "white",
                    }}
                  >
                    {row?.isPaid ? "Paid" : "Payment Due"}
                  </td>
                </tr>
              ))
            ) : (
              <tr
                style={{
                  textAlign: "center",
                  width: "300px",
                  overflowX: "auto",
                }}
              >
                <td colSpan="10">No Records Found!</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <Modal backdrop="static" keyboard={false} show={openModal} centered style={{ padding: "20px" }}>
        <div
          style={{
            padding: "10px",
            paddingTop: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h5>Are you sure want to submit?</h5>
        </div>
        <Modal.Footer style={{ border: "none" }}>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => updateLoanDetails()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BorrowerLoanDetail;
