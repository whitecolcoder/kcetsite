import React from 'react'
import './home.css'
import Navbar from './Navbar'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PregnantWomanIcon from '@material-ui/icons/PregnantWoman';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AccessibilityNewOutlinedIcon from '@material-ui/icons/AccessibilityNewOutlined';
import SaveIcon from '@material-ui/icons/Save';
import Contact from './Contact'

function home() {
  return (
    <>
    
    <Navbar/>
<div className="image">

<img src="http://kcet.co.in/images/s.jpg"alt="slide1"/>
    </div>
    <div className="main_div">
      <div className="box"><AccountBalanceIcon className="div_icon"/>Student Grievance</div>
      <div className="box"><PregnantWomanIcon className="div_icon"/>Women</div>
      <div className="box"><ContactMailIcon className="div_icon"/>Services towards</div>
      <div className="box"><PeopleOutlineIcon className="div_icon"/>Research and development</div>
      <div className="box"><AccessibilityNewOutlinedIcon className="div_icon"/>Anti-Ragging Cell</div>
      <div className="box"><SaveIcon className="div_icon"/>SC/ST Cell</div>
</div>
<div className="b_color">
  <div><img className="award" src="http://kcet.co.in/images/c.jpg" alt="award"/></div>
  <div><img className="grad" src="http://kcet.co.in/images/conv3.jpg" alt="grad"/></div>
</div>
<Contact/>

</>
  )
}

export default home;
