import React from 'react';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import twitter from '../../assets/images/twitter.png';
import linkedin from '../../assets/images/linkedin.png';
function FooterSection() {
  return (
    <section className='footerSection'>
      <img className='instagramIcon' src={instagram}/>
      <img className='facebookIcon' src={facebook}/>
      <img className='twitterIcon' src={twitter}/>
      <img className='linkedinIcon' src={linkedin}/>
    </section>
  )
}
export default FooterSection;
