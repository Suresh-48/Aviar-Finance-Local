import React from "react";
import { Container, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../css/login.scss";
function passwordforgot() {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    borderStyle: "",
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("required"),
    name: Yup.string().required("required"),
    date: Yup.string().required("required"),
  });

  const submitForm = (values) => {
  };
  return (
    <div>
      <Container style={loginPageStyle} className="container">
        <Formik
          initialValues={{
            email: "",
            date: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => submitForm(values)}
        >
          {(formik) => {
            const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
            return (
              <Container className="container-forgot">
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center"> Forgot your Password</h2>
                  <hr />
                  <p className="text-center">Enter your Date of Birth and Email </p>

                  <Form.Group>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" name="date" id="date" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="date" />
                  </Form.Group>
                  <FormGroup className="mt-3">
                    <FormLabel>Email</FormLabel>
                    <Form.Control type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="email" />
                  </FormGroup>

                  <Form.Group className="mt-3">
                    <br />
                    <Link className="calculators" to={{ pathname: "/resetpassword" }}>
                      <Button className="button_1" type="submit" disabled={!isValid}>
                        Submit
                      </Button>
                    </Link>
                  </Form.Group>
                </Form>
              </Container>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}

export default passwordforgot;
