import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
// Utils
import { usersFormSchema } from '../utils';
// Services
import { useUpdateUserMutation, useGetUserQuery } from '../../../../../store/users/service';

type InitialValues = {
  email: string;
  firstName: string;
  lastName: string;
}

const useUsersUpdateForm = (id: number) => {
  const navigate = useNavigate()
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [updateUser] = useUpdateUserMutation()
  const { data } = useGetUserQuery(id)

  const checkIfDirty = useMemo(() => {
    return isDirty;
  }, [isDirty]);

  const initialValues: InitialValues = {
    email: data ? data.email : "",
    firstName: data ? data.first_name : "",
    lastName: data ? data.last_name : "",
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
      updateUser({ body: payload, id })
      navigate('/users/list')
    },
  });

  return {
    setIsDirty,
    formik,
    user: data
  };
};

export default useUsersUpdateForm;
