import useUsersList from './hooks/useUsersList'
import { Wrapper} from './styles'

const UsersList = () => {

    const { data } = useUsersList()
  
  return (
    <Wrapper>
      <h2>Users List</h2>
    </Wrapper>
  )
}

export default UsersList
