import React from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import uni from './logo.png'
import './home.css'
import pdf from './pdf/course.pdf'

function Navbar() {
    return (
        <>
        <div className="header_container">
    
    <div className="logo">
    <img src={uni} alt="logo"></img>
    
</div>

<div className="header_div">
<div className="upperheader">
  <Link to="/IIC_Cell" className="">IIC Cell</Link>
  <Link to="/EDC" className="" >EDC</Link>
  <Link to="/NAAC"  className="">NAAC</Link>
  <Link to="/Feedback"  className="">Feedback</Link>
  <Link to="/Contact"  className="">Contact</Link>
  <Link to="/"  className="">Home</Link>
  <span className="s_icon"><SearchIcon className="si"/><input type="text" placeholder="Search"/></span>
</div>
<hr/>
<div className="belowheader">
  <Link to="/" className="">About</Link>
  <Link to="/" className="">Academics</Link>
  <div className="dropdown">
  <Link to="/" className="dropbtn">Admissions</Link>
  <div className="dropdown-con">
    <Link to="/Courses_offered">Course offered</Link>
    <Link to="/admCriteria">Admission Criteria</Link>
    <Link to="/fee">Fee structure</Link>
    <Link to={pdf}>Information Brochure</Link>
    <Link to="/list_of_documents">List of Document</Link>
    <Link to="/Contact_Admission_Office">Contact Admission Office</Link>
    <Link to="/Apply_Now">Apply Now</Link>
</div>
</div>
  <Link to="/" className="">Department</Link>
  <Link to="/" className="">Training and Placement</Link>
  <Link to="/" className="">Student Activity Cell</Link>
  <Link to="/" className="">Research and development</Link>
  <Link to="/" className="">Quality Work</Link>
  <Link to="/" className="">Facilities</Link>
  
</div>
</div>
</div>

        </>
    )
}

export default Navbar
