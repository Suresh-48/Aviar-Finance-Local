import React from "react";
import "../css/css/style.scss";
import logo from "./logo.png";
import { BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { Button, Container, Modal, Nav, NavDropdown, Navbar, Row, Col, InputGroup, Form } from "react-bootstrap";
import { FaEyeSlash, FaEye, FaKiss } from "react-icons/fa";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Services from "../Services";

function AdminNavbar() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPasswordShown, setCurrentPasswordShown] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [data, setData] = useState([]);
  const [openErrorModal, setOpenErrorModal] = useState(false);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const borrowerId = localStorage.getItem("borrowerId");
  let firstName = localStorage.getItem("firstName");
  let lastName = localStorage.getItem("lastName");
  const role = localStorage.getItem("role");

  const toogleCurrentPasswordVisibility = () => {
    setCurrentPasswordShown(!currentPasswordShown);
  };

  const tooglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };
  const toogleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };

  const validateSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is Required"),
    password: Yup.string()
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .min(6, "Password Required Minimum 6 Characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .matches(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])",
        "Confirm Password Should contain Uppercase, Lowercase, Numbers and Special Characters"
      )
      .required("Confirm Password is Required"),
  });

  const handleClick = (value) => {
    setShow(false);
  };

  const Logout = () => {
    localStorage.clear(navigate("/"));
    toast.success("logged out Successfully!");
  };

  const getBorrowerData = () => {
    const userId = localStorage.getItem("userId");
    Services.getUserDetails(userId).then((res) => {
      const userData = res?.data?.doc;
      setData(userData);
    });
  };

  const submitPassword = (values) => {
    const datas = {
      password: values.password,
      confirmPassword: values.confirmPassword,
      currentPassword: values.currentPassword,
    };
    Services.UpdateBorrowerDetails(data?.borrowerId, datas).then((res) => {
      getBorrowerData();
      setShowModal(false);
      toast.success("Password Updated Successfully!");
    });
  };

  useEffect(() => {
    getBorrowerData();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center ">
          <a href="/#/index" className="logo ">
            <img src={logo} alt="logo" className="img-fluid " />
          </a>
          {/* <nav id="navbar" className={show ? "navbar-mobile w-100" : "navbar w-100"}> */}
          <nav id="navbar" className={show ? "navbar-mobile w-100" : "navbar justify-content-end w-100  "}>
            <ul className="w-100 justify-content-between">
              {role === "admin" ? (
                <>
                  <li>
                    <Nav.Link href="/#/dashboard">Dashboard</Nav.Link>
                  </li>

                  {/* <li>
                    <Nav.Link href="/#/create/borrower" onClick={handleClick}>
                      Create Borrower
                    </Nav.Link>
                  </li> */}

                  <li>
                    <Nav.Link href="/#/borrower/profile/create">Create Borrower</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/borrower/loan/create">Create Borrower Loan</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link href="/#/monthly/payments">Enter Monthly Payments</Nav.Link>
                  </li>
                </>
              ) : null}
              {userId === null ? (
                <li className="me-5 pe-2 w-100 d-flex justify-content-end">
                  <Nav.Link href="/#/login" onClick={handleClick}>
                    LOGIN
                  </Nav.Link>
                </li>
              ) : (
                <Nav className="me-auto w-100 d-flex justify-content-end  ">
                  <NavDropdown
                    align="end"
                    title={<Avatar name={`${firstName} ${lastName}`} size="50" color="silver" round={true} />}
                    id="basic-nav-dropdown"
                  >
                    {role === "admin" ? (
                      <NavDropdown.Item href={`/#/admin/edit`} height="10" width="45" className="navbar-dropdown">
                        Edit Profile
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item
                        // href={`/#/edit/${borrowerId}`}
                        onClick={() => setShowModal(true)}
                        // height="10"
                        // width="45"
                        className="navbar-dropdown"
                      >
                        Change Password
                      </NavDropdown.Item>
                    )}

                    <hr className="my-2" />
                    <NavDropdown.Item
                      onClick={() => {
                        Logout();
                        // setShow(true);
                      }}
                      className="navbar-dropdown"
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              )}
            </ul>
            <i className="bi bi-list mobile-nav-toggle">
              {show ? (
                <MdClose onClick={() => setShow(!show)} />
              ) : (
                <BsList color="#0085cb" onClick={() => setShow(!show)} />
              )}
            </i>
          </nav>
        </div>
      </header>
      <Modal backdrop="static" show={showModal} centered>
        <Formik
          initialValues={{
            currentPassword: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            if (data?.password === values.currentPassword) {
              submitPassword(values);
            } else {
              setShowModal(false);
              setOpenErrorModal(true);
            }
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
                      <h4 className="mb-0">Change Password</h4>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 className="mb-0 text-center">Change Your Password!</h5>
                    <Container>
                      <Row className="d-flex flex-column">
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="required mb-0">Current Password</Form.Label>
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
                                type={currentPasswordShown ? "text" : "password"}
                                name="currentPassword"
                                id="currentPassword"
                                placeholder="Enter Current Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.currentPassword}
                              />
                              <InputGroup.Text>
                                {currentPasswordShown ? (
                                  <FaEye onClick={toogleCurrentPasswordVisibility} size={20} />
                                ) : (
                                  <FaEyeSlash onClick={toogleCurrentPasswordVisibility} size={25} />
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            <ErrorMessage className="error text-danger" component="span" name="currentPassword" />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="required mb-0">Password</Form.Label>
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
                        </Col>
                        <Col>
                          <Form.Group className="m-3">
                            <Form.Label className="required mb-0">Confirm Password</Form.Label>
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
                                type={confirmPasswordShown ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Enter Confirm Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                              />
                              <InputGroup.Text>
                                {confirmPasswordShown ? (
                                  <FaEye onClick={toogleConfirmPasswordVisibility} size={20} />
                                ) : (
                                  <FaEyeSlash onClick={toogleConfirmPasswordVisibility} size={25} />
                                )}
                              </InputGroup.Text>
                            </InputGroup>
                            <ErrorMessage className="error text-danger" component="span" name="confirmPassword" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer style={{ border: "none" }}>
                    <Container>
                      <Row className="mx-3">
                        <Col className="d-flex justify-content-center pe-0 pb-3">
                          <Button
                            style={{ backgroundColor: "#fff", color: "black" }}
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </Button>
                          <Button className="mx-3" type="submit">
                            Save Password
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
      <Modal backdrop="static" show={openErrorModal} centered>
        <Modal.Header style={{ backgroundColor: "#0d59a9", height: "50px" }}>
          <Modal.Title style={{ color: "#fff", textAlign: "center", width: "100%" }}>
            <h4 className="mb-0">Oops!</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            It seems like the current password you provided is not correct. Please make sure you entered the correct
            current password and try again!!.
          </p>
        </Modal.Body>

        <Modal.Footer style={{ border: "none" }}>
          <Container>
            <Row className="mx-3">
              <Col className="d-flex justify-content-end pe-0 pb-3">
                <Button
                  onClick={() => {
                    setShowModal(true);
                    setOpenErrorModal(false);
                  }}
                >
                  Ok
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default AdminNavbar;
