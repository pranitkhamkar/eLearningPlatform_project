import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useNavigate } from "react-router"
import { URL } from "../config"
import { toast } from 'react-toastify'


const UserCoursesRow = (props) => {
  const { courses } = props
  const navigate = useNavigate()

  //  const deleteAlbum = () =>{
       
  //   const url = `${URL}/album/delete/${album.albumId}`
  //   axios.post(url).then((response) => {
  //     const result = response.data


  //     if (result['status'] == 'success') {
  //       toast.success('album deleted successfully')
  //       navigate('/admin')
  //     } else {
  //       toast.error(result['error'])
  //     }
  //   })

  //  }

  return (
    
    <tr>
       <td class="table-success">{courses.courseid}</td>
     
       <td class="table-success">{courses.courseTitle}</td>

      <td class="table-success">{courses.courseBrief}</td>

      <td class="table-success">{courses.numofChapter}</td>

      
      
      <td>
        <button
          onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            navigate('/userchapter',{state: {id: courses.courseid }})
          }}
          className="btn btn-success btn-sm">
          CoursesChapter
        </button>

        {/* <button   onClick={() => {
            // /add-songs-to-album -> path of the component
            // {album: album}      -> data needed to be passed to the component
            navigate('/delete-Courses',{state: {id: courses.courseid} })
          }}
        
        className="btn btn-danger float-end">
            delete
          </button> */}

      </td>
    </tr>
    
  )
}

export default UserCoursesRow
