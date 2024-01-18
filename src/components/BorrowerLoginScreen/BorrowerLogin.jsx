import React, { useState } from "react";
import { Form, Button, FormGroup, FormLabel, Col, Row, InputGroup } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../../css/login.scss";
import Services from "../../Services";
import { useNavigate } from "react-router-dom";
import login from "../../Image/login.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { TiMail } from "react-icons/ti";

function BorrowerLogin() {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const submitForm = (values) => {
    Services.login(values)
      .then((res) => {
        const data = res?.user;
        const borrowerLoanDatas = res?.userLoanDatas;
        localStorage.setItem("role", data?.role);
        localStorage.setItem("firstName", data?.firstName);
        localStorage.setItem("lastName", data?.lastName);
        localStorage.setItem("employeId", data?.userId);
        localStorage.setItem("userId", data?.id);
        localStorage.getItem("token", data?.token);
        localStorage.getItem("email", data?.email);
        // if (data?.role === "admin") {
        //   navigate("/dashboard");
        // } else {
        localStorage.setItem("borrowerId", data?.borrowerId?._id);
        navigate(`/borrower/loan/count`, {
          state: {
            data: data,
            userLoanDatas: borrowerLoanDatas,
          },
        });
        // navigate(`/borrower/${data?.firstName}${data?.lastName}`);
        // }
      })
      .catch((error) => {
        toast.error("Invalid login Credential!..");
        if (error.response && error.response.status >= 400) {
          let errorMessage;
          const errorRequest = error.response.request;
          if (errorRequest && errorRequest.response) {
            errorMessage = JSON.parse(errorRequest.response).message;
          }
          toast.error(error.response.data.message);
        }
      });
  };
  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{
        height: "100vh",
      }}
    >
      <Row className="card shadow-lg align-items-center justify-content-center w-75 flex-row p-2">
        <Col className="m-0" sm="12" md="6" lg="6">
          <img src={login} alt="img" style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Col>
        <Col className="m-0" sm="12" md="6" lg="6">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              submitForm(values);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit, isValid, handleBlur, values } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <h4 className="text-center">Welcome!</h4>
                  <h5 className="text-center">Let's get started</h5>
                  <FormGroup className="m-3">
                    <FormLabel className="required">Email</FormLabel>
                    <InputGroup>
                      <Form.Control
                        autoComplete="off"
                        onPaste={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        onCopy={(e) => {
                          e.preventDefault();
                          return false;
                        }}
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <InputGroup.Text>
                        <TiMail size="25" color="orangered" />
                      </InputGroup.Text>
                    </InputGroup>

                    <ErrorMessage className="error text-danger" component="span" name="email" />
                  </FormGroup>

                  <Form.Group className="m-3">
                    <Form.Label className="required">Password</Form.Label>
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
                        type={passwordShown ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <InputGroup.Text>
                        {passwordShown ? (
                          <FaEye onClick={tooglePasswordVisibility} size={20} />
                        ) : (
                          <FaEyeSlash onClick={tooglePasswordVisibility} size={25} />
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                    <ErrorMessage className="error text-danger" component="span" name="password" />
                  </Form.Group>
                  <Form.Group className="m-5 text-center ">
                    <Button type="submit" className="w-75" disabled={!isValid}>
                      LOG IN
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

export default BorrowerLogin;
