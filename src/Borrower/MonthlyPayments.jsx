import { ErrorMessage, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Modal } from "react-bootstrap";
import * as Yup from "yup";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import Services from "../Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MonthlyPayments() {
  const [borrowerData, setBorrowerData] = useState([]);
  const [isLoanNumber, setIsLoanNumber] = useState("-");
  const [borrowerId, setBorrowerId] = useState();
  const [isLate, setIsLate] = useState(false);
  const [isLateModel, setIsLateModel] = useState(false);
  const [loanInfoData, setLoanInfoData] = useState();
  const [paymentAmt, setPaymentAmt] = useState();
  const [lateFees, setLateFees] = useState();
  const [selectedBorrowerName, setSelectedBorrowerName] = useState();
  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    borrower: Yup.string().required("Borrower is Required"),
    paidDate: Yup.string().required("Paid Date is Required"),
    paymentAmount: Yup.string().required("Payment Amount is Required"),
  });

  const submit = (values) => {
    const data = {
      paidDate: moment(values.paidDate).format("MM/DD/YYYY"),
      chequeNumber: values.chequeNumber,
      paymentAmount: values.paymentAmount,
      loanInfoId: loanInfoData?.id,
      lateFees: lateFees,
    };
    Services.monthlyLoanPayment(data).then((response) => {
      const statusCode = response.status;
      if (statusCode === 201) {
        toast.success(response.message);
        navigate(`/dashboard`);
      } else {
        toast.error(response.message);
      }
    });
  };

  const getAllBorrower = () => {
    Services.GetAllBorrower().then((res) => {
      const data = res?.data?.borrowerData;
      setBorrowerData(data);
    });
  };
  const getStartOfMonth = () => {
    const currentDate = moment();
    const startOfMonthDate = currentDate.startOf("month");
    return startOfMonthDate.format("MM-DD-YYYY");
  };

  const getLBorrowerLoanData = (paidDte, formik) => {
    const data = {
      borrowerId: borrowerId,
      loanNumber: isLoanNumber,
      paidDate: moment(paidDte).format("MM/DD/YYYY"),
    };
    Services.getBorrowerLoanInfo(data).then((res) => {
      setIsLate(res.data.isLate);
      setLoanInfoData(res.data.loanInfoData);
      setPaymentAmt(res.data.loanInfoData.schedulePayment);
      setLateFees(res.data.loanInfoData?.loanId?.lateFees);
      formik.setFieldValue("paymentAmount", res.data.loanInfoData.schedulePayment || "");
      if (res.data.isLate === true) {
        setIsLateModel(true);
      }
    });
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

  useEffect(() => {
    getAllBorrower();
  }, []);
  return (
    <div style={{ marginTop: "125px" }}>
      <Formik
        initialValues={{
          borrower: "",
          dueDate: getStartOfMonth(),
          // paidDate: moment().format("mm/dd/yyyy"),
          paidDate: "",
          chequeNumber: "",
          paymentAmount: "",
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => submit(values)}
      >
        {(formik) => {
          const { handleBlur, handleChange, handleSubmit, values, error } = formik;
          return (
            <Container>
              <div className="d-flex justify-content-center m-5">
                <h3>Borrower Monthly Payments</h3>
              </div>
              <Row className="d-flex justify-content-center">
                <Col sm={true} xl={6}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3">
                      <Form.Label className="required mb-0">Select Borrower</Form.Label>
                      <Form.Select
                        style={{ borderRadius: 0 }}
                        onChange={(e) => {
                          const selectedValue = JSON.parse(e.target.value);
                          handleChange("borrower")(selectedValue.id);
                          setBorrowerId(selectedValue.id);
                          setIsLoanNumber(selectedValue.loanNumber);
                          setSelectedBorrowerName(e.target.value.borrowerName);
                        }}
                        value={selectedBorrowerName}
                        onBlur={handleBlur}
                        name="borrower"
                      >
                        <option value="" disabled selected>
                          Select Borrower
                        </option>
                        {borrowerData.map((list, index) => (
                          <option
                            key={index}
                            value={JSON.stringify({
                              id: list?.id,
                              loanNumber: list?.loanNumber,
                              borrowerName: list?.firstName + " " + list?.lastName,
                            })}
                          >
                            {list?.firstName + " " + list?.lastName}
                          </option>
                        ))}
                      </Form.Select>
                      <ErrorMessage className="error text-danger" component="span" name="borrower" />
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Loan Number</Form.Label>
                      <Form.Control
                        disabled
                        style={{
                          borderRadius: 0,
                        }}
                        value={isLoanNumber}
                        name="loanNumber"
                      />
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Due Date</Form.Label>
                      <Form.Control
                        style={{ borderRadius: 0 }}
                        onChange={handleChange}
                        value={values.dueDate}
                        onBlur={handleBlur}
                        name="dueDate"
                        type="text"
                        disabled={true}
                      />
                      <ErrorMessage className="error text-danger" component="span" name="date" />
                    </Form.Group>

                    <Form.Group className="m-3" style={{ display: "flex", flexDirection: "column" }}>
                      <Form.Label className="required mb-0">Paid Date</Form.Label>
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
                        selected={values.paidDate}
                        onChange={(date) => {
                          // Ensure that formik's handleChange is called with the correct parameters
                          handleChange({
                            target: {
                              name: "paidDate",
                              value: date,
                            },
                          });
                          getLBorrowerLoanData(date, formik);
                        }}
                        className="form-control"
                        value={values.paidDate}
                        todayButton="TODAY"
                        dateFormat="MM/dd/YYY"
                        isClearable={values.paidDate ? true : false}
                        placeholderText="mm/dd/yyyy"
                        name="paidDate"
                      />
                      <ErrorMessage className="error text-danger" component="span" name="paidDate" />
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Cheque Number</Form.Label>
                      <Form.Control
                        style={{ borderRadius: 0 }}
                        onChange={handleChange}
                        value={values.chequeNumber}
                        onBlur={handleBlur}
                        name="chequeNumber"
                      />
                    </Form.Group>
                    <Form.Group className="m-3">
                      <Form.Label className="required mb-0">Payment Amount</Form.Label>
                      <Form.Control
                        style={{ borderRadius: 0 }}
                        onChange={handleChange}
                        value={values.paymentAmount ? values.paymentAmount : paymentAmt}
                        onBlur={handleBlur}
                        name="paymentAmount"
                      />
                      <ErrorMessage className="error text-danger" component="span" name="paymentAmount" />
                    </Form.Group>
                    <div className="d-flex justify-content-end px-3 pb-5 pt-3">
                      <Button type="submit">Submit</Button>
                    </div>
                    <Modal backdrop="static" keyboard={false} show={isLateModel} centered style={{ padding: "20px" }}>
                      <div
                        style={{
                          padding: "10px",
                          paddingTop: "25px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Form.Group className="m-3">
                          <Form.Label className="mb-0">Late Fees</Form.Label>
                          <Form.Control
                            type="number"
                            name="lateFees"
                            value={lateFees}
                            onChange={(e) => {
                              const enteredLateFees = parseInt(e.target.value) || 0;
                              setLateFees(enteredLateFees);
                            }}
                            style={{
                              marginBottom: "15px",
                              textAlign: "center",
                            }}
                          />
                        </Form.Group>
                      </div>
                      <Modal.Footer style={{ border: "none" }} className="d-flex justify-content-center">
                        <Button
                          variant="secondary"
                          onClick={() => {
                            setIsLateModel(false);
                          }}
                        >
                          Ok
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Formik>
    </div>
  );
}

export default MonthlyPayments;
