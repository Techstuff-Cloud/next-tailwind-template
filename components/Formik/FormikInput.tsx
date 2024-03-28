import { useField } from 'formik';
import React from 'react';
import { FormikFieldProp } from './types';
import { Input } from '../ui/input';

const FormikInput = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className='my-4'>
      <label htmlFor={props.name} className='mb-1'>
        {label}
      </label>
      <Input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error text-red-500 mt-2'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInput;
