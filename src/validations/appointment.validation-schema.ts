import * as Yup from 'yup';

export const AppointmentSchema = Yup.object().shape({
  event: Yup.string().required('Event selection is required'),
  eventDate: Yup.string().required('Event date is required'),
  eventTime: Yup.string().required('Event time is required'),
  seats: Yup.string().required('Seats selection is required'),
  site: Yup.string().required('Site selection is required'),
  firstName: Yup.string().required('First name is required'),
  middleName: Yup.string(),
  lastName: Yup.string().required('Last name is required'),
  phoneNumber1: Yup.string().required('Phone number is required'),
  phoneNumber2: Yup.string(),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  dateOfBirth: Yup.string(),
  age: Yup.number().typeError('Age must be a number'),
  streetAddress: Yup.string(),
  apartmentNumber: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  zipCode: Yup.number().typeError('Zip code must be a number'),
  status: Yup.string().required('Status is required'),
  notes: Yup.string(),
});
