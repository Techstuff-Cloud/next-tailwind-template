import { useField } from 'formik';
import React from 'react';
import { Input } from '../ui/input';
import { FormikFieldProp } from './types';

const FormilNestedInput = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <Input
        {...field}
        id={props.name}
        type='text'
        placeholder={`Enter ${name} URL`}
        onChange={(e) => helpers.setValue(e.target.value)}
      />
      {meta.touched && meta.error ? (
        <div className='error text-red-500 mt-2'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormilNestedInput;
