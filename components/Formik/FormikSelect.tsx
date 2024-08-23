import { useField } from "formik";
import React from "react";
import { Select } from "../ui/select";
import { FormikFieldProp } from "./types";

const FormikSelect = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="my-2">
      <label htmlFor={props.id || props.name} className="mb-1">
        {label}
      </label>
      {/* @ts-ignore */}
      <Select
        {...field}
        {...props}
        onValueChange={(e) => helpers.setValue(e)}
      />
      {meta.touched && meta.error ? (
        <div className="error text-red-500 mt-2">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;
