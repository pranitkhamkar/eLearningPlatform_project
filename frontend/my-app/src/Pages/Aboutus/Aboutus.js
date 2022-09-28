import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Aboutus.css'
import Navibar from "../../Components/Navbar/Navibar";
const Aboutus = () => {
return (

	<div>
        <Navibar/>
	<div className="about">
	  <div className="aboutus">
          
		<div className="box">
            
		  <br></br>
		<div className="Box-mb3">
		  <h1 id="h2" style={{color:'bisque'}}> About us</h1>
		  <h2 id="label" style={{color:'bisque'}}>
			{/* ,height:700 */}
			E-Learning is changing the usual learning experience. It has become the new standard way of learning and is highly beneficial to students due to its flexibility, low cost, and user experience.

There are a lot of e-learning websites offering free online courses and certifications. After all, websites fill the gap between online learners and educators.

		  </h2>
		  </div>
		</div>
	  </div>
	</div>
  </div>

);
};

export default Aboutus

