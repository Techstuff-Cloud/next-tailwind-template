import { useField } from 'formik';
import React from 'react';

const FormilNestedInput = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        id={props.name}
        type='text'
        placeholder={`Enter ${name} URL`}
        onChange={(e) => helpers.setValue(e.target.value)}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormilNestedInput;
