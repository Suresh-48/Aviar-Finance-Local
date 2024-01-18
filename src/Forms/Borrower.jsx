import React, { useState } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import Avatar from "react-avatar";
import { ErrorMessage, Formik } from "formik";

import * as Yup from "yup";
// import "../css/defect-details.scss";
// import "../css/AdminProjects.scss";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";
import Services from "../Services";
import Select from "react-select";
import "../../src/App.css";
import { toast } from "react-toastify";

const emailValidation =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Borrower = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const navigate = useNavigate();

  const validation = Yup.object().shape({
    bFirstName: Yup.string().required("First Name is Required"),
    bLastName: Yup.string().required("Last Name is Required"),
    loanAmount: Yup.string().matches("^(?=.*[0-9])", "Enter Only Numberic Values").required("Loan Amount is Required"),
    loanTerm: Yup.object().required("Loan Term is Required"),
    monthlyPay: Yup.string().required("Monthly Payment is Required"),
    password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(8, "Password Required Minimum 8 Characters")
      .required("Password is required"),
    pmi: Yup.string().required("PMI is Required"),
    email: Yup.string()
      .required(" Email is Required")
      .matches(emailValidation, "Email is Not Valid")
      .typeError("Enter Valid Email")
      .required("Email is Required"),
    escrowTax: Yup.string().required("Escrow Tax is Required"),
    phoneNo: Yup.string()
      .required("Phone Number is Required")
      .matches(/^[0-9\s]+$/, "Enter valid Phone Number")
      .min(10, "Enter Valid Number")
      .max(10, "Enter Valid Number"),
    escrowIns: Yup.string().required("Escrow Insurance is Required"),
    loanNo: Yup.string().required("Loan Number is Required"),
    escrowTaxAdv: Yup.string().required("Escrow Tax Advance is Required"),
    loanOrgDate: Yup.string().required("Loan Origination Date is Required"),
    escrowInsAdv: Yup.string().required("Escrow Insurance is Required"),
    routingNo: Yup.string().required("Routing Number is Required"),
    ssn: Yup.string().required("SSN  is Required"),
    accountNo: Yup.string().required("Account Number is Required"),
    userName: Yup.string().required("User Name is Required"),
    loanInterestPercentage: Yup.number().required("Loan Interst Percentage is Required"),
    loanBalance: Yup.string()
      .matches("^(?=.*[0-9])", "Enter Only Numberic Values")
      .required("Loan Balance is required"),
  });
  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const submit = (values, { resetForm }) => {
    let userId = localStorage.getItem("userId");
    let data = {
      firstName: values.bFirstName,
      lastName: values.bLastName,
      loanAmount: values.loanAmount,
      loanTerm: values.loanTerm,
      loanInterestPercentage: values.loanInterestPercentage,
      monthlyPaymentDue: values.monthlyPay,
      pmi: values.pmi,
      escrowTax: values.escrowTax,
      escrowInsurance: values.escrowIns,
      escrowTaxAdvance: values.escrowTaxAdv,
      escrowInsuranceAdvance: values.escrowInsAdv,
      userName: values.userName,
      password: values.password,
      ssn: values.ssn,
      email: values.email,
      phoneNumber: values.phoneNo,
      loanNumber: values.loanNo,
      loanBalance: values.loanBalance,
      routingNumber: values.routingNo,
      accountNumber: values.accountNo,
      loanOriginationDate: values.loanOrgDate,
      createdBy: userId,
    };

    Services.CreateBorrower(data)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err);
        if (err?.status == 409) {
          toast.error("Enter Valid Details");
          resetForm({ values: "" });
          
        }
      });
  };

  const options = [
    { value: "15 Year", label: "15 Year" },
    { value: "20 Year", label: "20 Year" },
    { value: "30 Year", label: "30 Year" },
  ];

  const initialValues = {
    bFirstName: "",
    bLastName: "",
    loanAmount: "",
    loanTerm: "",
    monthlyPay: "",
    password: "",
    pmi: "",
    email: "",
    escrowTax: "",
    phoneNo: "",
    escrowIns: "",
    loanNo: "",
    escrowTaxAdv: "",
    loanOrgDate: "",
    escrowInsAdv: "",
    routingNo: "",
    ssn: "",
    accountNo: "",
    userName: "",
    loanInterestPercentage: "",
    loanBalance: "",
  };
  return (
    <>
      <Row>
        <Col md={4} lg={4} className="bg-light ">
          <div class="w-100 h-100 d-flex ">
            <div class="w-100 h-100 d-flex justify-content-center align-items-center  p-5 mb-5 mt-4    ">
              <Avatar name="Aviar Technology" size="200px" round={true} />
            </div>
          </div>
        </Col>

        <Col md={8} lg={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={(values, { resetForm }) => submit(values, { resetForm })}
          >
            {(Formik) => {
              const { values, handleChange, handleBlur, setFieldValue, handleSubmit } = Formik;

              return (
                <Form onSubmit={handleSubmit} className="m-5">
                  <Row>
                    <h4 className="text-center mb-4">Loan Admin</h4>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Borrower First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="bFirstName"
                          placeholder="Enter First Name"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.bFirstName}
                        />
                        <ErrorMessage className="text-danger" component="span" name="bFirstName" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Borrower Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          name="bLastName"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.bLastName}
                        />
                        <ErrorMessage className="text-danger" component="span" name="bLastName" />
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">User Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="userName"
                          placeholder="Enter User Name"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.userName}
                        />
                        <ErrorMessage className="text-danger" component="span" name="userName" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Loan Amount</Form.Label>
                        <Form.Control
                          type="text"
                          name="loanAmount"
                          placeholder="Enter Loan Amount "
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.loanAmount}
                        />
                        <ErrorMessage className="text-danger" component="span" name="loanAmount" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Loan Term</Form.Label>
                        <Select name="loanTerm" options={options} onChange={(e) => setFieldValue("loanTerm", e)} />
                        <ErrorMessage className="text-danger" component="span" name="loanTerm" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Loan Interest Percentage</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            name="loanInterestPercentage"
                            placeholder="Loan Interest Percentage"
                            onChange={handleChange}
                            onblur={handleBlur}
                            value={values.loanInterestPercentage}
                          />
                          <InputGroup.Text>
                            <FaPercent size={13} color="light-black" />
                          </InputGroup.Text>
                        </InputGroup>
                        <ErrorMessage className="text-danger" component="span" name="loanInterestPercentage" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Loan Balance</Form.Label>
                        <Form.Control
                          type="text"
                          name="loanBalance"
                          placeholder="Enter Loan Balance"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.loanBalance}
                        />
                        <ErrorMessage className="text-danger" component="span" name="loanBalance" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Monthly Payment Due</Form.Label>
                        <Form.Control
                          type="text"
                          name="monthlyPay"
                          placeholder="Enter Monthly Payment"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.monthlyPay}
                        />
                        <ErrorMessage className="text-danger" component="span" name="monthlyPay" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Password</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                            onblur={handleBlur}
                            value={values.password}
                          />
                          <InputGroup.Text>
                            {passwordShown ? (
                              <FaEye onClick={tooglePasswordVisibility} size={20} />
                            ) : (
                              <FaEyeSlash onClick={tooglePasswordVisibility} size={20} />
                            )}
                          </InputGroup.Text>
                        </InputGroup>
                        <ErrorMessage className="text-danger" component="span" name="password" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">PMI</Form.Label>
                        <Form.Control
                          type="text"
                          name="pmi"
                          placeholder="Enter PMI value"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.pmi}
                        />
                        <ErrorMessage className="text-danger" component="span" name="pmi" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Email </Form.Label>
                        <Form.Control
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.email}
                        />
                        <ErrorMessage className="text-danger" component="span" name="email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">Escrow Tax </Form.Label>
                        <Form.Control
                          type="text"
                          name="escrowTax"
                          placeholder="Enter Escrow Tax"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.escrowTax}
                        />
                        <ErrorMessage className="text-danger" component="span" name="escrowTax" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phoneNo"
                          placeholder="Enter Phone Number"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.phoneNo}
                        />
                        <ErrorMessage className="text-danger" component="span" name="phoneNo" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">Escrow Insurance </Form.Label>
                        <Form.Control
                          type="text"
                          name="escrowIns"
                          placeholder="Enter Escrow Insurance"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.escrowIns}
                        />
                        <ErrorMessage className="text-danger" component="span" name="escrowIns" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3  ">
                        <Form.Label className="required">Loan Number </Form.Label>
                        <Form.Control
                          type="text"
                          name="loanNo"
                          placeholder="Enter Loan Number"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.loanNo}
                        />
                        <ErrorMessage className="text-danger" component="span" name="loanNo" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">Escrow Tax Advance </Form.Label>
                        <Form.Control
                          type="text"
                          name="escrowTaxAdv"
                          placeholder="Enter Tax Advance"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.escrowTaxAdv}
                        />
                        <ErrorMessage className="text-danger" component="span" name="escrowTaxAdv" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Loan Origination Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="loanOrgDate"
                          placeholder="Enter Loan Origination Date"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.loanOrgDate}
                        />
                        <ErrorMessage className="text-danger" component="span" name="loanOrgDate" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">Escrow Insurance Advance</Form.Label>
                        <Form.Control
                          type="text"
                          name="escrowInsAdv"
                          placeholder="Enter Escrow Insurance"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.escrowInsAdv}
                        />
                        <ErrorMessage className="text-danger" component="span" name="escrowInsAdv" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3  ">
                        <Form.Label className="required">Routing Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="routingNo"
                          placeholder="Enter Routing Number"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.routingNo}
                        />
                        <ErrorMessage className="text-danger" component="span" name="routingNo" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">SSN</Form.Label>
                        <Form.Control
                          type="text"
                          name="ssn"
                          placeholder="Enter SSN"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.ssn}
                        />
                        <ErrorMessage className="text-danger" component="span" name="ssn" />
                      </Form.Group>
                    </Col>
                    <Col sm={true}>
                      <Form.Group className="mb-3 ">
                        <Form.Label className="required">Account Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="accountNo"
                          placeholder="Enter Account Number"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.accountNo}
                        />
                        <ErrorMessage className="text-danger" component="span" name="accountNo" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="my-3 d-flex justify-content-end ">
                      <Button variant="outline-secondary" onClick={() => navigate(-1)} className="me-2">
                        CANCEL
                      </Button>
                      <Button variant="info" className="px-3 btn-sample" type="submit">
                        CREATE BORROWER
                      </Button>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default Borrower;
