import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import AdminNav from '../../Components/Navbar/adminNav'
import Admin from './admin'
import { toast } from 'react-toastify'
// courseid
const AddCourses = () => {
  // const [courseid, setCourseid] = useState('')
  const [courseTitle, setCourseTitle] = useState('')
  const [courseBrief, setCourseBrief] = useState('')
  const [numofChapter, setNumofChapter] = useState('')
  const [user_id, setUser_id] = useState('')

  const navigate = useNavigate()

  const addCourseToDB = () => {
    //  const courseid = 6

    if (courseTitle.length == 0) {
      toast.warning('please enter title')
    } else if (courseBrief.length == 0) {
      toast.warning('please enter thubnail')
    } else {
      const body = {
        courseTitle,
        courseBrief,
        numofChapter,
        user_id
      }

      const url = `${URL}/courses`
      console.log(body)
      axios.post(url, body).then((response) => {

        // get the server result
        const result = response.data
        if (result['status'] == 'success') {
          toast.success('added new album')
          navigate('/admin')
        } else {
          toast.error(result['error'])
        }
      })
    }

  }

  return (

    <div className="col">
      <div>
        <AdminNav />
      </div>
      <h2 class="title">Add Courses</h2>
{/* 
      <div className="mb-3">
        <label htmlFor="" className="label-control">CourseId</label>
        <input
          onChange={(e) => {
            setCourseid(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div> */}




      <div className="mb-3">
        <label htmlFor="" className="label-control">CourseTitle</label>
        <input
          onChange={(e) => {
            setCourseTitle(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">CourseBrief</label>
        <input
          onChange={(e) => {
            setCourseBrief(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">NumofChapter</label>
        <input
          onChange={(e) => {
            setNumofChapter(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label-control">user_id</label>
        <input
          onChange={(e) => {
            setUser_id(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <button onClick={addCourseToDB} className="btn btn-success">
          Save
        </button>
        <Link to="/admin" className="btn btn-danger float-end">
          Cancel
        </Link>
      </div>

    </div>
  )
}

export default AddCourses