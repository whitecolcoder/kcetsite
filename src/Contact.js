import React from 'react'
import './home.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import map from './4004.png'

function Contact() {
    return (
        <>
        <div className="last_div">
<div className="first_block">
<h1>VIRTUAL TOUR:-</h1>
<hr/>
<iframe width="400" height="200" src="https://www.youtube.com/embed/Aa06ibn7bCQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>"
<p>Address</p>
<p>Khalsa College of Engineering</p>
<p>C-block, Ranjit Avenue</p>
<p>Amritsar</p>
<p>Punjab,143001</p>
</div>
<div className="s_block">
<h1>HOW TO REACH US:-</h1>
<hr/>
<img className="mapa" src={map} alt="map"/>
<p>Contact</p>
<p>0183-5030765,0183-2056969</p>
<p>M.no.</p>
<p>8198001100,8198002200,8198003300,819004400</p>
<p>kcetamritsar@gmail.com</p>

</div>
</div>
        <div>
            <div className="fter">
  <div className="social">
  <p>&copy; 2021, All Rights Reserved, Khalsa College Of Engineering and Technology.</p>
<FacebookIcon/>
<InstagramIcon/>
<LinkedInIcon/>
<TwitterIcon/>
<YouTubeIcon/>
<PinterestIcon/>
</div>
</div>
        </div>
        </>
    )
}

export default Contact
