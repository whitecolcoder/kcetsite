import React from 'react'
import './apply.css'
function apply() {
    return (
        <>
        <div className="apply_main">
            <div className="apply_header">
                <br/><br/>
                <br/><br/>
          <h2 className="et" style={{paddingLeft:"50px"}}>ET</h2>
          <h2 style={{marginTop:"60px",paddingLeft:"50px",fontSize:"30px"}}> Achieve our goal of excellence in the field of technology</h2>
          <h2 style={{paddingLeft:"50px",color:"brown",fontSize:"18px",marginTop:"-15px"}}>KCET- 2021 rewards your academic brilliance with global </h2>
          <h2 style={{paddingLeft:"50px",marginTop:"-15px",color:"brown",fontSize:"18px"}}>opportunities & extraordinary assistance with Scholarship</h2>

          <h2 style={{paddingLeft:"60px",fontSize:"35px"}}>Online Application 2021</h2>
          <div style={{paddingLeft:"60px"}} className="forms">
              <form>
                  <input type="text" placeholder="Student Name"/>
                  <input type="text" placeholder="Student's Father Name"/><br/>
                  <input type="text" placeholder="Student's City"/>
                  <input type="email" placeholder="Student's Email"/><br/>
                  <input type="text" placeholder="Student's Address"/>
                  <input type="number" placeholder="Student's Contact Number"/><br/>
                  <select className="gender">
    <option value="">Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>

  </select>
  <select className="category">
    <option value="">Select Category</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="ST">ST</option>
    <option value="SC">SC</option>
 </select>
 <select className="course">
    <option value="">Course</option>
    <option value="">Computer Science Engineering</option>
    <option value="">Mechnical Engineering</option>
    <option value="">Electronics and Communication Engineering</option>
    <option value="">Civil Engineering</option>


  </select><br/>
<button className="reg">Register</button>
<button className="log">Log In</button>

 

              </form>
          </div>

</div>
</div>
        </>
    )
}
export default apply
