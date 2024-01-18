import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { FaEyeSlash, FaEye, FaUserEdit } from "react-icons/fa";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Services from "../Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const emailValidation =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AdminEdit = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [data, setData] = useState();
  const naviagate = useNavigate();
  let userId = localStorage.getItem("userId");
  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");

  const getAdminDetails = () => {
    Services.getUserDetails(userId).then((res) => {
      setData(res?.data?.doc);
    });
  };

  useEffect(() => {
    getAdminDetails();
  }, []);

  const adminvalidation = Yup.object().shape({
    FirstName: Yup.string().required("First Name is Required"),
    LastName: Yup.string().required("Last  Name is Required"),
    Email: Yup.string()
      .required(" Email is Required")
      .matches(emailValidation, "Email is Not Valid")
      .typeError("Enter Valid Email")
      .required("Email is Required"),
    PhoneNumber: Yup.string()
      .required("Phone Number is Required")
      // .matches(/^[0-9\s]$/, "Enter Valid Phone Number")
      .min(10, "Enter Valid Number")
      .max(10, "Enter Valid Number"),

    Password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(8, "Password Required Minimum 8 Characters")
      .required("Password is Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Confirm Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .required("Confirm Password is Required"),
  });
  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const toogleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const submitForm = (values) => {
    const data = {
      firstName: values.FirstName,
      lastName: values.LastName,
      email: values.Email,
      password: values.Password,
      passwordConfirm: values.ConfirmPassword,
      phoneNo: values.PhoneNumber,
    };
    Services.UpdateUserDetails(userId, data).then((res) => {
      toast.success("Admin Details Updated Successfully");
      // Timeout function;
      setTimeout(() => {
        naviagate("/dashboard");
      }, 1000);
    });
  };
  return (
    <Container style={{ marginTop: "125px" }}>
      <div>
        <Row>
          {/* <Col md={4} lg={4} className="bg-light ">
            <div class="w-100 h-100 d-flex ">
              <div class="w-100 h-100 d-flex justify-content-center align-items-center p-3">
                <Avatar
                  name={`${firstName} ${lastName}`}
                  size="150px"
                  align-items-center
                  round={true}
                  className="avathar-image Container-arrange"
                />
              </div>
            </div>
          </Col> */}

          <Col>
            <Formik
              enableReinitialize={true}
              initialValues={{
                FirstName: data?.firstName,
                LastName: data?.lastName,
                PhoneNumber: data?.phoneNo,
                Email: data?.email,
                Password: data?.password,
                ConfirmPassword: data?.passwordConfirm,
              }}
              validationSchema={adminvalidation}
              onSubmit={(values, { resetForm }) => {
                submitForm(values, { resetForm });
              }}
            >
              {(Formik) => {
                const { values, handleChange, handleBlur, handleSubmit } = Formik;
                return (
                  <div class="d-flex justify-content-center mb-4  px-2 ">
                    <div className="w-100 h-100 flex  justify-content-center ">
                      <Form onSubmit={handleSubmit}>
                        <div class="d-flex justify-content-center mb-4 ">
                          <div class="mr-auto p-2 mt-4">
                            <h4 className="text-center d-flex justify-content-center align-items-center">
                              <b className="me-2" style={{ color: "#1a77c9" }}>
                                <FaUserEdit /> Edit
                              </b>
                              Admin Details
                            </h4>
                          </div>
                        </div>
                        <Row className="d-flex flex-row">
                          <Col xs={12} md={6} class="d-flex justify-content-center ">
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">First Name</Form.Label>
                              <Form.Control
                                name="FirstName"
                                type="text"
                                placeholder="Enter First Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.FirstName}
                              />
                              <ErrorMessage name="FirstName" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">Last Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="LastName"
                                placeholder="Enter Last Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.LastName}
                              />
                              <ErrorMessage name="LastName" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">Phone Number</Form.Label>
                              <Form.Control
                                type="tel"
                                name="PhoneNumber"
                                placeholder="Enter Phone Number"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.PhoneNumber}
                                maxLength={10}
                              />
                              <ErrorMessage name="PhoneNumber" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">Email</Form.Label>
                              <Form.Control
                                type="text"
                                name="Email"
                                placeholder="Enter Your Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.Email}
                              />
                              <ErrorMessage name="Email" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">Password</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  name="Password"
                                  placeholder="Enter Your Password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.Password}
                                  type={passwordShown ? "text" : "password"}
                                />

                                <InputGroup.Text>
                                  {passwordShown ? (
                                    <FaEye onClick={tooglePasswordVisibility} size={20} />
                                  ) : (
                                    <FaEyeSlash onClick={tooglePasswordVisibility} size={20} />
                                  )}
                                </InputGroup.Text>
                              </InputGroup>
                              <ErrorMessage name="Password" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group className="mb-3 ">
                              <Form.Label className="required">Confirm Password</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  name="ConfirmPassword"
                                  placeholder="Enter Confirm Password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.ConfirmPassword}
                                  type={confirmPasswordShown ? "text" : "password"}
                                />

                                <InputGroup.Text>
                                  {confirmPasswordShown ? (
                                    <FaEye onClick={toogleConfirmPasswordVisibility} size={20} />
                                  ) : (
                                    <FaEyeSlash onClick={toogleConfirmPasswordVisibility} size={20} />
                                  )}
                                </InputGroup.Text>
                              </InputGroup>
                              <ErrorMessage name="ConfirmPassword" className="text-danger" component="span" />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col className="mt-3  d-flex justify-content-end ">
                            <Button
                              variant="secondary"
                              className="me-0"
                              onClick={() => {
                                naviagate(-1);
                              }}
                            >
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
    </Container>
  );
};

export default AdminEdit;
