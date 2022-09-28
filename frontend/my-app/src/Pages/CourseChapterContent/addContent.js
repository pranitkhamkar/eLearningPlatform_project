import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import'./addContent.css'
import AdminNav from '../../Components/Navbar/adminNav'

const AddContent = () => {
    const [contentid, setContentId] = useState('')
    const [timeRequiredToCompleteTheCourse, setTimeRequiredToCompleteTheCourse] = useState('')   
    const [chapterContent, setChapterContent] = useState('')
    const [courseChapter, setCourseChapter] = useState('')
    const [contentLink, setContentLink] = useState('')

    const navigate = useNavigate()
  
    const addContenttoDb = () =>{
          //const artistId = 3         

         if(timeRequiredToCompleteTheCourse.length == 0){
             toast.warning('please enter time')
         } else if (chapterContent.length == 0){
             toast.warning('please enter content')
         }else{
              const body = {
                contentid,
                timeRequiredToCompleteTheCourse,
                chapterContent,
                courseChapter,
                contentLink
              }

              const url = `${URL}/addContent`

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
          <h2 class = "title">Add Content</h2>
           
          <div className="mb-3">
        <label htmlFor="" className="label-control">contentid</label>
        <input
          onChange={(e) => {
            setContentId(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>




          <div className="mb-3">
        <label htmlFor="" className="label-control">TimeRequiredToCompleteTheCourse</label>
        <input
          onChange={(e) => {
            setTimeRequiredToCompleteTheCourse(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="label-control">ChapterContent</label>
        <input
          onChange={(e) => {
            setChapterContent(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="" className="label-control">CourseChapter</label>
        <input
          onChange={(e) => {
            setCourseChapter(e.target.value)
          }}
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="" className="label-control">contentLink</label>
        <input
          onChange={(e) => {
            setContentLink(e.target.value)
          }}
          type="text"
          className="form-control"
        />
      </div>



      <div className="mb-3">
          <button onClick={addContenttoDb} className="btn btn-success">
            Save
          </button>
          <Link to="/coursechaptercontent" className="btn btn-danger float-end">
            Cancel
          </Link>
        </div>

    </div>     
    )
}

export default AddContent