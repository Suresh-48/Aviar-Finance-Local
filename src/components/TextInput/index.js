import React from "react";
import ReactDOM from "react-dom";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

const InputText = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group controlId={props.id || props.name}>
        <Form.Label>
          {props.manadat ? (
            <>
              {label}
              <p className="mandatory-sign">*</p>
            </>
          ) : (
            `${label}`
          )}
          {props.sublabel ? props.sublabel : null}
        </Form.Label>

        <Form.Control
          {...field}
          {...props}
          className={
            meta.touched && meta.error ? "form-control is-invalid" : meta.touched && !meta.error ? "is-valid" : ""
          }
        />
        {meta.touched && meta.error ? <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback> : null}
      </Form.Group>
    </>
  );
};

export default InputText;
