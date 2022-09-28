import { Navigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import AdminNav from '../../Components/Navbar/adminNav'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import UserRow from "../../Components/UserRow"
import './user.css'

const User = () =>{

     // const navigate = useNavigate()

   const [users, setAlbums] = useState([])

   // console.log("it is state")

     const getUser= () =>{
           const url = `${URL}/user/all`

           axios.get(url).then((response) => {
                const result = response.data
                console.log(result)
          if (result['status'] == 'success') {
         //if (result != null){
          setAlbums(result.data)
        } else {
          toast.error(result['error'])
        }
      })
 }

 useEffect(() => {   
   getUser()
   console.log('getting called')
 }, [])

    return (
   <div className="col">
       <div>
       <AdminNav />
       </div>
       <div>
         <h2 class="title">Users</h2>
         
         {/* <Link to="/add-album">
                 <a  className="btn btn-success">Add Album</a>
         </Link> */}
         </div>
         <br></br>
             <br></br>
             <div >
             <table className="table table-striped">
       <thead>
         <tr>
       
           <th class="table table-dark table-striped">User_id</th>
           <th class="table table-dark table-striped">Name</th>
           <th class="table table-dark table-striped">email</th>
           <th class="table table-dark table-striped">registrationDate</th>
           <th class="table table-dark table-striped">qualification</th>
           <th class="table table-dark table-striped">publishedCourses</th>
           <th class="table table-dark table-striped">contact</th>
           <th class="table table-dark table-striped">adharNo</th>
           <th class="table table-dark table-striped">role</th>

         </tr>
       </thead>
       <tbody>
       {users.map((item) => {
           return <UserRow users={item} />
         })}
       </tbody>
     </table>
             </div>

   </div>
    )
}

export default User