import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
// Utils
import { usersFormSchema } from '../utils';
// Services
import { useCreateUserMutation } from '../../../../../store/users/service';


const useUsersCreateForm = () => {
  const navigate = useNavigate()
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [createUser] = useCreateUserMutation()

  const checkIfDirty = useMemo(() => {
    return isDirty;
  }, [isDirty]);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
  }

  // Create formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: usersFormSchema,
    validateOnChange: checkIfDirty,
    validateOnBlur: true,
    validateOnMount: false,
    onSubmit: async payload => {
      createUser({ body: payload })
      navigate('/')
    },
  });

  return {
    setIsDirty,
    formik,
  };
};

export default useUsersCreateForm;
