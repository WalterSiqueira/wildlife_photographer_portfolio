import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function FooterSection() {
  return (
    <section className='footerBlock'>
      <h4 className='footerCopyright'>© Copyright Walter Siqueira. All Rights Reserved.</h4> 
      <div className='footerExternalButtons'>
        <button className='twitterBtn'><img className='twitterIcon' src={twitterIcon}/></button>
        <button className='githubBtn'><img className='githubIcon' src={githubIcon}/></button>
        <button className='linkedinBtn'><img className='linkedinIcon' src={linkedinIcon}/></button>
      </div> 
    </section>
  )
}
export default FooterSection;
