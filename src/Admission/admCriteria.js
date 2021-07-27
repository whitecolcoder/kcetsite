import React from 'react'
import Navbar from '../Navbar'
import './adm.css'
import Contact from '../Contact'
function admCriteria() {
    return (
        <>
        <Navbar/>
        <div className="adm_logo">
             <h3>Khalsa College Of Engineering </h3>
             <h3 className="h32">And Technology,Punjab</h3>
             <h4>Admission Criteria</h4>
             <button className="abtn">Apply now</button>
        </div>
        <div className="sir_logo">
            <img src="https://kcet.co.in/images/amitm.jpg" alt="sir"></img>
            <h1>Er.Amit Mahajan</h1>
            <p>Co-ordinator (Admission)</p>
            <p className="bio">For admission to Engineering courses, 85% seats shall be open to the candidates from within the state of Punjab and 15% will be open to candidates from outside the state. Appearing in JEE-2017 conducted by CBSE New Delhi is mandatory to claim seats on merit under 85% quota reserved for Punjab Residesnts through a centralized counselling of IKG-Punjab Technical University, Kaputhala and also for students claming seats, under 15% reserved, from ouside Punjab. In case the seats do not get filled under respective categories,the eligibility may be considered on the basis of qualifying examination, i.e. 10+2, If a candidate is not able to produce his residence certificate, he/she shall be considered fo 15% quota/category only.</p>

        </div>
        <Contact/>
        </>
    )
}

export default admCriteria
