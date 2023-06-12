import * as yup from 'yup';
import { managerValidationSchema } from 'validationSchema/managers';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  user_id: yup.string().nullable().required(),
  manager: yup.array().of(managerValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
});
