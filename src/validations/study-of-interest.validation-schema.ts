import * as Yup from 'yup';

export const StudyOfInterestSchema = Yup.object().shape({
  name: Yup.string().required('Study name is required'),
  visibility: Yup.boolean(),
});
