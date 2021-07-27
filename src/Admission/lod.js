import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import './lod.css'


function lod() {
    return (
        <>
          <Navbar/>
          <div className="lod_main">
              <div className="lod_header">
                  <table>
                      <tr>
                          <td>Matric Certificate</td>
                      </tr>
                      <tr>
                          <td>10+2 Certificate</td>
                      </tr>
                      <tr>
                          <td>Migration Certificate</td>
                      </tr>
                      <tr>
                          <td>Character Certificate</td>
                      </tr>
                      <tr>
                          <td>Residence Certificate</td>
                      </tr>
                      <tr>
                          <td>Pasport Size Photo(8 PP size copies)</td>
                      </tr>
                      <tr>
                          <td>Father + Mother Photograph (Hostel Students)</td>
                      </tr>
                      <tr>
                          <td>Schedule Cast/ Backward Certificate if any</td>
                      </tr>
                      <tr>
                          <td>Low Income Certificate for SC students ( Less than 2.5 Lac)</td>
                      </tr>
                      <tr>
                          <td>Adhar Card</td>
                      </tr>
                      <tr>
                          <td>Bank Account ( under student's name) linked with Adhar Card (for SC/BC)</td>
                      </tr>
                      <tr>
                          <td>Provisional Diploma Certificate(PDC)</td>
                      </tr>
                  </table>

              </div>
          </div>
          <Contact/>  
        </>
    )
}

export default lod
