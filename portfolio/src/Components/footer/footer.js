import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function FooterSection() {
  return (
    <section className='footerBlock'>
      <h4 className='footerCopyright'>© Copyright Walter Siqueira. All Rights Reserved.</h4> 
      <div className='footerExternalButtons'>
        <a href='https://twitter.com/Walter__BS' target='_blank' className='twitterBtn'><img className='twitterIcon' src={twitterIcon}/></a>
        <a href='https://github.com/waltersiqueira' target='_blank' className='githubBtn'><img className='githubIcon' src={githubIcon}/></a>
        <a href='https://www.linkedin.com/in/walter-siqueira/' target='_blank' className='linkedinBtn'><img className='linkedinIcon' src={linkedinIcon}/></a>
      </div> 
    </section>
  )
}
export default FooterSection;
