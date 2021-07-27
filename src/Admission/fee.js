import React from 'react'
import Navbar from '../Navbar' 
import Contact from '../Contact'
import './fee.css'

function fee() {
    return (
        <>
            <Navbar/>
            <div className="fee_main">
                <div className="fee_header">
                    <table>
                        <tr>
                            <th>B.Tech Regular</th>
                            <th>B.Tech LEET</th>
                        </tr>
                        <tr>
                            <td>Admission fee Rs. 42450/-
(Each Semester)
(General Students)</td>
                            <td>Admission fee Rs. 42450/-
(Each Semester)</td>
                        </tr>
                        <tr>
                            <td>Rs 2000/- (IKG-PTU Processing fess For Ist Semester Only, for Management Quota Seats only)</td>
                            <td>Rs 2000/- (IKG-PTU Processing fess For 3rd Semester Only, for Management Quota Seats only)</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft:"45px",paddingTop:"45px"}} colSpan={2}><span style={{fontWeight:"bold"}}>*Note</span>: No refundable security is included in above mentioned fee.</td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft:"45px"}}>Separate Hostel Facility is available for boys and girls</td>
                        </tr>
                        <tr>
                            <td style={{background:"rgb(255, 100, 100)"}} colSpan={2}>Hostel fee Rs 35000/-p.a. and liable to change as per Management rules, Mess Charges Extra (as applicable)</td>
                        </tr>
                    </table>

                </div>
            </div>
            <Contact/>
        </>
    )
}

export default fee
