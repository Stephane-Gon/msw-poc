import * as Yup from 'yup';

export const usersFormSchema =  Yup.object().shape({
  email: Yup.string().email().required(`Required Field`),
  firstName: Yup.string().required(`Required Field`),
  lastName: Yup.string().required(`Required Field`)
});