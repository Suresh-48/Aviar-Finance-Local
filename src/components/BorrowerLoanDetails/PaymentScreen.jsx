import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Modal, InputGroup, Spinner } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { FaEyeSlash, FaEye, FaKiss } from "react-icons/fa";
import * as Yup from "yup";
import Services from "../../Services";
import { toast } from "react-toastify";
import Loader from "../../core/Loader";

function PaymentScreen(loanDetail) {
  const [isMonthlyPayment, setIsMonthlyPayment] = useState(true);
  const [isOtherPayment, setIsOtherPayment] = useState(false);
  const [openAddAccountModal, setOpenAddAccountModal] = useState(false);
  const [accountNumberShown, setAccountNumberShown] = useState(false);
  const [confirmAccountNumberShown, setConfirmAccountNumberShown] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMainDiv, setIsLoadingMainDiv] = useState(false);

  const toogleAccountNumberShownVisibility = () => {
    setAccountNumberShown(!accountNumberShown);
  };

  const toogleConfirmAccountNumberShownVisibility = () => {
    setConfirmAccountNumberShown(!confirmAccountNumberShown);
  };

  const accountValidateSchema = Yup.object().shape({
    nameOnAccount: Yup.string().required("Name on Account is Required"),
    nickName: Yup.string().required("Nick Name is Required"),
    routingNumber: Yup.string().required("Routing Number is Required"),
    accountNumber: Yup.string().required("Account Number is Required"),
    confirmAccountNumber: Yup.string()
      .oneOf([Yup.ref("accountNumber"), null], "Account Number must match")
      .required("Confirm Account Number is Required"),
  });

  const validateSchema = Yup.object().shape({
    paymentAmount: Yup.string().required("Payment Amount is Required"),
    paymentMethod: Yup.string().required("Payment Method is Required"),
    paymentDate: Yup.string().nullable().required("Payment Date is Required"),
  });

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

  const sumbitAccountDetails = (values) => {
    setIsLoading(true);
    const userId = localStorage.getItem("userId");
    const data = {
      userId: userId,
      values,
    };
    Services.postBorrowerAccountDetails(data)
      .then((res) => {
        getBorrowerAccountDetails();
        toast.success("Created Successfully!");
        setOpenAddAccountModal(false);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Account Not Created");
        setIsLoading(false);
      });
  };

  const getBorrowerAccountDetails = () => {
    setIsLoadingMainDiv(true);
    const userId = localStorage.getItem("userId");
    Services.getBorrowerBankDetails(userId).then((res) => {
      const data = res?.userBankDetails;
      setData(data);
      setIsLoadingMainDiv(false);
    });
  };

  const submitPayments = (values) => {
    var borrwbankIds = JSON.parse(values?.paymentMethod);
    const userId = localStorage.getItem("userId");
    const data = {
      additionalPrincipal: values.additionalPrincipal,
      monthlyPayments: values.monthlyPayments,
      numberOfPayments: values.numberOfPayments,
      otherPayments: values.otherPayments,
      paymentAmount: values.paymentAmount,
      paymentDate: values.paymentDate,
      bankId: borrwbankIds.id,
      userId: userId,
    };
    Services.monthlyLoanPaymentForBorrower(data).then((res) => {
      const data = res?.userBankDetails;
      setData(data);
    });
  };
  useEffect(() => {
    getBorrowerAccountDetails();
  }, []);
  return (
    <div>
      <hr className="payment-divider my-4" />
      <Formik
        initialValues={{
          paymentAmount: loanDetail?.loanDetail?.loanInfoData?.schedulePayment
            ? loanDetail?.loanDetail?.loanInfoData?.schedulePayment
            : 0,
          numberOfPayments: 1,
          additionalPrincipal: "",
          paymentMethod: "",
          paymentDate: "",
          monthlyPayments: isMonthlyPayment,
          otherPayments: isOtherPayment,
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => submitPayments(values)}
      >
        {(formik) => {
          const { handleBlur, handleChange, handleSubmit, values, error } = formik;
          return (
            <Container>
              <div className="d-flex flex-column justify-content-center m-5 mb-1">
                <h3 className="text-center mb-0">Make a payment</h3>
                <hr />
                <p className="fs-2 fw-bold mb-0 text-center">
                  {" "}
                  ${loanDetail?.loanDetail?.loanInfoData?.schedulePayment}
                </p>
                <p className="mb-0 text-center">is due on {loanDetail?.loanDetail?.loanInfoData?.paymentDate}</p>
              </div>
              <Row className="d-flex justify-content-center">
                <Col
                  sm={true}
                  xl={6}
                  style={{
                    background: "#fff",
                    margin: "10px",
                    paddingTop: "20px",
                    boxShadow: "0px 0px 10px -5px rgba(0, 0, 0, 0.8)",
                    borderRadius: "10px",
                  }}
                >
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="m-3">
                      <Form.Check
                        onClick={() => {
                          setIsMonthlyPayment(true);
                          setIsOtherPayment(false);
                        }}
                        checked={isMonthlyPayment}
                        label={<p className="fw-bold">Monthly Payments</p>}
                      />
                      <Form.Check
                        onClick={() => {
                          setIsOtherPayment(true);
                          setIsMonthlyPayment(false);
                        }}
                        checked={isOtherPayment}
                        label={<p className="fw-bold">Other Payments(Only Principal,Escrow and Fees)</p>}
                      />
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="required mb-0">Payment Amount</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                          handleChange("paymentAmount")(valueWithoutDollarSign);
                        }}
                        value={values.paymentAmount ? `$${values.paymentAmount}` : ""}
                        name="paymentAmount"
                        disabled
                      />
                      <ErrorMessage className="error text-danger" component="span" name="paymentAmount" />
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Number of Payments</Form.Label>
                      <Form.Select
                        disabled
                        style={{ borderRadius: 0 }}
                        onChange={handleChange}
                        value={values.numberOfPayments}
                        onBlur={handleBlur}
                        name="numberOfPayments"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Additional Principal</Form.Label>
                      <Form.Control
                        onChange={(e) => {
                          const valueWithoutDollarSign = e.target.value.replace(/\$/g, "");
                          handleChange("additionalPrincipal")(valueWithoutDollarSign);
                        }}
                        value={values.additionalPrincipal ? `$${values.additionalPrincipal}` : ""}
                        name="additionalPrincipal"
                      />
                      <p style={{ marginBottom: 0, marginTop: 5, fontSize: 14, color: "gray", fontWeight: "bold" }}>
                        Additional Principal is added to your payment total
                      </p>
                    </Form.Group>

                    <Form.Group className="m-3">
                      <Form.Label className="mb-0">Payment Method</Form.Label>
                      <Form.Select
                        style={{ borderRadius: 0 }}
                        onChange={(e) => {
                          if (e.target.value === "Create New") {
                            setOpenAddAccountModal(true);
                          } else {
                            handleChange("paymentMethod")(e.target.value);
                          }
                        }}
                        value={values.paymentMethod}
                        onBlur={handleBlur}
                        name="paymentMethod"
                      >
                        <option value="" style={{ display: "none" }}>
                          Select Payment Method
                        </option>
                        <option
                          value="Create New"
                          style={{
                            background: "lightgray",
                            fontWeight: "bold",
                            textAlign: "center",
                            height: "100px",
                          }}
                          checked={isMonthlyPayment}
                          label={<p className="fw-bold">Monthly Payments</p>}
                        />
                        <Form.Check
                          onClick={() => {
                            setIsOtherPayment(true);
                            setIsMonthlyPayment(false);
                          }}
                          checked={isOtherPayment}
                          label={<p className="fw-bold">Other Payments(Only Principal,Escrow and Fees)</p>}
                        />
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mx-3 d-flex flex-column">
                      <Form.Label className="required mb-0">Payment Date</Form.Label>
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
                        selected={values.paymentDate}
                        onChange={(date) => {
                          // Ensure that formik's handleChange is called with the correct parameters
                          handleChange({
                            target: {
                              name: "paymentDate",
                              value: date,
                            },
                          });
                        }}
                        className="form-control"
                        value={values.paymentDate}
                        todayButton="TODAY"
                        dateFormat="MM/dd/YYY"
                        isClearable={values.paymentDate ? true : false}
                        placeholderText="mm/dd/yyyy"
                        name="paymentDate"
                      />
                      <ErrorMessage className="error text-danger" component="span" name="paymentDate" />
                    </Form.Group>

                    <div className="d-flex justify-content-end px-3 pb-3 pt-3">
                      <Button type="submit">Submit</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Container>
          );
        }}
      </Formik>

      <Modal backdrop="static" show={openAddAccountModal} centered size="lg">
        <Formik
          initialValues={{
            nameOnAccount: "",
            nickName: "",
            routingNumber: "",
            accountNumber: "",
            confirmAccountNumber: "",
            country: "US",
            currency: "USD",
            accountType: "company",
          }}
          onSubmit={(values) => {
            sumbitAccountDetails(values);
          }}
          validationSchema={accountValidateSchema}
        >
          {(formik) => {
            const { handleChange, values, handleBlur, handleSubmit } = formik;
            return (
              <div>
                <Form onSubmit={handleSubmit}>
                  <Modal.Header style={{ backgroundColor: "#0d59a9", height: "50px" }}>
                    <Modal.Title style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                      <h4 className="mb-0">Add New Account</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Row className="d-flex flex-column">
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="required mb-0">Name on Account</Form.Label>
                            <Form.Control onChange={handleChange} value={values.nameOnAccount} name="nameOnAccount" />
                            <ErrorMessage className="error text-danger" component="span" name="nameOnAccount" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3 mt-0">
                            <Form.Label className="required mb-0">Payment Method Nickname</Form.Label>
                            <Form.Control onChange={handleChange} value={values.nickName} name="nickName" />
                            <ErrorMessage className="error text-danger" component="span" name="nickName" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3 mt-0">
                            <Form.Label className="required mb-0">Routing Number</Form.Label>
                            <Form.Control onChange={handleChange} value={values.routingNumber} name="routingNumber" />
                            <ErrorMessage className="error text-danger" component="span" name="routingNumber" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3 mt-0">
                            <Form.Label className="required mb-0">Account Number</Form.Label>
                            <InputGroup>
                              <Form.Control
                                onPaste={(e) => {
                                  e.preventDefault();
                                  return false;
                                }}
                                onCopy={(e) => {
                                  e.preventDefault();
                                  return false;
                                }}
                                type={accountNumberShown ? "text" : "password"}
                                name="accountNumber"
                                id="accountNumber"
                                // placeholder="Enter Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.accountNumber}
                              />
                              <InputGroup.Text>
                                {accountNumberShown ? (
                                  <FaEye onClick={toogleAccountNumberShownVisibility} size={20} />
                                ) : (
                                  <FaEyeSlash onClick={toogleAccountNumberShownVisibility} size={25} />
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            <ErrorMessage className="error text-danger" component="span" name="accountNumber" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3 mt-0">
                            <Form.Label className="required mb-0">Confirm Your Account Number</Form.Label>
                            <InputGroup>
                              <Form.Control
                                onPaste={(e) => {
                                  e.preventDefault();
                                  return false;
                                }}
                                onCopy={(e) => {
                                  e.preventDefault();
                                  return false;
                                }}
                                type={confirmAccountNumberShown ? "text" : "password"}
                                name="confirmAccountNumber"
                                id="confirmAccountNumber"
                                // placeholder="Enter Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmAccountNumber}
                              />
                              <InputGroup.Text>
                                {confirmAccountNumberShown ? (
                                  <FaEye onClick={toogleConfirmAccountNumberShownVisibility} size={20} />
                                ) : (
                                  <FaEyeSlash onClick={toogleConfirmAccountNumberShownVisibility} size={25} />
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            <ErrorMessage className="error text-danger" component="span" name="confirmAccountNumber" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="mb-0">Country</Form.Label>
                            <Form.Control disabled onChange={(e) => {}} value={values.country} name="country" />
                            <ErrorMessage className="error text-danger" component="span" name="country" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="mb-0">Currency</Form.Label>
                            <Form.Control disabled onChange={(e) => {}} value={values.currency} name="currency" />
                            <ErrorMessage className="error text-danger" component="span" name="currency" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="mb-0">Type of Account</Form.Label>
                            <Form.Select
                              style={{ borderRadius: 0 }}
                              onChange={handleChange}
                              value={values.accountType}
                              onBlur={handleBlur}
                              name="accountType"
                            >
                              <option value="company">Company</option>
                              <option value="individual">Individual</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer style={{ border: "none" }}>
                    <Container>
                      <Row className="mx-3">
                        <Col className="d-flex justify-content-end pe-0 pb-3">
                          <Button
                            style={{ backgroundColor: "#fff", color: "black" }}
                            onClick={() => setOpenAddAccountModal(false)}
                          >
                            Cancel
                          </Button>
                          <Button disabled={isLoading ? true : false} className="mx-3" type="submit">
                            {isLoading ? (
                              <div>
                                <Spinner as="span" animation="border" size="sm" variant="light" />
                                <span className=""> Loading...</span>{" "}
                              </div>
                            ) : (
                              "Save Account"
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Footer>
                </Form>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}

export default PaymentScreen;
