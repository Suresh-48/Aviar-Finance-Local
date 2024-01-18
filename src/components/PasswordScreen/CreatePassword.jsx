import React, { useState } from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../../css/login.scss";
import Services from "../../Services";
import { useNavigate, useLocation } from "react-router-dom";
import Img from "../../Image/Img.jpg";
import { TiMail } from "react-icons/ti";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

function CreatePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const toogleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const location = useLocation();

  const adminvalidation = Yup.object().shape({
    password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(6, "Password Required Minimum 6 Characters")
      .required("Password is Required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Confirm Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .required("Confirm Password is Required"),
  });

  const navigate = useNavigate();

  const submitForm = (values) => {
    const userId = location.state.userId;
    Services.UpdateBorrowerDetails(userId, values).then((res) => {
      toast.success("Password Created Successfully! Please Login to Continue");
      navigate(`/borrower/login`);
    });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{
        height: "100vh",
      }}
    >
      <Row className="card shadow-lg align-items-center justify-content-center w-50 flex-row p-2">
        <Col className=" d-flex justify-content-center m-0" sm="12" md="6" lg="6">
          <img src={Img} alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Col>
        <Col className="m-0" sm="12" md="6" lg="6">
          <Formik
            initialValues={{ password: "", ConfirmPassword: "" }}
            validationSchema={adminvalidation}
            onSubmit={(values) => {
              submitForm(values);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur, values } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <h4 className="text-center my-5">Create Password</h4>
                  <Row>
                    <Col sm={true}>
                      <Form.Group className="mb-3">
                        <Form.Label className="required">Password</Form.Label>
                        <InputGroup>
                          <Form.Control
                            name="password"
                            placeholder="Enter Your Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
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
                        <ErrorMessage name="password" className="text-danger" component="span" />
                      </Form.Group>

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
                  <Form.Group className="m-5 text-center ">
                    <Button type="submit" className="w-75" disabled={!isValid}>
                      Create
                    </Button>
                  </Form.Group>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePassword;
