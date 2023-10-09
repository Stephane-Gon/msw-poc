import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
// Utils
import { usersFormSchema } from '../utils';
// Services
import { useUpdateUserMutation, useGetUserQuery } from '../../../../../store/users/service';


const useUsersUpdateForm = (id: number) => {
  const navigate = useNavigate()
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [updateUser] = useUpdateUserMutation()
  const user = useGetUserQuery(id)
  console.log("🚀 ~ file: useUsersUpdateForm.ts:15 ~ useUsersUpdateForm ~ user:", user)

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
      updateUser({ body: payload, id })
      navigate('/users/list')
    },
  });

  return {
    setIsDirty,
    formik,
  };
};

export default useUsersUpdateForm;
