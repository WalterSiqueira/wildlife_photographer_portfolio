import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function ContactSection() {
  return (
    <section className='contactsBlock'>
      <h2 className='contactsTitle'>Contacts</h2>
      <h3 className='contactsDescription'>I'm available for work!
          Please send me a message if you are interested!
          email: walterbarbozasiqueira@gmail.com
      </h3>
      <div className='contactsExternalButtons'>
        <button className='twitterBtn'><img className='twitterIcon' src={twitterIcon}/></button>
        <button className='githubBtn'><img className='githubIcon' src={githubIcon}/></button>
        <button className='linkedinBtn'><img className='linkedinIcon' src={linkedinIcon}/></button>
      </div>
    </section>
  )
}
export default ContactSection;
