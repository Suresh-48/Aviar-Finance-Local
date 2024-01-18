import React from "react";
import { useState } from "react";
import { Container, Form, Button, InputGroup, FormLabel } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
function Resetpassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };
  const loginSchema = Yup.object().shape({
    password: Yup.string().required("required"),
    confirm_password: Yup.string().required("required"),
  });

  const submitForm = (values) => {
  };
  return (
    <div>
      <Container className="container-forgot">
        <Formik
          initialValues={{
            password: "",
            confirm_password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => submitForm(values)}
        >
          {(formik) => {
            const { handleChange, handleSubmit, isValid, handleBlur } = formik;
            return (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center"> Forgot your Password</h2>
                  <hr />
                  <p className="text-center">Enter your New Password </p>

                  <Form.Label>New Password</Form.Label>
                  <InputGroup className="mt-3">
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      name="passsword"
                      id="passsword"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <InputGroup.Text>{passwordShown ? <FaEye size={1} /> : <FaEyeSlash size={1} />}</InputGroup.Text>
                  </InputGroup>
                  <ErrorMessage className="error text-danger" component="span" name="password" />

                  <Form.Group>
                    <FormLabel>Confirm password</FormLabel>
                    <InputGroup className="mt-3">
                      <Form.Control
                        type={passwordShown ? "text" : "password"}
                        name="confirm_passsword"
                        id="passsword"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <InputGroup.Text>{passwordShown ? <FaEye size={1} /> : <FaEyeSlash size={1} />}</InputGroup.Text>
                    </InputGroup>
                    <ErrorMessage className="error text-danger" component="span" name="confirm_password" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <br />
                    <Button type="submit" className="button_1" disabled={!isValid}>
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

export default Resetpassword;
