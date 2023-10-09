import { useParams  } from "react-router-dom"
import { Wrapper, Form, SubmitButton } from "./styles"
import InputText from "../../../../design-system/atoms/InputText/InputText"
import useUsersUpdateForm from "./hooks/useUsersUpdateForm"

const UsersUpdateForm = () => {
  const { id } = useParams()
  const { formik, setIsDirty } = useUsersUpdateForm(parseInt(id as string))

  return (
    <Wrapper>
      <h2>Users Update Form</h2>
      <Form onSubmit={formik.handleSubmit}>
        <InputText
          label="Email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          valid={formik.errors.email === undefined}
          helpText={formik.errors.email}
        />

        <InputText
          label="First Name"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          valid={formik.errors.firstName === undefined}
          helpText={formik.errors.firstName}
        />

        <InputText
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          valid={formik.errors.lastName === undefined}
          helpText={formik.errors.lastName}
        />
        
        <SubmitButton onClick={() => setIsDirty(true)}>
          Submit
        </SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default UsersUpdateForm
