import React, { useState } from "react";
import { Container, Form, Button, InputGroup, FormControl, Row, Col } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "../Signup/signup.scss";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const loginSchema = Yup.object().shape({
    firstname: Yup.string().required("required"),
    lastname: Yup.string().required("required"),
    email: Yup.string().email().required("required"),

    phone_number: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    username: Yup.string().required("required"),
    password: Yup.string().required("required"),
    date: Yup.string().required("required"),
  });

  const submitForm = (values) => {
  };

  return (
    <div>
      <Container className="container-forgot">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            confirmemail: "",
            username: "",
            phone_number: "",
            password: "",
            confirmpassword: "",
            date: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => submitForm(values)}
        >
          {(formik) => {
            const { handleChange, handleSubmit, isValid, handleBlur } = formik;
            return (
              <Container>
                <Form onSubmit={handleSubmit}>
                  <h2 className="text-center">Create an Account</h2>
                  <hr></hr>
                  <p>
                    Your privacy is very important to us. Help us protect your personal information by setting up a
                    secure account for your loan application. By continuing, you agree to our privacy policy published
                    on this site.
                  </p>
                  <Form.Group>
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      name="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage className="error text-danger" component="span" name="firstname" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control type="text" id="name" name="lastname" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="lastname" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" name="date" id="date" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="date" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email Address*</Form.Label>
                    <Form.Control type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Email Address*</Form.Label>
                    <Form.Control type="email" id="email" name="email" onChange={handleChange} onBlur={handleBlur} />
                    <ErrorMessage className="error text-danger" component="span" name="email" />
                  </Form.Group>

                  {/* <Form.Group>
          <Form.Label>Phone Type*</Form.Label><br/>
          <Row>
            <Col>
          <Form.Select className='inlineform' placeholder='Select One'>
            
            <option value="Cell" >Cell</option>
            <option value="Home" >Home</option><span></span>
            
            </Form.Select>
            </Col>
            <Col >
            <Form.Label>Phone Number*</Form.Label><br/>
            <Form.Control type="text"  id="username" name="username" />
            </Col>
            </Row>
        </Form.Group> */}
                  <Row className="mt-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>Phone Type</Form.Label>
                        <Form.Select name="Select One">
                          <option value="Cell">Cell</option>
                          <option value="Home">Home</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="phone_number"
                          placeholder="XXX-XXX-XXXX"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group>
                    <ErrorMessage className="error text-danger" component="span" name="phone_number" />
                    <br />
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      name="username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <ErrorMessage className="error text-danger" component="span" name="username" />
                  <br />

                  <ul className="passrequirment">
                    Password Requirements
                    <li className="passlists">Between 8 and 64 characters</li>
                    <li className="passlists">At least one lowercase character</li>
                    <li className="passlists">At least one uppercase character</li>
                    <li className="passlists">At least one special character</li>
                    <li className="passlists">At least one numeric character</li>
                  </ul>
                  <br />
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <FormControl
                      type={passwordShown ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <InputGroup.Text>{passwordShown ? <FaEye size={1} /> : <FaEyeSlash size={1} />}</InputGroup.Text>
                  </InputGroup>
                  <ErrorMessage className="error text-danger" component="span" name="password" />
                  <br />
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup>
                    <FormControl
                      type={passwordShown ? "text" : "password"}
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <InputGroup.Text>{passwordShown ? <FaEye size={1} /> : <FaEyeSlash size={1} />}</InputGroup.Text>
                  </InputGroup>
                  <ErrorMessage className="error text-danger" component="span" name="password" />

                  <div className="custom-control custom-checkbox mt-3">
                    <Form.Check type="checkbox" label="Remember me" />
                  </div>
                  <Form.Group className="mt-3">
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      style={{ width: "100%" }}
                      disabled={!isValid}
                    >
                      Create Account
                    </Button>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Button
                      type="reset"
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#fff", color: "blue", width: "100%" }}
                    >
                      Cancel
                    </Button>
                  </Form.Group>
                  <br />
                  <p>Already have an account?</p>
                  <Form.Group className="mt-3">
                    <Button className="button_1" style={{ width: "100%" }} onClick={() => navigate("/login")}>
                      Log In
                    </Button>
                  </Form.Group>

                  <br />
                </Form>
              </Container>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}

export default Signup;
// ReactDOM.render(<Signup/>, document.querySelector('#root'));
