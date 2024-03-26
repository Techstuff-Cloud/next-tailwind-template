import { useField } from 'formik';
import React from 'react';
import { Input } from '../ui/input';

const FormikInput = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta] = useField(props);
  return (
    <div className='my-2'>
      <label htmlFor={props.id || props.name} className='mb-1'>
        {label}
      </label>
      <Input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikInput;
