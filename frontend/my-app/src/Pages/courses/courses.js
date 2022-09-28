import { useNavigate } from 'react-router'
import Signin from '../Signin'
import './courses.css'
import { Link } from 'react-router-dom'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Navibar from '../../Components/Navbar/Navibar';

const Courses = () =>{
    return (
        <div className='Courses'>
           

            <Navibar/>
        
        
        <div  className="side">

            <br/>  
          <br/>
          <br/>

            <div className="row" >    
            <h2 className="tag"><mark><em>Courses Available</em></mark></h2>   
            </div>

            <br/>

            <div className="row" >
                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                    <img src="https://static.javatpoint.com/springboot/images/spring-boot-tutorial.jpg" className="features" style={{height:120, width: 150, padding: 1  }}></img>
                </div>
                <div className="row"  >
                
                <b>Learn Spring Boot Tutorial</b>
                Spring Boot Tutorial provides basic and advanced concepts of Spring Framework. Our Spring Boot Tutorial is designed for beginners and professionals both.

Spring Boot is a Spring module that provides the RAD (Rapid Application Development) feature to the Spring framework.

Our Spring Boot Tutorial includes all topics of Spring Boot such, as features, project, maven project, starter project wizard, Spring Initializr, CLI, applications, annotations, dependency management, properties, starters, Actuator, JPA, JDBC, etc                </div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1" className="features" style={{height:120, width: 150, padding: 1  }}></img>
                </div>
                <div className="row"  >
                
                <b>Java Tutorial</b>
                Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. </div>
    
            <br/>
            <br/>
            <br/>
            </div>
            </div> 

            

            <br/>

            <div className="row" >
                <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                    <img src="https://static.javatpoint.com/htmlpages/images/html-tutorial.png" className="features" style={{height:120, width: 150, padding: 1  }}></img>
                </div>
                <div className="row"  >
                
                <b>Learn HTML Tutorial</b>
                HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.</div>
                </div>

                <div className="col"  style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src="https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png" className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Learn ReactJS Tutorial</b>
                ReactJS tutorial provides basic and advanced concepts of ReactJS. Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.

ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.               
             </div>







             </div>     
             </div>


             </div>     
             </div>

             
            )
    };
    
    export default Courses









    
                {/* <div className="col" style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src="https://static.javatpoint.com/htmlpages/images/html-tutorial.png" className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Learn Html Tutorial</b>
                HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.      
                  </div>
                </div>



                <div className="col"style={{ display: "block" , padding: 30 }}>
                <div className="row">
                <img src="https://static.javatpoint.com/mysql/images/mysql-tutorial.png" className="features" style={{height:120, width: 150, padding: 1 }}></img>
                </div>
                <div className="row">
                <b>Learn MySQl Tutorial</b>
                MySQL tutorial provides basic and advanced concepts of MySQL. Our MySQL tutorial is designed for beginners and professionals.

MySQL is a relational database management system based on the Structured Query Language, which is the popular language for accessing and managing the records in the database. MySQL is open-source and free software under the GNU license. It is supported by Oracle Company.

Our MySQL tutorial includes all topics of MySQL database that provides for how to manage database and to manipulate data with the help of various SQL queries.                </div>
                <br/>
            </div> */}