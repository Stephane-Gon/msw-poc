import { useParams  } from "react-router-dom"
import { Wrapper, Form, SubmitButton } from "./styles"
import InputText from "../../../../design-system/atoms/InputText/InputText"
import useUsersUpdateForm from "./hooks/useUsersUpdateForm"

const UsersUpdateForm = () => {
  const { id } = useParams()
  const updateData = useUsersUpdateForm(parseInt(id as string))
  console.log("🚀 ~ updateData:", updateData)

  if(!updateData) {
    return (
      <Wrapper>
        <h2>Loading user info</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <h2>User with id: {updateData.user?.id}, Update Form</h2>
      <Form onSubmit={updateData.formik.handleSubmit}>
        <InputText
          label="Email"
          id="email"
          name="email"
          value={updateData.formik.values.email}
          onChange={updateData.formik.handleChange}
          valid={updateData.formik.errors.email === undefined}
          helpText={updateData.formik.errors.email}
        />

        <InputText
          label="First Name"
          id="firstName"
          name="firstName"
          value={updateData.formik.values.firstName}
          onChange={updateData.formik.handleChange}
          valid={updateData.formik.errors.firstName === undefined}
          helpText={updateData.formik.errors.firstName}
        />

        <InputText
          label="Last Name"
          id="lastName"
          name="lastName"
          value={updateData.formik.values.lastName}
          onChange={updateData.formik.handleChange}
          valid={updateData.formik.errors.lastName === undefined}
          helpText={updateData.formik.errors.lastName}
        />
        
        <SubmitButton onClick={() => updateData.setIsDirty(true)}>
          Submit
        </SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default UsersUpdateForm
