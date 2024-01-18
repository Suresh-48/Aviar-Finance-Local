import React from "react";
import { Container, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../css/login.scss";

function usernameforgot() {
  const loginSchema = Yup.object().shape({
    first_name: Yup.string().required("required"),
    last_name: Yup.string().required("required"),
    email: Yup.string().email().required("required"),
  });

  const submitForm = (values) => {
  };

  return (
    <div>
      <Container className="container-forgot">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => submitForm(values)}
        >
          {(formik) => {
            const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur } = formik;
            return (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center"> Forgot your Username</h2>
                  <hr />
                  <p className="text-center">Enter your First Name,Last Name and Email </p>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="first_name" type="text" id="name" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="first_name" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="last_name" type="text" id="name" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="last_name" />
                  </Form.Group>

                  <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <Form.Control type="email" name="email" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="email" />
                  </FormGroup>

                  <Form.Group className="mt-3">
                    <br />
                    <Button type="submit" className="button_1">
                      Submit
                    </Button>
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

export default usernameforgot;
