import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Modal, Row, Table } from "react-bootstrap";
import Img from "../../Image/Picture1.png";
import Services from "../../Services";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { toast } from "react-toastify";

function BorrowerLoanCreate() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTermInYears, setLoanTermInYears] = useState("");
  const [paymentsMadePerYear, setPaymentsMadePerYear] = useState(12);
  const [loanRepaymentStartDate, setLoanRepayMentStartDate] = useState();
  const [lateFees, setLateFees] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [borrowerId, setBorrowerId] = useState();
  const [borrowerData, setBorrowerData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [enterValues, setEnterValues] = useState();
  const [totalInterest, setTotalInterest] = useState();
  const [schedulePayment, setSchedulePayment] = useState();
  const [scheduleNoOfPayment, setScheduleNoOfPayment] = useState();
  const [actualNoOfPayment, setActualNoOfPayment] = useState();
  const [yearSaveOrginalLoanTerm, setYearSaveOrginalLoanTerm] = useState();
  const [totalEarlyPayment, setTotalEaryPayment] = useState();
  const [lenderName, setLenderName] = useState("Aviar Financial Services");

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

  const [propertyDoorNoValidate, setPropertyDoorNoValidate] = useState(false);
  const [propertyStreetNameValidate, setPropertyStreetNameValidate] = useState(false);
  const [propertyCityNameValidate, setPropertyCityNameValidate] = useState(false);
  const [propertyStateValidate, setPropertyStateValidate] = useState(false);
  const [propertyZipCodeValidate, setPropertyZipCodeValidate] = useState(false);

  const [borrowerLoanNumber, setBorrowerLoanNumber] = useState();
  const [borrowerLoanNumberValidate, setBorrowerLoanNumberValidate] = useState(false);

  const datePickerRef = useRef(null);

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  const navigate = useNavigate();

  const getLoanData = () => {
    const data = {
      loanAmount: loanAmount,
      interest: interestRate,
      loanTermsInYear: loanTermInYears,
      paymentPerYear: paymentsMadePerYear,
      paymentStartDate: loanRepaymentStartDate,
    };
    Services.GetLoanValue(data).then((res) => {
      const data = res?.data.loanInformationArray;
      setTotalInterest(res?.data?.totalInterest);
      setData(data);
      setSchedulePayment(data[0]?.totalPayment);
      setScheduleNoOfPayment(data[0]?.scheduleNoOfPayment);
      setActualNoOfPayment(data[0]?.actualNoOfPayment);
      setYearSaveOrginalLoanTerm(`${(0.0).toFixed(2)}`);
      setTotalEaryPayment(`$${(0.0).toFixed(2)}`);
      setOpenModal(false);
    });
  };

  const getAllBorrower = () => {
    Services.GetAllBorrower().then((res) => {
      setBorrowerData(res?.data?.borrowerData);
    });
  };

  const createLoan = () => {
    let userId = localStorage.getItem("userId");
    const datas = {
      isPMI: isPMI,
      isEscrow: isEscrow,
      isEscrowAdvance: isEscrowAdvance,
      pmiValue: pmiValue,
      escrowAmtRET: escrowAmtRET,
      escrowAmtHOI: escrowAmtHOI,
      escrowAdvancePaidDateRET: escrowAdvancePaidDateRET,
      escrowAdvancePaidAmountRET: escrowAdvancePaidAmountRET,
      escrowAdvanceNumberOfMonthsRET: escrowAdvanceNumberOfMonthsRET,
      escrowAdvancePaidDateHOI: escrowAdvancePaidDateHOI,
      escrowAdvancePaidAmountHOI: escrowAdvancePaidAmountHOI,
      escrowAdvanceNumberOfMonthsHOI: escrowAdvanceNumberOfMonthsHOI,
      escrowAdvancePMI: escrowAdvancePMI,
      escrowAdvancePmiPaidAmount: escrowAdvancePmiPaidAmount,
      escrowAdvancePmiNumberOfMonths: escrowAdvancePmiNumberOfMonths,
      loanAmount: loanAmount,
      interest: interestRate,
      loanTermsInYear: loanTermInYears,
      paymentPerYear: paymentsMadePerYear,
      paymentStartDate: loanRepaymentStartDate ? moment(loanRepaymentStartDate).format("MM/DD/YYYY") : "",
      schedulePayment: schedulePayment,
      scheduleNoOfPayment: scheduleNoOfPayment,
      actualNoOfPayment: actualNoOfPayment,
      yearSaveOrginalLoanTerm: yearSaveOrginalLoanTerm,
      totalEarlyPayment: totalEarlyPayment,
      totalInterest: totalInterest,
      lenderName: lenderName,
      adminId: userId,
      borrowerId: borrowerId,
      lateFees: lateFees,
      propertyDoorNo: propertyDoorNo,
      propertyStreetName: propertyStreetName,
      propertyCityName: propertyCityName,
      propertyState: propertyState,
      propertyZipCode: propertyZipCode,
      loanNumber: borrowerLoanNumber,
    };
    Services.CreateBorrowerLoan(datas).then((res) => {
      toast.success("Loan Created Successfully!!");
      navigate(`/dashboard`);
    });
  };

  const options = ["5", "10", "15", "20", "25", "30"];

  useEffect(() => {
    getAllBorrower();
  }, []);

  useEffect(() => {
    if (
      loanAmount !== null &&
      interestRate !== null &&
      loanTermInYears !== null &&
      loanRepaymentStartDate !== null &&
      loanRepaymentStartDate !== undefined
    ) {
      getLoanData();
    }
  }, [loanAmount, interestRate, loanRepaymentStartDate, loanTermInYears]);

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
            <div className={`custom-switch mt-2 mx-3 ${isPMI ? "on" : "off"}`} onClick={handleChangePMI}>
              <span className="label">{isPMI ? "Yes" : "No"}</span>
            </div>
          </Col>

          <Col xs={12} md={4} className="d-flex flex-column">
            <label className="required">PMI</label>
            <input
              placeholder="Enter PMI"
              disabled={isPMI ? false : true}
              style={{ height: "35px", paddingLeft: "10px" }}
              onChange={(e) => {
                const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                setPMIvalue(valueWithoutDollarSign);
                setPMIvalidation(false);
              }}
              value={pmiValue ? `$${pmiValue}` : ""}
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
            <div className={`custom-switch mt-2 mx-3 ${isEscrow ? "on" : "off"}`} onClick={handleChangeEscrow}>
              <span className="label">{isEscrow ? "Yes" : "No"}</span>
            </div>
          </Col>
          <Row className="mb-4">
            <p className="fw-bold mb-2 fs-5">Real Estate Taxes</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Amount</label>
              <input
                placeholder="Enter Amount"
                disabled={isEscrow ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAmtRET(valueWithoutDollarSign);
                  setEscrowRETvalidation(false);
                }}
                value={escrowAmtRET ? `$${escrowAmtRET}` : ""}
              />
              {escrowRETvalidation && <p style={{ color: "brown", marginBottom: 0 }}>Amount is Required</p>}
            </Col>
          </Row>

          <Row>
            <p className="fw-bold mb-2 fs-5">Home Owners Insurance</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Amount</label>
              <input
                placeholder="Enter Amount"
                disabled={isEscrow ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAmtHOI(valueWithoutDollarSign);
                  setEscrowHOIvalidation(false);
                }}
                value={escrowAmtHOI ? `$${escrowAmtHOI}` : ""}
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
              className={`custom-switch mt-2 mx-3 ${isEscrowAdvance ? "on" : "off"}`}
              onClick={handleChangeEscrowAdvance}
            >
              <span className="label">{isEscrowAdvance ? "Yes" : "No"}</span>
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
                disabled={isEscrowAdvance ? false : true}
                className="form-control"
                value={escrowAdvancePaidDateRET}
                selected={escrowAdvancePaidDateRET}
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
                disabled={isEscrowAdvance ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePaidAmountRET(valueWithoutDollarSign);
                  setEscrowAdvancePaidAmountRETvalidation(false);
                }}
                value={escrowAdvancePaidAmountRET ? `$${escrowAdvancePaidAmountRET}` : ""}
              />
              {escrowAdvancePaidAmountRETvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Amount is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Number of Months</label>
              <input
                placeholder="Enter Number of Months"
                disabled={isEscrowAdvance ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  setEscrowAdvanceNumberOfMonthsRET(e.target.value);
                  setEscrowAdvanceNumberOfMonthsRETvalidation(false);
                }}
                value={escrowAdvanceNumberOfMonthsRET}
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
                disabled={isEscrowAdvance ? false : true}
                className="form-control"
                value={escrowAdvancePaidDateHOI}
                selected={escrowAdvancePaidDateHOI}
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
                disabled={isEscrowAdvance ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePaidAmountHOI(valueWithoutDollarSign);
                  setEscrowAdvancePaidAmountHOIvalidation(false);
                }}
                value={escrowAdvancePaidAmountHOI ? `$${escrowAdvancePaidAmountHOI}` : ""}
              />
              {escrowAdvancePaidAmountHOIvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Paid Amount is Required</p>
              )}
            </Col>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label className="required">Number of Months</label>
              <input
                placeholder="Enter Number of Months"
                disabled={isEscrowAdvance ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  setEscrowAdvanceNumberOfMonthsHOI(e.target.value);
                  setEscrowAdvanceNumberOfMonthsHOIvalidation(false);
                }}
                value={escrowAdvanceNumberOfMonthsHOI}
              />
              {escrowAdvanceNumberOfMonthsHOIvalidation && (
                <p style={{ color: "brown", marginBottom: 0 }}>Number of Months Required</p>
              )}
            </Col>
          </Row>
          <Row>
            <p className="fw-bold mb-2 fs-5">PMI</p>
            <Col xs={12} md={4} className="d-flex flex-column">
              <label>PMI</label>
              <input
                placeholder="Enter PMI"
                disabled={isEscrowAdvance && isPMI ? false : true}
                style={{ height: "35px", paddingLeft: "10px" }}
                onChange={(e) => {
                  const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                  setEscrowAdvancePMI(valueWithoutDollarSign);
                }}
                value={escrowAdvancePMI ? `$${escrowAdvancePMI}` : ""}
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
                value={escrowAdvancePmiPaidAmount ? `$${escrowAdvancePmiPaidAmount}` : ""}
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
                value={escrowAdvancePmiNumberOfMonths}
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
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyDoorNo(e.target.value);
                  setPropertyDoorNoValidate(false);
                }}
                value={propertyDoorNo}
                name="propertyDoorNo"
              />
              {propertyDoorNoValidate && <p style={{ color: "brown", marginBottom: 0 }}>Door Number is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">Street Name</Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyStreetName(e.target.value);
                  setPropertyStreetNameValidate(false);
                }}
                value={propertyStreetName}
                name="propertyStreetName"
              />
              {propertyStreetNameValidate && <p style={{ color: "brown", marginBottom: 0 }}>Street Name is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">City Name</Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyCityName(e.target.value);
                  setPropertyCityNameValidate(false);
                }}
                value={propertyCityName}
                name="propertyCityName"
              />
              {propertyCityNameValidate && <p style={{ color: "brown", marginBottom: 0 }}>City Name is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className=" required mb-0">State</Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyState(e.target.value);
                  setPropertyStateValidate(false);
                }}
                value={propertyState}
                name="propertyState"
              />
              {propertyStateValidate && <p style={{ color: "brown", marginBottom: 0 }}>State is Required</p>}
            </Form.Group>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <Form.Group>
              <Form.Label className="required mb-0">Zip Code</Form.Label>
              <Form.Control
                style={{ borderRadius: 0 }}
                onChange={(e) => {
                  setPropertyZipCode(e.target.value);
                  setPropertyZipCodeValidate(false);
                }}
                value={propertyZipCode}
                name="propertyZipCode"
              />
              {propertyZipCodeValidate && <p style={{ color: "brown", marginBottom: 0 }}>Zip Code is Required</p>}
            </Form.Group>
          </Col>
        </Row>
      </div>
      <hr className="mx-5" />

      <div className=" d-flex mt-4 mb-2 mx-5">
        <Col xs={12} md={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label className="required">Borrower</label>
            <select
              style={{ height: "35px" }}
              // value={isBorrower}
              onChange={(e) => {
                const selectedValue = JSON.parse(e.target.value);
                setBorrowerId(selectedValue.id);
                setIsSelected(false);
              }}
            >
              <option value="" disabled selected>
                Select Borrower
              </option>
              {borrowerData.map((list, index) => (
                <option
                  key={index}
                  value={JSON.stringify({
                    id: list.id,
                    loanNumber: list.loanNumber,
                  })}
                >
                  {list.firstName + " " + list.lastName}
                </option>
              ))}
            </select>
            {isSelected && (
              <p className="required" style={{ color: "brown" }}>
                Borrower is Required
              </p>
            )}
          </div>
        </Col>
        <Col xs={12} md={4} className="mx-5">
          <Form.Group>
            <Form.Label className="required mb-0">Enter Loan Number</Form.Label>
            <Form.Control
              style={{ borderRadius: 0 }}
              onChange={(e) => {
                setBorrowerLoanNumber(e.target.value);
                setBorrowerLoanNumberValidate(false);
              }}
              value={borrowerLoanNumber}
              name="borrowerLoanNumber"
              placeholder="Create Borrower Loan Number"
            />
            {borrowerLoanNumberValidate && <p style={{ color: "brown", marginBottom: 0 }}>Loan Number is Required</p>}
          </Form.Group>
        </Col>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <Row style={{ width: "100%" }} className="mx-5">
          <Col>
            <div>
              <div className="mt-4">
                <h5>ENTER VALUES</h5>
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
                  className="mortgage-inp pe-1"
                  value={loanAmount ? `$${loanAmount}` : ""}
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
                  className="mortgage-inp pe-1"
                  value={interestRate ? `${interestRate}%` : ""}
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
                  name="maritalStatus"
                  className="mortgage-inp pe-1"
                  onChange={(e) => {
                    setLoanTermInYears(e.target.value);
                    setEnterValues(false);
                  }}
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
                  value={paymentsMadePerYear}
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

              <div
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
                  selected={loanRepaymentStartDate}
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
                  value={loanRepaymentStartDate ? moment(loanRepaymentStartDate).format("MM/DD/YYYY") : ""}
                  onClick={openDatePicker}
                  placeholder="mm/dd/yyyy"
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
                  className="mortgage-inp pe-1"
                  value={lateFees ? `$${lateFees}` : ""}
                  onChange={(e) => {
                    const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");

                    // Update the state with the cleaned value
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
                  value={data[0]?.totalPayment ? `$${data[0]?.totalPayment}` : `$${0}`}
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
                  value={data[0]?.scheduleNoOfPayment ? data[0]?.scheduleNoOfPayment : 0}
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
                  value={data[0]?.actualNoOfPayment ? data[0]?.actualNoOfPayment : 0}
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
                  value={`${(0.0).toFixed(2)}`}
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
                  value={`$${(0.0).toFixed(2)}`}
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
                  value={totalInterest ? `$${totalInterest}` : `$${0.0}`}
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
                  value={"Aviar Financial Services"}
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
      <div className="m-4 me-5 d-flex justify-content-end ">
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
            } else if (borrowerLoanNumber === "") {
              setBorrowerLoanNumberValidate(true);
            } else {
              if (loanAmount === "" || interestRate === "" || loanTermInYears === "" || !loanRepaymentStartDate) {
                setEnterValues(true);
                setIsSelected(borrowerId ? false : true);
              } else {
                setEnterValues(false);
                setOpenModal(true);
                setIsSelected(borrowerId ? false : true);
              }
            }
          }}
        >
          Confirm
        </Button>
      </div>
      <div className="m-5">
        <Table responsive="sm">
          <thead style={{ backgroundColor: "#20394c" }}>
            <tr style={{ color: "#fff", fontSize: 12 }}>
              <th>PMT No</th>
              <th>PAYMENT DATE</th>
              <th>BEGINNING BALANCE</th>
              <th>SCHEDULED PAYMENT</th>
              <th>TOTAL PAYMENT</th>
              <th>PRINCIPAL</th>
              <th>INTEREST</th>
              <th>ENDING BALANCE</th>
              <th>CUMULATIVE INTEREST</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "300px", overflowx: "auto" }}>
            {data.length > 0 ? (
              data.map((row, index) => (
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
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.principalAmount}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.interest}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.endingBalance}</td>
                  <td style={{ paddingBottom: "0px", paddingTop: "0px" }}>${row?.cumulativeInterest}</td>
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
          <Button variant="primary" onClick={() => createLoan()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BorrowerLoanCreate;
