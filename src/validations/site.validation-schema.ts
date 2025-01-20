import * as Yup from 'yup';

const siteValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  piName: Yup.string().optional(),
  siteNumber: Yup.string().optional(),
  phoneNumber: Yup.string().optional(),
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().optional(),
  state: Yup.string().optional(),
  zipCode: Yup.string().optional(),
  link: Yup.string().optional(),
  //   image: Yup.mixed().required('Image is required'),
  location: Yup.string().optional(),
});

export { siteValidationSchema };
