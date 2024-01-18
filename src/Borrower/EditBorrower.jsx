import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Services from "../Services";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaUserEdit, FaPercent } from "react-icons/fa";
import * as Yup from "yup";
import Select from "react-select";
import { ErrorMessage, Formik } from "formik";
import { toast } from "react-toastify";

function EditBorrower() {
  let params = useParams();
  const [data, setData] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const getBorrowerDetails = () => {
    let borrowerId = params?.id;
    Services.GetBorrowerDetails(borrowerId).then((res) => {
      setData(res?.data?.doc);
    });
  };
  useEffect(() => {
    getBorrowerDetails();
  }, []);

  const updateBorrower = (values) => {
    let userId = localStorage.getItem("userId");
    let borrowerId = params?.id;
    let data = {
      firstName: values.bFirstName,
      lastName: values.bLastName,
      loanAmount: values.loanAmount,
      loanTerm: values.loanTerm,
      loanInterestPercentage: values.loanInterstPercentage,
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

    Services.UpdateBorrowerDetails(borrowerId, data)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err);
        if (err?.data?.error?.code) {
          toast.error("Details are already exist !  Enter Valid details");
        }
      });
  };

  const options = [
    { value: "15 Year", label: "15 Year" },
    { value: "20 Year", label: "20 Year" },
    { value: "30 Year", label: "30 Year" },
  ];

  const initialValues = {
    bFirstName: data?.firstName,
    bLastName: data?.lastName,
    loanAmount: data?.loanAmount,
    loanTerm: data?.loanTerm,
    monthlyPay: data?.monthlyPaymentDue,
    password: data?.password,
    pmi: data?.pmi,
    email: data?.email,
    escrowTax: data?.escrowTax,
    phoneNo: data?.phoneNumber,
    escrowIns: data?.escrowInsurance,
    loanNo: data?.loanNumber,
    escrowTaxAdv: data?.escrowTaxAdvance,
    loanOrgDate: data?.loanOriginationDate,
    escrowInsAdv: data?.escrowInsuranceAdvance,
    routingNo: data?.routingNumber,
    ssn: data?.ssn,
    accountNo: data?.accountNumber,
    userName: data?.userName,
    loanInterstPercentage: data?.loanInterestPercentage,
    loanBalance: data?.loanBalance,
  };

  const emailValidation =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validation = Yup.object().shape({
    bFirstName: Yup.string().required("First Name is required"),
    bLastName: Yup.string().required("Last Name is required"),
    loanAmount: Yup.string().required("Loan Amount is required"),
    loanTerm: Yup.object().required("Loan Term is required"),
    monthlyPay: Yup.string().required("Monthly Payment is required"),
    password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(8, "Password Required Minimum 8 Characters")
      .required("Password is required"),
    pmi: Yup.string().required("PMI is required"),
    email: Yup.string()
      .required(" Email is Required")
      .matches(emailValidation, "Email is Not Valid")
      .typeError("Enter Valid Email")
      .required("Email is required"),
    escrowTax: Yup.string().required("Escrow Tax is required"),
    phoneNo: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9\s]+$/, "Enter valid Phone Number")
      .min(10, "Enter valid number")
      .max(10, "Enter valid number"),
    escrowIns: Yup.string().required("Escrow Insurance is required"),
    loanNo: Yup.string().required("Loan Number is required"),
    escrowTaxAdv: Yup.string().required("Escrow Tax Advance is required"),
    loanOrgDate: Yup.string().required("Loan Origination date is required"),
    escrowInsAdv: Yup.string().required("Escrow Insurance is required"),
    routingNo: Yup.string().required("Routing Number is required"),
    ssn: Yup.string().required("SSN  is required"),
    accountNo: Yup.string().required("Account Number is required"),
    userName: Yup.string().required("UserName is required"),
    loanInterstPercentage: Yup.number().required("Loan Interst Percentage is required"),
    loanBalance: Yup.string().required("Loan Balance is required"),
  });
  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <Container style={{ marginTop: "125px" }}>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) => updateBorrower(values)}
        >
          {(Formik) => {
            const { values, handleChange, handleBlur, setFieldValue, handleSubmit } = Formik;

            return (
              <Form onSubmit={handleSubmit} className="shadow-lg p-lg-5 p-md-4 p-sm-2 p-xs-2  mb-5 bg-white">
                <h4 className="text-center d-flex justify-content-center align-items-center mb-4 edit-data ">
                  <b className="me-2 " style={{ color: "#1a77c9" }}>
                    <FaUserEdit /> Edit
                  </b>
                  Borrower
                </h4>
                <Row className="p-2">
                  <Col xs="12" md="6" lg="6">
                    <section className="d-flex justify-content-center">
                      <Avatar
                        // name={`${userData?.firstName}   ${userData?.lastName}`}
                        name={`${values.bFirstName} ${values.bLastName} `}
                        size="200px"
                        align-items-center
                        round={true}
                      />
                    </section>
                    <Form.Group className="mb-3 ">
                      <Form.Label className="required mb-0">Borrower First Name</Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required mb-0">Borrower Last Name</Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required mb-0">User Name</Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required mb-0">Email </Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required mb-0">Password</Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required mb-0">Phone Number</Form.Label>
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
                  <Col>
                    <Form.Group className="mb-3 mt-2">
                      <Form.Label className="required mb-0">PMI</Form.Label>
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
                    <Form.Group className="mb-3 ">
                      <Form.Label className="required mb-0">Escrow Tax </Form.Label>
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
                    <Form.Group className="mb-3 ">
                      <Form.Label className="required mb-0">Escrow Insurance </Form.Label>
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
                    <Row>
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3 ">
                          <Form.Label className="required mb-0">Escrow Tax Advance </Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3 ">
                          <Form.Label className="required mb-0">Escrow Insurance Advance</Form.Label>
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
                    </Row>

                    <Row>
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3">
                          <Form.Label className="required mb-0">Monthly Payment Due</Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3">
                          <Form.Label className="required mb-0">Loan Origination Date</Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3">
                          <Form.Label className="required mb-0">Loan Amount</Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3">
                          <Form.Label className="required mb-0">Loan Term</Form.Label>
                          <Select
                            name="loanTerm"
                            options={options}
                            value={values.loanTerm}
                            onChange={(e) => setFieldValue("loanTerm", e)}
                          />
                          <ErrorMessage className="text-danger" component="span" name="loanTerm" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3">
                          <Form.Label className="required mb-0">Loan Balance</Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3  ">
                          <Form.Label className="required mb-0">Loan Number </Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3 ">
                          <Form.Label className="required mb-0">Account Number </Form.Label>
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
                      <Col xs="12" md="6" lg="6">
                        <Form.Group className="mb-3  ">
                          <Form.Label className="required mb-0">Routing Number</Form.Label>
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
                    <Form.Group className="mb-3 ">
                      <Form.Label className="required mb-0">SSN</Form.Label>
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
                    <Form.Group className="mb-3">
                      <Form.Label className="required">Loan Interest Percentage</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type="text"
                          name="loanInterstPercentage"
                          placeholder="Loan Interest Percentage"
                          onChange={handleChange}
                          onblur={handleBlur}
                          value={values.loanInterstPercentage}
                        />
                        <InputGroup.Text>
                          <FaPercent size={13} color="light-black" />
                        </InputGroup.Text>
                      </InputGroup>
                      <ErrorMessage className="text-danger" component="span" name="loanInterstPercentage" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col className="my-3 d-flex justify-content-end px-4">
                    <Button variant="outline-secondary" onClick={() => navigate(-1)} className="me-2">
                      CANCEL
                    </Button>
                    <Button variant="info" className="px-3 btn-sample" type="submit">
                      Edit Borrower
                    </Button>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </>
  );
}

export default EditBorrower;
