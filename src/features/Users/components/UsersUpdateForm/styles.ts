import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const SubmitButton = styled.button`
  padding: .5rem 1rem;
  border: none;
  border-radius: .3rem;
  cursor: pointer;
`

export {
  Wrapper,
  Form,
  SubmitButton,
}