import { useField } from 'formik';
import React from 'react';
import { MultiSelectDropDown } from './MultiSelect';
import { FormikFieldProp, Option } from './types';

interface FormikMultiSelectProp extends FormikFieldProp {
  options: Option[];
}

const FormikMultiSelect = ({ label, ...props }: FormikMultiSelectProp) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className='my-2'>
      <label htmlFor={props.id || props.name} className='mb-1'>
        {label}
      </label>
      <MultiSelectDropDown
        value={field.value}
        name={props.name}
        options={props.options}
        onChange={(selected: any) => helpers.setValue(selected)}
      />

      {meta.touched && meta.error ? (
        <div className='error  text-red-500 mt-2'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikMultiSelect;
