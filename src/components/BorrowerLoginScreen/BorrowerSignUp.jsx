import React, { useState } from "react";
import { Form, Button, FormGroup, Col, Row, InputGroup } from "react-bootstrap";
import { ErrorMessage, Formik } from "formik";
import singupImage from "../../Image/signup.png";
import * as Yup from "yup";
import "../../css/login.scss";
import { useNavigate } from "react-router-dom";
import { TiMail } from "react-icons/ti";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Services from "../../Services";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import moment from "moment";

const SignupForm = () => {
  const [SSNshown, setSSNshown] = useState(false);

  const navigate = useNavigate();

  const toogleSSNvisibility = () => {
    setSSNshown(!SSNshown);
  };

  const validationSchema = Yup.object({
    socialSecurityNumber: Yup.string().required("Social Security Number is Required"),
    dob: Yup.date().required("Date of Birth is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    dob: Yup.string().nullable().required("Date of Birth is Required"),
  });

  const singupSubmit = (values) => {
    Services.borrowerSignup(values)
      .then((res) => {
        if (res.status === 200) {
          if (res?.userData?.password) {
            navigate(`/borrower/login`);
          } else {
            navigate("/password/create", {
              state: { userId: res?.userData?.id },
            });
          }
        } else {
          toast.error("Account yet to be created!");
        }
      })
      .catch((error) => {
        toast.error("Invalid Credentials!");
      });
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // Create a range of years using Array.from
  const years = Array.from({ length: 101 }, (_, index) => 1950 + index);

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light"
      style={{
        height: "100vh",
      }}
    >
      <Row className="card shadow-lg align-items-center justify-content-center flex-row p-5" style={{ width: "80%" }}>
        <Col className="m-0 d-flex justify-content-center" sm="12" md="6" lg="6">
          <img src={singupImage} alt="img" style={{ width: "250px", height: "250px" }} />
        </Col>
        <Col className="m-0" sm="12" md="6" lg="6">
          <Formik
            initialValues={{
              socialSecurityNumber: "",
              dob: "",
              lastName: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              singupSubmit(values);
            }}
          >
            {(formik) => {
              const { handleChange, handleSubmit, setFieldValue, isValid, handleBlur, values } = formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <h3 className="text-center">Borrower Sign Up</h3>
                  <FormGroup className="m-4 mt-5" controlId="ssn">
                    <Form.Label className="required mb-0">Last Name</Form.Label>
                    <Form.Control
                      placeholder="Last Name"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage className="error text-danger" component="span" name="lastName" />
                  </FormGroup>
                  <FormGroup className="m-4 " controlId="ssn">
                    <Form.Label className="required mb-0">Social Security Number</Form.Label>
                    <InputGroup>
                      <Form.Control
                        placeholder="Social Security Number"
                        name="socialSecurityNumber"
                        value={values.socialSecurityNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type={SSNshown ? "text" : "password"}
                      />
                      <InputGroup.Text>
                        {SSNshown ? (
                          <FaEye onClick={toogleSSNvisibility} size={20} />
                        ) : (
                          <FaEyeSlash onClick={toogleSSNvisibility} size={25} />
                        )}
                      </InputGroup.Text>
                    </InputGroup>
                    <ErrorMessage className="error text-danger" component="span" name="socialSecurityNumber" />
                  </FormGroup>
                  <Form.Group controlId="dob" className="m-4 d-flex flex-column">
                    <Form.Label className="required mb-0">Date of Birth</Form.Label>

                    {/* <Form.Control
                      placeholder="Date of Birth"
                      type="date"
                      name="dob"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /> */}
                    <DatePicker
                      renderCustomHeader={({ date, changeYear, changeMonth }) => (
                        <div
                          style={{
                            margin: 10,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <select
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(value)}
                            className="mx-3"
                            style={{ width: "80px", height: "25px", borderRadius: "5px" }}
                          >
                            {years.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>

                          <select
                            className="mx-3"
                            style={{ height: "25px", borderRadius: "5px" }}
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                          >
                            {months.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                      selected={values.dob ? new Date(values.dob) : null}
                      onChange={(date) => {
                        // Ensure that formik's handleChange is called with the correct parameters
                        handleChange({
                          target: {
                            name: "dob",
                            value: date ? moment(date).format("MM/DD/YYYY") : null,
                          },
                        });
                      }}
                      className="form-control"
                      todayButton="TODAY"
                      dateFormat="MM/dd/YYY"
                      isClearable={values.dob ? true : false}
                      placeholderText="Date of Birth"
                      name="dob"
                    />
                    <ErrorMessage className="error text-danger" component="span" name="dob" />
                  </Form.Group>
                  <Form.Group className="m-5 text-center ">
                    <Button type="submit" className="w-75" disabled={!isValid}>
                      Submit
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
};

export default SignupForm;
