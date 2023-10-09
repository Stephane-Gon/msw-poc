import { useNavigate } from 'react-router-dom';
import useUsersList from './hooks/useUsersList'
import { Wrapper} from './styles'

const UsersList = () => {
  const navigate = useNavigate();

  const { data } = useUsersList()
  
  return (
    <Wrapper>
      <h2>Users List</h2>
      <table>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>Edit</th>
        </tr>
            {
                data?.map((el: any, idx: number) => {
                    return (
                    <tr key={`user-idx-${idx}`}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td 
                          style={{paddingInline: "10px", cursor: "pointer", color: "green"}} 
                          onClick={() => navigate(`/users/update/${el.id}`)}
                          >Edit</td>
                    </tr>)
                })
            }
      </table>
    </Wrapper>
  )
}

export default UsersList
