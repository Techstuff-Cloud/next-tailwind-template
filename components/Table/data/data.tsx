import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  multiSelect: Yup.array().min(1, 'Please select at least one option'),
  name: Yup.string().required('Name is required'),
  textArea: Yup.string().required('Text area is required'),
  // link
  social: Yup.object().shape({
    facebook: Yup.string().required('Facebook field is required'),
    twitter: Yup.string().required('Twitter field is required'),
  }),
  jobType: Yup.string().required('Job Type is required'),
});

export const initialValues = {
  multiSelect: ['Option 1', 'Option 2'],
  name: '',
  textArea: '',
  social: {
    facebook: '',
    twitter: '',
  },
  jobType: '',
};
