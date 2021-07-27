import React from 'react'
import Navbar from '../Navbar'
import Contact from '../Contact'
import './course.css'

function coursesoff() {
    return (
        <>
            <Navbar/>
            <div className="table_main">
            <div className="table_header">
                <table>
                    <tr>
                    <th>Course Name</th>
                    <th>Total Seats</th>
                    <th>Duration</th>
                    <th>Eligibility Criteria</th>
                    </tr>
                    <tr>
                        <td>Civil Engineering (CE)</td>
                        <td>60</td>
                        <td>4 years</td>
                        <td className="fourth_child" colSpan={4}>(For Regular Students) : 10+2 Examination with Physcis and Mathematics as compulsory subjets along with one from Chemistry, Biological, Computer Science, Biology</td>
                    </tr>
                    <tr>
                        <td>Computer Science and Engineering (CSE)</td>
                        <td>60</td>
                        <td>4 years</td>
                        <td></td>

                    </tr>
                    <tr>
                        <td>Electronic and Communication Engineering (ECE)</td>
                        <td>30</td>
                        <td>4 years</td>
                        <td></td>

                    </tr>
                    <tr>
                        <td>Artificial Intelligence and Machine laerning (AIML)</td>
                        <td>30</td>
                        <td>4 years</td>
                        <td></td>

                    </tr>
                    <tr>
                        <td>Mechanical Engineering (ME)</td>
                        <td>60</td>
                        <td>4 years</td>
                        <td></td>

                    </tr>
                    <tr>
                    <th>LEET(20% of regular seats)</th>
                    <th>Total Seats</th>
                    <th>Duration</th>
                    <th>Eligibility Criteria</th>
                    </tr>
                    <tr>
                        <td>Civil Engineering</td>
                        <td>12</td>
                        <td>3 years</td>
                        <td>(For LEET Students) : Diploma from any recognized Technical Board in any stream</td>

                    </tr>
                    <tr>
                        <td>Computer Science and Engineering</td>
                        <td>12</td>
                        <td>3 years</td>
                        <td></td>

                    </tr>
                     <tr>
                        <td>Electronic and Communication Engineering</td>
                        <td>12</td>
                        <td>3 years</td>
                        <td></td>

                    </tr> 
                    <tr>
                        <td>Mechanical Engineering</td>
                        <td>12</td>
                        <td>3 years</td>
                        <td></td>


                    </tr>
                    <tr>
                    <th>UGC COURSES</th>
                    <th>Total Seats</th>
                    <th>Duration</th>
                    <th>Eligibility Criteria</th>
                    </tr>
                    <tr>
                        <td>B.Sc Agriculture (Hons.)</td>
                        <td>4 years</td>
                        <td>30</td>
                        <td>All those candidates who have passed 10+2 or equivalent examination in Science/Agriculture with Physics, Chemistry and Mathematics/Biology/Agriculture with atleast 50% Marks (45% marks in case of candidate belonging to Reserved Category) in aggregate from any Board recognized or established by Central/State Government through a legislation</td>
                    </tr>
                    <tr>
                        <td>Bachelor of Computer Applications(BCA)</td>
                        <td>30</td>
                        <td>3 years</td>
                        <td>All those candidates who have passed the 10+2 or its equivalent examination in any stream conducted by a recognized Board / University / Council. OR Those candidates who have passed their Matriculation examination AND have also passed three year Diploma in any Trade from Punjab State Board of Technical Education & Industrial Training, Chandigarh or such Examination from any other recognized State Board of Technical Education, or Sant Longowal Institute of Engineering & Technology, Longowal.</td>
                    </tr>
                    <tr>
                        <td>Bachelor of Business Administration (BBA)</td>
                        <td>30</td>
                        <td>3 years</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bachelor of Hotel Management and Catering Technology (B.HMCT)</td>
                        <td>60</td>
                        <td>3 years</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Bachelor of Tourism and Travel Management (BTTM)</td>
                        <td>30</td>
                        <td>3 years</td>
                        <td></td>
                    </tr>
                    <tr>
                    <th> PARAMEDICAL COURSES</th>
                    <th>Total Seats</th>
                    <th>Duration</th>
                    <th>Eligibility Criteria</th>
                    </tr>
                    <tr>
                        <td>B.Sc Radiology and Imaging Technology</td>
                        <td>60</td>
                        <td>3 years</td>
                        <td>All those candidates who have passed the 10+2 with Physics & Chemistry as compulsory subjects and either Mathematics or Biology from recognized Board / University / Council or 10+2 with vocational course in Medical Laboratory Science / Medical Laboratory Technology with atleast 50% marks (45% marks in case of candidate belonging to Reserved Category) in aggregate.</td>
                    </tr>
                    <tr>
                        <td>B.Sc. Anaesthesia/Operation Theatre</td>
                        <td>60</td>
                        <td>3 years</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>B.Sc. Medical Lab Science</td>
                        <td>30</td>
                        <td>3 years</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>M.Sc.Radiology and Imaging Technology</td>
                        <td>30</td>
                        <td>2 years</td>
                        <td>All those candidates who have passed Bachelor’s degree in Radiology and Imaging Technology of minimum three years duration from a University recognized by UGC.</td>
                    </tr>
                    <tr>
                        <td>M.Sc. Anaesthesia/Operation Theatre</td>
                        <td>30</td>
                        <td>2 years</td>
                        <td>All those candidates who have passed Bachelor’s degree in Anaesthesia/Operation Theatre of minimum three years duration from a University recognized by UGC.</td>
                    </tr>
                </table>
            </div>
            </div>
            <Contact/>
        </>
    )
}

export default coursesoff
