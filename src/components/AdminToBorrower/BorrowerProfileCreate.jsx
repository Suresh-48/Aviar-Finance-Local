import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import * as Yup from "yup";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Services from "../../Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import Loader from "../../core/Loader";

function BorrowerProfileCreate() {
  const [shownSSN, setShownSSN] = useState(false);
  const [loanNumberVisible, setLoanNumberVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const toogleLoanNumberVisibility = () => {
  //   setLoanNumberVisible(!loanNumberVisible);
  // };

  const toogleSSNVisibility = () => {
    setShownSSN(!shownSSN);
  };

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
    socialSecurityNumber: Yup.string().required("Social Security Number is Required"),
    dob: Yup.string().nullable().required("Date of Birth is Required"),
    residencyType: Yup.string().required("Residency Type is Required"),
    maritalStatus: Yup.string().required("Marital Status is Required"),
    email: Yup.string().required("Email is Required"),
    cellPhone: Yup.string().required("Cell Phone Number is Required"),
    doorNo: Yup.string().required("Door Number is Required"),
    streetName: Yup.string().required("Street Name is Required"),
    cityName: Yup.string().required("City Name is Required"),
    state: Yup.string().required("State is Required"),
    zipCode: Yup.string().required("Zip Code is Required"),
  });

  const createBorrower = (values) => {
    setIsLoading(true);
    const userId = localStorage.getItem("userId");
    Services.CreateBorrower(values, userId).then((res) => {
      setIsLoading(false);
      if (res.status === 201) {
        toast.success(res.message);
        navigate(`/dashboard`);
      } else {
        toast.error(res.message);
      }
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

  const formatPhoneNumber = (phoneNumber) => {
    // Remove non-numeric characters
    const numericOnly = phoneNumber.replace(/\D/g, "");

    // Apply USA format (assuming 10-digit phone number)
    const formattedNumber = `(${numericOnly.slice(0, 3)}) ${numericOnly.slice(3, 6)}-${numericOnly.slice(6, 10)}`;

    return formattedNumber;
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <div style={{ marginTop: "125px" }}>
          <Formik
            initialValues={{
              firstName: "",
              middleName: "",
              lastName: "",
              socialSecurityNumber: "",
              dob: "",
              residencyType: "",
              maritalStatus: "",
              email: "",
              cellPhone: "",
              workPhone: "",
              homePhone: "",
              doorNo: "",
              streetName: "",
              cityName: "",
              state: "",
              zipCode: "",
            }}
            validationSchema={validateSchema}
            onSubmit={(values) => createBorrower(values)}
          >
            {(Formik) => {
              const { handleChange, handleSubmit, handleBlur, values, error } = Formik;
              return (
                <Form onSubmit={handleSubmit}>
                  <Container>
                    <div className="d-flex justify-content-center m-5">
                      <h3>Borrower Creation</h3>
                    </div>
                    <Row>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">First Name</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.firstName}
                            onBlur={handleBlur}
                            name="firstName"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="firstName" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="mb-0">Middle Name</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.middleName}
                            onBlur={handleBlur}
                            name="middleName"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Last Name</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.lastName}
                            onBlur={handleBlur}
                            name="lastName"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="lastName" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={6} className="mb-4">
                      <Form.Group>
                          <Form.Label className="required mb-0">Social Security Number</Form.Label>
                          <InputGroup>
                            <Form.Control
                              style={{ borderRadius: 0 }}
                              onChange={handleChange}
                              value={values.socialSecurityNumber}
                              onBlur={handleBlur}
                              name="socialSecurityNumber"
                              type={shownSSN ? "text" : "password"}
                            />
                            <InputGroup.Text style={{ borderRadius: 0 }}>
                              {shownSSN ? (
                                <FaEye onClick={toogleSSNVisibility} size={20} />
                              ) : (
                                <FaEyeSlash onClick={toogleSSNVisibility} size={20} />
                              )}
                            </InputGroup.Text>
                          </InputGroup>
                          <ErrorMessage className="error text-danger" component="span" name="socialSecurityNumber" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={6} className="mb-4">
                      <Form.Group style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                          <Form.Label className="required mb-0">Date of Birth</Form.Label>
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
                            selected={values.dob}
                            onChange={(date) => {
                              // Ensure that formik's handleChange is called with the correct parameters
                              handleChange({
                                target: {
                                  name: "dob",
                                  value: date,
                                },
                              });
                            }}
                            className="form-control"
                            value={values.dob}
                            todayButton="TODAY"
                            dateFormat="MM/dd/YYY"
                            isClearable={values.dob ? true : false}
                            placeholderText="mm/dd/yyyy"
                            name="dob"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="dob" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={4} className="mb-4 ">
                      <Form.Group>
                          <Form.Label className="required mb-0">Email</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            name="email"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="email" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Residency Type</Form.Label>
                          <Form.Select
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.residencyType}
                            onBlur={handleBlur}
                            name="residencyType"
                          >
                            <option value="" disabled selected>
                              Select Residency Type
                            </option>
                            <option value="Citizen">Citizen</option>
                            <option value="Permanent Resident">Permanent Resident</option>
                            <option value="Non-Permanent Resident">Non-Permanent Resident</option>
                            <option value="Foreigner">Foreigner</option>
                          </Form.Select>
                          <ErrorMessage className="error text-danger" component="span" name="residencyType" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Marital Status</Form.Label>
                          <Form.Select
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.maritalStatus}
                            onBlur={handleBlur}
                            name="maritalStatus"
                          >
                            <option value="" disabled>
                              Select Marital Status
                            </option>
                            <option value="single">Single</option>
                            <option value="married">Married</option>
                            <option value="widowed">Widowed</option>
                            <option value="divorced">Divorced</option>
                            <option value="separated">Separated</option>
                          </Form.Select>
                          <ErrorMessage className="error text-danger" component="span" name="maritalStatus" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group style={{ width: "100%" }}>
                          <Form.Label className="required mb-0">Cell Phone</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const formattedNumber = formatPhoneNumber(inputValue);
                              handleChange({
                                target: {
                                  name: "cellPhone",
                                  value: formattedNumber,
                                },
                              });
                            }}
                            value={values.cellPhone}
                            onBlur={handleBlur}
                            name="cellPhone"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="cellPhone" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="mb-0">Work Phone</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const formattedNumber = formatPhoneNumber(inputValue);
                              handleChange({
                                target: {
                                  name: "workPhone",
                                  value: formattedNumber,
                                },
                              });
                            }}
                            value={values.workPhone}
                            onBlur={handleBlur}
                            name="workPhone"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="mb-0">Home Phone</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const formattedNumber = formatPhoneNumber(inputValue);
                              handleChange({
                                target: {
                                  name: "homePhone",
                                  value: formattedNumber,
                                },
                              });
                            }}
                            value={values.homePhone}
                            onBlur={handleBlur}
                            name="homePhone"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <h4 className="mb-4">Current Address</h4>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Door No</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.doorNo}
                            onBlur={handleBlur}
                            name="doorNo"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="doorNo" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Street Name</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.streetName}
                            onBlur={handleBlur}
                            name="streetName"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="streetName" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">City Name</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.cityName}
                            onBlur={handleBlur}
                            name="cityName"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="cityName" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">State</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.state}
                            onBlur={handleBlur}
                            name="state"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="state" />
                        </Form.Group>
                      </Col>
                      <Col xs={12} md={4} className="mb-4">
                        <Form.Group>
                          <Form.Label className="required mb-0">Zip Code</Form.Label>
                          <Form.Control
                            style={{ borderRadius: 0 }}
                            onChange={handleChange}
                            value={values.zipCode}
                            onBlur={handleBlur}
                            name="zipCode"
                          />
                          <ErrorMessage className="error text-danger" component="span" name="zipCode" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row style={{ display: "flex", justifyContent: "flex-end", padding: 10, paddingTop: 30 }}>
                      <Button
                        type="submit"
                        variant="primary"
                        style={{
                          width: "auto",
                          padding: "5px 50px",
                        }}
                      >
                        Submit
                      </Button>
                    </Row>
                  </Container>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </>
  );
}

export default BorrowerProfileCreate;
