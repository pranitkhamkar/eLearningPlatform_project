// import './index.css'
import emailjs, { send } from 'emailjs-com'
import { useState } from 'react'
// import Footer from '../../Footer/Footer' 
// import Header from '../../Header/Header'
import AfterLogNavibar from '../Components/Navbar/AfterLogNavibar'
import { Link } from 'react-router-dom'

const Feedback = () => {

    const[senderName, setName]=useState('')
    const[ratingScore, setRatinScore]=useState('')
    const[Comments, setComments]=useState('')


    const emailFeedback=(e)=>{

        e.preventDefault();

        send(
            'service_zbsqhfa',
            'template_o17og9j',
            {
                senderName, ratingScore, Comments
            },
            'q3Xusqu4TeBBrz4DV'
        )
        .then((response)=>{
            console.log('Message sent successsfully', response.status, response.text)
        })
        .catch((err)=>{
            console.log('failed', err)
        })

        e.target.reset()
    } 

    return (
       <div>
           <AfterLogNavibar/>
         <h1>FeedBack</h1>
         <form>
                               <div className="col-md-12">
                                    <label  className="form-label">Name</label>
                                    <input type="text" className="form-control" 
                                    onChange={(e)=>setName(e.target.value)}
                                    required name="senderName"></input>
                                </div>
                                <div className="col-md-12">
                                    <label  className="form-label">Email</label>
                                    <input type="email" className="form-control"
                                    onChange={(e)=>setRatinScore(e.target.value)}
                                    required name="User_email"></input>
                                </div>
                                <div className="col-md-12">
                                    <label  className="form-label">ratingScore</label>
                                    <input type="number" className="form-control"
                                    onChange={(e)=>setRatinScore(e.target.value)}
                                    required name="ratingScore"></input>
                                </div>
                                
                                <div className="col-12">
                                    <label  className="form-label">Comments</label>
                                    <textarea type="text" className="form-control"
                                    onChange={(e)=> setComments(e.target.value)}
                                    required name="Comments" ></textarea>
                                </div>
                                <div>
                                  <input type='submit'
                                  value='send'
                                  className='form-control btn btn-primary'/>
                                </div>


         </form>
       </div>
    )
    }


export default Feedback