import * as Yup from 'yup';

export const SeatOrganizationSchema = Yup.object().shape({
  event: Yup.string().required('Event selection is required'),
  seatName: Yup.string().required('Seat name is required'),
  availableSeats: Yup.number()
    .required('Available seats count is required')
    .min(1, 'Available seats must be at least 1'),
  reservedSeats: Yup.number()
    .required('Reserved seats count is required')
    .min(0, 'Reserved seats cannot be negative'),
});
