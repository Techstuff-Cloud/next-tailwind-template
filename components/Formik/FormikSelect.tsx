import { useField } from 'formik';
import React from 'react';
import { Select } from '../ui/select';

const FormikSelect = ({ label, ...props }: FormikFieldProp) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className='my-2'>
      <label htmlFor={props.id || props.name} className='mb-1'>
        {label}
      </label>
      <Select
        {...field}
        {...props}
        onValueChange={(e) => helpers.setValue(e)}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;
