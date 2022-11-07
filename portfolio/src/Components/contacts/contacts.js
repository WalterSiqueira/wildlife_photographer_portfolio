import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function ContactSection() {
  return (
    <section>
      <h2>Contacts</h2>
      <h3>I'm available for work!
          Please send me a message if you are interested!
          email: walterbarbozasiqueira@gmail.com
      </h3>
      <div>
        <button><img src={twitterIcon}/></button>
        <button><img src={githubIcon}/></button>
        <button><img src={linkedinIcon}/></button>
      </div>
    </section>
  )
}
export default ContactSection;
