import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  multiSelect: Yup.array().min(1, 'Please select at least one option'),
  userName: Yup.string().required('Name is required'),
  textArea: Yup.string().required('Text area is required'),
  social: Yup.object().shape({
    facebook: Yup.string()
      .url('Invalid Facebook URL')
      .required('Facebook URL is required'),
    twitter: Yup.string()
      .url('Invalid Twitter URL')
      .required('Twitter URL is required'),
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
