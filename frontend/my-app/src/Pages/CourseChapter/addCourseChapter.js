import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import AdminNav from '../../Components/Navbar/adminNav'
import CourseChapter from './courseChapter'
import { toast } from 'react-toastify'
import'./addCourseChapter.css'

const AddChapter = () => {
    const [courseChapterid, setCourseChapterId] = useState('')
    const [chapterTitle, setChapterTitle] = useState('')   
    const [numOfVideo, setNumOfVideo] = useState('')
    const [courseid, setCourseid] = useState('')

    const navigate = useNavigate()
  
    const addChaptertoDb = () =>{
          //const artistId = 3         

         if(numOfVideo.length == 0){
             toast.warning('please enter title')
         } else if (chapterTitle.length == 0){
             toast.warning('please enter thubnail')
         }else{
              const body = {
                courseChapterid,
                chapterTitle,
                numOfVideo,
                courseid,
              }

              const url = `${URL}/chapter`

              axios.post(url, body).then((response) => {

                 // get the server result
                  const result = response.data
                  if (result['status'] == 'success'){
                    toast.success('added new album')
                     navigate('/admin')
                  }else {
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
          <h2 class = "title">Add Chapter</h2>
           
          <div className="mb-3">
        <label htmlFor="" className="label-control">CourseChapterid</label>
        <input
          onChange={(e) => {
            setCourseChapterId(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>




          <div className="mb-3">
        <label htmlFor="" className="label-control">ChapterTitle</label>
        <input
          onChange={(e) => {
            setChapterTitle(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">NumOfVideo</label>
        <input
          onChange={(e) => {
            setNumOfVideo(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="" className="label-control">Courseid</label>
        <input
          onChange={(e) => {
            setCourseid(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>



      <div className="mb-3">
          <button onClick={addChaptertoDb} className="btn btn-success">
            Save
          </button>
          <Link to="/coursechapter" className="btn btn-danger float-end">
            Cancel
          </Link>
        </div>

    </div>     
    )
}

export default AddChapter