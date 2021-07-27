import React from 'react'
import home from './home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import IIC_Cell from './Components/IIC_Cell'
import EDC from './Components/EDC'
import Contact from './Components/Contact'
import NAAC from './Components/NAAC'
import Feedback from './Components/Feedback'
import admCriteria from './Admission/admCriteria'
import coursesoff  from './Admission/coursesoff'
import fee from './Admission/fee'
import lod from './Admission/lod'
import apply from './Admission/apply'
import admoffice from './Admission/admoffice'



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route  path="/IIC_Cell" component={IIC_Cell}/>
        <Route  path="/EDC" component={EDC}/>
        <Route  path="/NAAC" component={NAAC}/>
        <Route  path="/Feedback" component={Feedback}/>
        <Route  path="/Contact" component={Contact}/>
        <Route path="/admCriteria" component={admCriteria}/>
        <Route path="/Courses_offered" component={coursesoff}/>
       <Route path="/fee" component={fee}/>
       <Route path="/list_of_documents" component={lod}/>
       <Route path="/Apply_Now" component={apply}/>
       <Route path="/Contact_Admission_Office" component={admoffice}/>

    </Switch>
    </Router>
     </>
  )
}

export default App;
