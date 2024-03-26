import { useField } from 'formik';
import React from 'react';
import MultiSelectDropdown from '../MultiSelect/MultiSelect';

interface FormikMultiSelectProp extends FormikFieldProp {
  options: string[];
}

const FormikMultiSelect = ({ label, ...props }: FormikMultiSelectProp) => {
  const [field, meta, helpers] = useField(props);
  console.log('value', field.value);
  return (
    <div className='my-2'>
      <label htmlFor={props.id || props.name} className='mb-1'>
        {label}
      </label>
      <MultiSelectDropdown
        value={field.value}
        formFieldName={props.name}
        options={props.options}
        onChange={(selected: any) => helpers.setValue(selected)}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikMultiSelect;
