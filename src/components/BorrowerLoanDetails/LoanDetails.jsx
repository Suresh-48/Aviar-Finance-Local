import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Services from "../../Services";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { toast } from "react-toastify";
import Loader from "../../core/Loader";

function LoanDetails(loanDetail) {
  const navigate = useNavigate();
  const loanDetails = loanDetail.loanDetail;
  const [data, setData] = useState();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMainDiv, setIsLoadingMainDiv] = useState(false);

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is Required"),
    lastName: Yup.string().required("Last Name is Required"),
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

  const getBorrowerDetails = async () => {
    setIsLoadingMainDiv(true);
    const borrowerId = localStorage.getItem("borrowerId");
    Services.GetBorrowerDetails(borrowerId).then((res) => {
      setData(res?.borrowerData);
      setIsLoadingMainDiv(false);
    });
  };

  const sumbitEditedDetails = (values) => {
    const userId = localStorage.getItem("userId");
    Services.UpdateBorrowerDetails(data?.borrowerId?._id, values, userId)
      .then((res) => {
        toast.success("Update Successfully!");
        getBorrowerDetails();
        setOpenEditModal(false);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Please try again!!");
        setOpenEditModal(false);
        setIsLoading(false);
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

  useEffect(() => {
    getBorrowerDetails();
  }, []);

  return (
    <div>
      {isLoadingMainDiv ? (
        <div
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      ) : (
        <Container>
          <div style={{ textAlign: "center", position: "relative" }}>
            <hr className="loanDetail-divider my-4" />
          </div>
          <div>
            <Row className="d-flex justify-content-center">
              <Col xs={12} md={4}>
                <Row>
                  <Col className="dash-card">
                    <div style={{ padding: "20px " }}>
                      <div>
                        <p className="fw-bold mb-0">Your Loan Balance is</p>
                        <p className="fw-bold fs-4 mb-0">${loanDetails?.balanceAmount}</p>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#f3f0f0",
                          padding: 10,
                        }}
                      >
                        <Row>
                          <Col xs={12} md={6}>
                            <p style={{ fontSize: 14, marginBottom: 0 }}>Your Loan Started</p>
                            <p style={{ fontSize: 14, fontWeight: "bold" }}>{loanDetails?.paymentStartMonth}</p>
                          </Col>
                          <Col xs={12} md={6} className="justify-content-end">
                            <p
                              style={{
                                fontSize: 14,
                                marginBottom: 0,
                                textAlign: "end",
                              }}
                            >
                              Your Loan Ends
                            </p>
                            <p
                              style={{
                                fontSize: 14,
                                fontWeight: "bold",
                                textAlign: "end",
                              }}
                            >
                              {loanDetails?.paymentEndMont}
                            </p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="justify-content-end">
                            <p
                              style={{
                                fontSize: 14,
                                marginBottom: 0,
                                textAlign: "end",
                              }}
                            >
                              Prepaid Principal
                            </p>
                            <p
                              style={{
                                fontSize: 14,
                                marginBottom: 0,
                                fontWeight: "bold",
                                textAlign: "end",
                              }}
                            >
                              $ 0.0
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <Row>
                  <Col className="dash-card">
                    <div style={{ padding: "20px" }}>
                      <p className="fw-bold mb-0">Payment History</p>
                      <hr className="my-2" />

                      {loanDetails?.paymentHistory?.map((pList) => (
                        <Row>
                          <Col xs={12} md={6}>
                            <p
                              style={{
                                fontSize: 14,
                                marginBottom: 0,
                                fontWeight: "bold",
                              }}
                            >
                              Payment
                            </p>
                            <p style={{ fontSize: 14, color: "gray" }}>Applied : {pList?.paymentDate}</p>
                          </Col>
                          <Col xs={12} md={6} className="d-flex justify-content-end align-items-center">
                            <p
                              style={{
                                fontSize: 14,
                                marginBottom: 0,
                                fontWeight: "bold",
                                textAlign: "end",
                              }}
                            >
                              ${pList?.totalPayment}
                            </p>
                          </Col>
                        </Row>
                      ))}
                    </div>
                    <div
                      style={{
                        backgroundColor: "#f2f6fa",
                        color: "#0D59A9",
                        cursor: "pointer",
                      }}
                    >
                      <p
                        className="mb-0 py-2 text-center fw-bold"
                        style={{ fontSize: 14 }}
                        onClick={() =>
                          navigate(`/borrower/loan/detail/${loanDetails?.personalInfo?.id}`, {
                            state: { values: loanDetails },
                          })
                        }
                      >
                        View Additional Activity
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <Row>
                  <Col className="dash-card">
                    <div style={{ padding: "20px" }}>
                      <p className="fw-bold mb-0">Your Information</p>
                      <hr className="my-2" />
                      <div>
                        <div>
                          <p
                            style={{
                              marginBottom: 0,
                              fontWeight: "bold",
                              color: "#0D59A9",
                              fontSize: 15,
                            }}
                          >
                            Address
                          </p>
                          <p style={{ fontSize: 14, width: "50%" }}>
                            {loanDetails?.personalInfo?.currentAddress
                              ? loanDetails?.personalInfo?.currentAddress
                              : data?.borrowerId?.doorNo +
                                "," +
                                data?.borrowerId?.streetName +
                                "," +
                                data?.borrowerId?.cityName +
                                "," +
                                data?.borrowerId?.state +
                                "," +
                                data?.borrowerId?.zipCode}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              marginBottom: 0,
                              fontWeight: "bold",
                              color: "#0D59A9",
                              fontSize: 15,
                            }}
                          >
                            Email
                          </p>
                          <p style={{ fontSize: 14, width: "50%" }}>
                            {" "}
                            {loanDetails?.personalInfo?.email
                              ? loanDetails?.personalInfo?.email
                              : data?.borrowerId?.email}
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              marginBottom: 0,
                              fontWeight: "bold",
                              color: "#0D59A9",
                              fontSize: 15,
                            }}
                          >
                            Phone Number
                          </p>
                          <p style={{ fontSize: 14, width: "50%" }}>
                            {" "}
                            {loanDetails?.personalInfo?.cellPhone
                              ? loanDetails?.personalInfo?.cellPhone
                              : data?.borrowerId?.cellPhone}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: "#f2f6fa",
                        color: "#0D59A9",
                        cursor: "pointer",
                      }}
                      onClick={() => setOpenEditModal(true)}
                    >
                      <p className="mb-0 py-2 text-center fw-bold" style={{ fontSize: 14 }}>
                        Edit
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      )}
      <Modal backdrop="static" show={openEditModal} centered size="lg">
        <Formik
          initialValues={{
            firstName: data?.borrowerId?.firstName,
            middleName: data?.borrowerId?.middleName,
            lastName: data?.borrowerId?.lastName,
            dob: data?.borrowerId?.dob,
            residencyType: data?.borrowerId?.residencyType,
            maritalStatus: data?.borrowerId?.maritalStatus,
            email: data?.borrowerId?.email,
            cellPhone: data?.borrowerId.cellPhone,
            workPhone: data?.borrowerId?.workPhone,
            homePhone: data?.borrowerId?.homePhone,
            doorNo: data?.borrowerId?.doorNo,
            streetName: data?.borrowerId?.streetName,
            cityName: data?.borrowerId?.cityName,
            state: data?.borrowerId?.state,
            zipCode: data?.borrowerId?.zipCode,
          }}
          onSubmit={(values) => {
            sumbitEditedDetails(values);
          }}
          validationSchema={validateSchema}
        >
          {(formik) => {
            const { handleChange, values, handleBlur, handleSubmit } = formik;
            return (
              <div>
                <Form onSubmit={handleSubmit}>
                  <Modal.Header style={{ backgroundColor: "#0d59a9", height: "50px" }}>
                    <Modal.Title style={{ color: "#fff", textAlign: "center", width: "100%" }}>
                      <h4 className="mb-0">Edit</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <Row>
                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
                            <Form.Label className="required mb-0">First Name</Form.Label>
                            <Form.Control
                              disabled
                              style={{ borderRadius: 0 }}
                              onChange={handleChange}
                              value={values.firstName}
                              onBlur={handleBlur}
                              name="firstName"
                            />
                            <ErrorMessage className="error text-danger" component="span" name="firstName" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
                            <Form.Label className="mb-0">Middle Name</Form.Label>
                            <Form.Control
                              disabled
                              style={{ borderRadius: 0 }}
                              onChange={handleChange}
                              value={values.middleName}
                              onBlur={handleBlur}
                              name="middleName"
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
                            <Form.Label className="required mb-0">Last Name</Form.Label>
                            <Form.Control
                              disabled
                              style={{ borderRadius: 0 }}
                              onChange={handleChange}
                              value={values.lastName}
                              onBlur={handleBlur}
                              name="lastName"
                            />
                            <ErrorMessage className="error text-danger" component="span" name="lastName" />
                          </Form.Group>
                        </Col>

                        <Col xs={12} md={6}>
                          <Form.Group className="d-flex flex-column m-3 mx-0 mt-0">
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
                              selected={values.dob ? new Date(values.dob) : null}
                              onChange={(date) => {
                                // Ensure that formik's handleChange is called with the correct parameters
                                handleChange({
                                  target: {
                                    name: "dob",
                                    value: date,
                                  },
                                });
                              }}
                              disabled
                              className="form-control"
                              // value={values.dob}
                              todayButton="TODAY"
                              dateFormat="MM/dd/YYY"
                              isClearable={values.dob ? true : false}
                              placeholderText="mm/dd/yyyy"
                              name="dob"
                            />
                            <ErrorMessage className="error text-danger" component="span" name="dob" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group className="m-3 mx-0 mt-0">
                            <Form.Label className="required mb-0">Residency Type</Form.Label>
                            <Form.Select
                              disabled
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

                        <Col xs={12} md={6}>
                          <Form.Group className="m-3 mx-0">
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
                        <Col xs={12} md={6}>
                          <Form.Group className="m-3 mx-0">
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

                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
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
                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
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
                        <Col xs={12} md={4}>
                          <Form.Group className="m-3 mx-0">
                            <Form.Label className="mb-0 mx-0">Home Phone</Form.Label>
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
                        <h4 className="mb-2">Current Address</h4>
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
                    </Container>
                  </Modal.Body>
                  <Modal.Footer style={{ border: "none" }}>
                    <Container>
                      <Row className="mx-3">
                        <Col className="d-flex justify-content-end pe-0 pb-3">
                          <Button
                            style={{ backgroundColor: "#fff", color: "black" }}
                            onClick={() => setOpenEditModal(false)}
                          >
                            Cancel
                          </Button>
                          <Button disabled={isLoading ? true : false} className="mx-3" type="submit">
                            {isLoading ? (
                              <div>
                                <Spinner as="span" animation="border" size="sm" variant="light" />
                                <span className=""> Loading...</span>{" "}
                              </div>
                            ) : (
                              "Save Changes"
                            )}
                          </Button>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Footer>
                </Form>
              </div>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}

export default LoanDetails;
