import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function ContactSection({contactsId}) {
  return (
    <section ref={contactsId} className='contactsBlock'>
      <h2 className='contactsTitle'>Contacts</h2>
      <h3 className='contactsDescription'>I'm available for work!
          Please send me a message if you are interested!
          email: walterbarbozasiqueira@gmail.com
      </h3>
      <div className='contactsExternalButtons'>
        <a href='https://twitter.com/Walter__BS' target='_blank' className='twitterBtn'><img className='twitterIcon' src={twitterIcon}/></a>
        <a href='https://github.com/waltersiqueira' target='_blank' className='githubBtn'><img className='githubIcon' src={githubIcon}/></a>
        <a href='https://www.linkedin.com/in/walter-siqueira/' target='_blank' className='linkedinBtn'><img className='linkedinIcon' src={linkedinIcon}/></a>
      </div>
    </section>
  )
}
export default ContactSection;
