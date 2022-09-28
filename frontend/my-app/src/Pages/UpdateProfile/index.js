import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'

const UpdateProfile = () => {
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [mobilenumber, setMobileNumber] = useState('')

  const navigate = useNavigate()

  const updateprofile = () => {
    if (age.length == 0) {
      toast.warning('please enter your New Age')
    } else if (mobilenumber.length == 0) {
        toast.warning('please enter your New Mobile Number')
    }  else {
      const body = {
        email,
        age,
        mobilenumber,
      }

      // url to make updateprofile api call
      const url = `${URL}/user/updateprofile`

      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Profile Updated')

          // get the data sent by server
          const { email, age, mobilenumber } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['email'] = email
          sessionStorage['age'] = age
          sessionStorage['mobilenumber'] = mobilenumber

          // navigate to home component
          navigate('/home')
        } else {
          toast.error('Data not get updated')
        }
      })
    }
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Update Profile</h1>
      <br></br>
     
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
                required = {true} 
                readOnly = {true}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
              Age
              </label>
              <input
                onChange={(e) => {
                    setAge(e.target.value)
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
             Mobile Number
              </label>
              <input
                onChange={(e) => {
                    setMobileNumber(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <button onClick={updateprofile} className="btn btn-primary">
                Update Profile  
              </button>
              <br></br>
              <br></br>
              <div>
               for home page  <Link to="/home">click here</Link>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default UpdateProfile