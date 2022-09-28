import { useLocation, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import CoursesRow from '../../Components/CoursesRow'
import { URL } from '../../config'
import { toast } from 'react-toastify'
import axios, { Axios } from 'axios'
 
 const DeleteCourses = () =>{

    const { state } = useLocation()
    const navigate = useNavigate()

    const deleteCoursesById = () =>{
        const { id } = state
        const url = `${URL}/courses/delete/${id}`
        axios.delete(url).then((response) => {
             const result = response.data
             if(result['status'] == 'success'){
                toast.success("Course deleted Successfully")
                navigate('/admin')
             }else {
                 toast.error("Album not deleted")
             }
        })
    }

    useEffect(() => {
        deleteCoursesById()
      }, [])

     return (
         <h1>delete Courses</h1>
     )
 }

 export default DeleteCourses