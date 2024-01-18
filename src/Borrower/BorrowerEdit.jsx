import React, { useEffect, useState } from "react";
import { Col, Form, Row, Button, InputGroup } from "react-bootstrap";
import Select from "react-select";
import Avatar from "react-avatar";
import { ErrorMessage, Formik } from "formik";
import { FaEyeSlash, FaEye, FaUserEdit } from "react-icons/fa";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../Services";
import { toast } from "react-toastify";

const BorrowerEdit = () => {
  const [data, setData] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const getBorrowerDetails = () => {
    let borrowerId = params?.id;
    Services.GetBorrowerDetails(borrowerId).then((res) => {
      setData(res?.data?.doc);
    });
  };

  useEffect(() => {
    getBorrowerDetails();
  }, [params?.id]);

  //Validation
  const validation = Yup.object().shape({
    borrowerFirstName: Yup.string().required("Borrower First Name is Required"),
    borrowerLastName: Yup.string().required("Borrower Last Name is Required"),
    showLoanBalance: Yup.string().required("Loan Balance is Required"),
    monthlyPayDue: Yup.string().required("Monthly Pay Due is Required"),
    // loanOriginationDate: Yup.string().required("Loan Orgination Date is  Required"),
    password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(8, "Password Required Minimum 8 Characters")
      .required("Password is Required"),
    paymentOption: Yup.object().required("Payment Option is Required"),
  });
  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  //Patch Api Update
  const submit = (values) => {
    let borrowerId = params?.id;
    let data = {
      password: values.password,
      paymentOption: values.paymentOption,
    };
    Services.UpdateBorrowerDetails(borrowerId, data)
      .then((res) => {
        let firstName = localStorage.getItem("firstName");
        let lastName = localStorage.getItem("lastName");
        navigate(`/borrower/${firstName}${lastName}`);
      })
      .catch((error) => {
        toast.error(error?.response);
      });
  };

  return (
    <div class="container justify-content-evenly  " style={{ marginTop: "125px" }}>
      <Row>
        <Col md={4} lg={4} className="bg-light ">
          <div class="w-100 h-100 d-flex  ">
            <div class="w-100 h-100 d-flex justify-content-center align-items-center p-3">
              <Avatar
                name={`${data?.firstName}   ${data?.lastName}`}
                size="150px"
                align-items-center
                round={true}
                className="avathar-image Container-arrange"
              />
            </div>
          </div>
        </Col>
        <Col>
          <Formik
            enableReinitialize={true}
            initialValues={{
              borrowerFirstName: data?.firstName,
              borrowerLastName: data?.lastName,
              showLoanBalance: data?.loanBalance,
              monthlyPayDue: data?.monthlyPaymentDue,
              loanOriginationDate: data?.loanOriginationDate,
              paymentOption: data?.paymentOption,
              password: data?.password,
            }}
            validationSchema={validation}
            onSubmit={(values) => {
              submit(values);
            }}
          >
            {(Formik) => {
              const { values, handleChange, setFieldValue, handleBlur, handleSubmit } = Formik;
              return (
                <div class="d-flex justify-content-center mb-4  px-2 ">
                  <div className="w-100 h-100 flex  justify-content-center ">
                    <Form onSubmit={handleSubmit}>
                      <div class="d-flex justify-content-center mb-4 borrower-log">
                        <div class="mr-auto p-2 mt-4">
                          <h4 className="text-center d-flex justify-content-center align-items-center">
                            <b className="me-2" style={{ color: "#1a77c9" }}>
                              <FaUserEdit /> Edit
                            </b>
                            Borrower
                          </h4>
                        </div>
                      </div>
                      <Row>
                        <Col class="d-flex justify-content-center ">
                          <Form.Group className="mb-3 ">
                            <Form.Label className="required">Borrower First Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="borrowerFirstName"
                              value={values.borrowerFirstName}
                              onChange={handleChange}
                              onblur={handleBlur}
                              placeholder="Ram"
                              readOnly={true}
                            />
                            <ErrorMessage className="text-danger" component="span" name="borrowerFirstName" />
                          </Form.Group>
                          <Form.Group className="mb-3 ">
                            <Form.Label className="required">Borrower Last Name</Form.Label>
                            <Form.Control
                              name="borrowerLastName"
                              value={values.borrowerLastName}
                              type="text"
                              readOnly={true}
                              placeholder="raj"
                              onChange={handleChange}
                              onblur={handleBlur}
                            />
                            <ErrorMessage className="text-danger" component="span" name="borrowerLastName" />
                          </Form.Group>
                          <Form.Group className="mb-3 ">
                            <Form.Label className="required">Show Loan Balance</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="10,0000"
                              value={values.showLoanBalance}
                              readOnly={true}
                              name="showLoanBalance"
                              onChange={handleChange}
                              onblur={handleBlur}
                            />
                            <ErrorMessage className="text-danger" component="span" name="showLoanBalance" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3 editright ">
                            <Form.Label className="required">Monthly Payment Due</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="25,000"
                              value={values.monthlyPayDue}
                              readOnly={true}
                              name="monthlyPayDue"
                              onChange={handleChange}
                              onblur={handleBlur}
                            />
                            <ErrorMessage className="text-danger" component="span" name="monthlyPayDue" />
                          </Form.Group>
                          <Form.Group className="mb-3  ">
                            <Form.Label className="required">Loan Origination Date</Form.Label>
                            <Form.Control
                              type="date"
                              readOnly={true}
                              value={values.loanOriginationDate}
                              name="loanOriginationDate"
                              onChange={handleChange}
                              onblur={handleBlur}
                              placeholder="Enter Loan Origination Date"
                            />
                            <ErrorMessage className="text-danger" component="span" name="loanOriginationDate" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3  ">
                            <Form.Label className="required">Payment Options</Form.Label>
                            <Select
                              placeholder="Select Payable options"
                              value={values.paymentOption}
                              type="select"
                              name="paymentOption"
                              onBlur={handleBlur}
                              onChange={(e) => {
                                setFieldValue("paymentOption", e);
                              }}
                              options={[
                                {
                                  value: "Online Payment",
                                  label: "Online Payment",
                                },
                                {
                                  value: "AutoMatic Payment",
                                  label: "AutoMatic Payment",
                                },
                              ]}
                            />
                            <ErrorMessage className="text-danger" component="span" name="paymentOption" />
                          </Form.Group>
                          <Form.Group className="mb-3 ">
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
                        <Col className="mt-3  d-flex justify-content-end ">
                          <Button variant="secondary" onClick={() => navigate(-1)} className="me-2" type="button">
                            Cancel
                          </Button>
                          <Button variant="primary" className="ms-2 submit" type="submit">
                            Update Details
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </div>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </div>
  );
};
export default BorrowerEdit;
