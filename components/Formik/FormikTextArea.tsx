import { useField } from "formik";
import React from "react";
import { Textarea } from "../ui/textarea";
import { FormikFieldProp } from "./types";

const FormikTextArea = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta] = useField(props);
  return (
    <div className="my-2">
      <label htmlFor={props.id || props.name} className="mb-1">
        {label}
      </label>
      <Textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 mt-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikTextArea;
