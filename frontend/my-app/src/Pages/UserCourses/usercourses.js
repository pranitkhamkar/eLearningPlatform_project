// import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { URL } from '../../config'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navibar'
import UserCoursesRow from '../../Components/UserCoursesRow';
import UserRow from '../../Components/UserRow'
import navbar from '../../Components/navbar'
import AfterLogNavibar from '../../Components/Navbar/AfterLogNavibar';
import './usercourses.css'

const UserCourses = () => {

  // const navigate = useNavigate()
   

  const [courses, setCourses] = useState([])

  // console.log("it is state")

  const getCourses = () => {
    const url = `${URL}/courses/all`

    axios.get(url).then((response) => {
      const result = response.data
      //console.log("result")
      console.log(result)
      // console.log(typeof(result))
      // if (result['status'] == 'success') {
      if (result != null) {
        setCourses(result.data)
      } else {
        toast.error(result['error'])
      }
    })
  }


  useEffect(() => {
    getCourses()
    console.log('getting called')
  }, [])

  return (
   
 
    <div className="imageBack">
      <div className="col">
        <div>
          <AfterLogNavibar />
        </div>
        <div >
          <h2 class="title">Courses</h2>

          {/* <Link to="/add-courses">
            <a className="btn btn-success">Add Courses</a>
          </Link> */}
        </div>
        <br></br>
        <br></br>
        <div >
          <table className="table table-striped">
            <thead>
              <tr>
                <th class="table-primary">courseid</th>
                <th class="table-primary">courseTitle</th>
                <th class="table-primary">courseBrief</th>
                <th class="table-primary">numOfChapter</th>
                UserCoursesRow

              </tr>
            </thead>
            <tbody>
              {courses.map((item) => {
                return <UserCoursesRow courses={item} />
              })}
            </tbody>
          </table>
        </div>
      </div>
   </div>
  )
}
export default UserCourses;