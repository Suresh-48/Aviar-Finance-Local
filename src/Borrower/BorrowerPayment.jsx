import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Services from "../Services";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye, FaUserEdit, FaPercent } from "react-icons/fa";
import * as Yup from "yup";
import Select from "react-select";
import { ErrorMessage, Formik } from "formik";
import { toast } from "react-toastify";
import BorrowerPaymentApi from "../Services/paymentApi";

function BorrowerPayment() {
  const [data, setData] = useState();

  const initialValues = {
    account_number: "",
    routing_number: "",
    account_type: "",
    check_type: "",
    phone_no: "",
    check_holder_name: "",
    billing_street_address_1: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
  };

  const validation = Yup.object().shape({
    account_number: Yup.number().required("Account Number is required"),
    routing_number: Yup.number().required("Routing Number is required"),
    account_type: Yup.object().required("Account Type is required"),
    check_type: Yup.object().required("Check Type is required"),
    phone_no: Yup.string()
      .required("Phone Number is required")
      .matches(/^[0-9\s]+$/, "Enter valid Phone Number")
      .min(10, "Enter valid number")
      .max(10, "Enter valid number"),
    check_holder_name: Yup.string().required("Check Holder Name is required"),
    billing_street_address_1: Yup.string().required("Billing Street Address 1 is required"),
    billing_city: Yup.string().required("Billing City is required"),
    billing_state: Yup.string().required("Billing State is required"),
    billing_zip: Yup.string().required("Billing Zip is required"),
  });
  const BorrowerPayemnt = (values) => {
    const data = {
      account_number: values.account_number,
      routing_number: values.routing_number,
      account_type: values.account_type,
      check_type: values.check_type,
      check_holder_name: values.check_holder_name,
      phoneNo: values.phone_no,
      billing_street_address_1: values.billing_street_address_1,
      billing_city: values.billing_city,
      billing_state: values.billing_state,
      billing_zip: values.billing_zip,
    };
    BorrowerPaymentApi.BorrowerPaymentCreate(data).then((res) => {});
  };
  return (
    <div class="container justify-content-evenly  " style={{ marginTop: "125px" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values) => BorrowerPayemnt(values)}
      >
        {(Formik) => {
          const { values, handleChange, handleBlur, setFieldValue, handleSubmit } = Formik;

          return (
            <Form onSubmit={handleSubmit} className="shadow-lg p-5  mb-5 bg-white rounded">
              <Row>
                <Col sm="12" md="6">
                  <h3> Account fields</h3>
                  <Form.Group>
                    <Form.Label className="required">Account Number</Form.Label>
                    <Form.Control
                      id="account_number"
                      name="account_number"
                      value={values.account_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="tel"
                      placeholder="account number"
                    />
                    <ErrorMessage className="text-danger" component="span" name="account_number" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Routing Number</Form.Label>
                    <Form.Control
                      id="routing_number"
                      name="routing_number"
                      value={values.routing_number}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="tel"
                      placeholder="routing number"
                    />
                    <ErrorMessage className="text-danger" component="span" name="routing_number" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Account Type</Form.Label>
                    <Select
                      id="account_type"
                      name="account_type"
                      options={[
                        { value: "Checking", label: "Checking" },
                        { value: "Saving", label: "Saving" },
                      ]}
                      onChange={(e) => setFieldValue("account_type", e)}
                      value={values.account_type}
                      placeholder="account type"
                    />

                    <ErrorMessage className="text-danger" component="span" name="account_type" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Check Type</Form.Label>
                    <Select
                      id="check_type"
                      name="check_type"
                      options={[
                        { value: "Personal", label: "Personal" },
                        { value: "Business", label: "Business" },
                      ]}
                      value={values.check_type}
                      onChange={(e) => setFieldValue("check_type", e)}
                      placeholder="check type"
                    />
                    <ErrorMessage className="text-danger" component="span" name="check_type" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Phone No</Form.Label>
                    <Form.Control
                      id="phone_no"
                      name="phone_no"
                      value={values.phone_no}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={10}
                      type="tel"
                      placeholder="Phone No"
                    />
                    <ErrorMessage className="text-danger" component="span" name="phone_no" />
                  </Form.Group>
                </Col>
                <Col>
                  <h3>Address fields</h3>
                  <Form.Group>
                    <Form.Label className="required">Check Holder Name</Form.Label>
                    <Form.Control
                      id="check_holder_name"
                      name="check_holder_name"
                      value={values.check_holder_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="check holder name"
                    />
                    <ErrorMessage className="text-danger" component="span" name="check_holder_name" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Billing Street Address 1</Form.Label>
                    <Form.Control
                      id="billing_street_address_1"
                      name="billing_street_address_1"
                      value={values.billing_street_address_1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="billing street address 1"
                    />
                    <ErrorMessage className="text-danger" component="span" name="billing_street_address_1" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Billing City</Form.Label>
                    <Form.Control
                      id="billing_city"
                      name="billing_city"
                      value={values.billing_city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="billing city"
                    />
                    <ErrorMessage className="text-danger" component="span" name="billing_city" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Billing State</Form.Label>
                    <Form.Control
                      id="billing_state"
                      name="billing_state"
                      value={values.billing_state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="billing state"
                    />
                    <ErrorMessage className="text-danger" component="span" name="billing_state" />
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <Form.Label className="required">Billing Zip</Form.Label>
                    <Form.Control
                      id="billing_zip"
                      name="billing_zip"
                      value={values.billing_zip}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="billing zip"
                    />
                    <ErrorMessage className="text-danger" component="span" name="billing_zip" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-end mt-4">
                  <Button type="submit">Payment</Button>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default BorrowerPayment;
