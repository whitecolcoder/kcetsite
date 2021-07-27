import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import './office.css'

function admoffice() {
    return (
        <>
         <Navbar/>
         <div className="office_leader">
         <div className="office_main">
             
                 <h1 style={{color:"black"}}className="h_31">KCET OFFICE</h1>    
                 <h1 style={{color:"grey"}} className="h_32">C Block, Ranjit Avenue, Amritsar, Punjab 143001</h1>
             
             <div className="text">
                 <div className="query1">
             <p style={{fontSize:"25px",fontWeight:"bold"}}>For Admission Queries Contact:</p>
             <p>8198001100</p>
             <p>8198002200</p>
             <p>9878402703</p>
             <p>8198003300</p>
             <p>8198004400</p>
             </div>
<div className="query2">
    <p style={{fontSize:"25px",fontWeight:"bold"}}>Email:</p>
    <p>kcetamritsar@gmail.com</p>
</div>
             </div>
             </div>
             </div>
         <Contact/>
        </>
    )
}

export default admoffice
