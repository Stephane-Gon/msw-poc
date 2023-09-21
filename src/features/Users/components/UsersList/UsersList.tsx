import useUsersList from './hooks/useUsersList'
import { Wrapper} from './styles'

const UsersList = () => {

    const { data } = useUsersList()
  
  return (
    <Wrapper>
      <h2>Users List</h2>
      <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
        </tr>
            {
                data?.map((el: any) => {
                    return (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                    </tr>)
                })
            }
      </table>
    </Wrapper>
  )
}

export default UsersList
