import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function FooterSection() {
  return (
    <section>
      <h4>© Copyright Walter Siqueira. All Rights Reserved.</h4> 
      <div>
        <button><img src={twitterIcon}/></button>
        <button><img src={githubIcon}/></button>
        <button><img src={linkedinIcon}/></button>
      </div> 
    </section>
  )
}
export default FooterSection;
