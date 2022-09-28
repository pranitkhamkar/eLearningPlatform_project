//import { url } from '../common/constants'
import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"

const UserRow = (props) => {
  const { users } = props
  const navigate = useNavigate()

  return (
    <tr>
       <td class="table-success">{users.id}</td>
       <td class="table-secondary">{users.fName+"  "+users.lName}</td>
       <td class="table-success">{users.email}</td>
       <td class="table-info">{users.registrationDate}</td>
       <td class="table-success">{users.qualification}</td>
       <td class="table-secondary">{users.publishedCourses}</td>
       <td class="table-info">{users.contact}</td>
       <td class="table-danger">{users.adharNo}</td>
       <td class="table-success">{users.role}</td>

       <td>
       <button
          onClick={() => {  
            navigate('/delete-user', { state: {id: users.id} })
          }}
          className="btn btn-danger">
          Delete User
        </button>
      </td>
    </tr>
  )
}

export default UserRow
