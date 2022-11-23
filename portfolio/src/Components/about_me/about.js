import React from 'react';
import twitterIcon from '../../Assets/images/twitter.png';
import linkedinIcon from '../../Assets/images/linkedin.png';
import githubIcon from '../../Assets/images/github.png';

function AboutSection({aboutId}) {
  return (
    <section ref={aboutId} className='aboutBlock'>
      <h2 className='aboutTitle'>About Me</h2>
      <p className='aboutDescription'>Hello i am Walter Siqueira i am a programmer specialized in
        web/front-end,i have knowledge in html, css and javascript,
        and i know React.js, styled components, sass,
        also some knowledge in  web design, i currently live in São Paulo, Brazil and i’m currently looking for an opportunity to do my first job as a programmer.
        I learned programming by myself from my parents home and although
        i don’t have a university’s degree i learn fast and always try to find the better solution possible for the problem at hand.
        i’m planning on starting on back-end too as soon as possible and get a degree on either IT or web design and continuing to learn new things on this journey . 
      </p>
      <h3 className='aboutSubtitle'>Contact me through my social media!</h3>
      <div className='aboutExternalButtons'>
        <a href='https://twitter.com/Walter__BS' target='_blank' className='twitterBtn'><img className='twitterIcon' src={twitterIcon}/></a>
        <a href='https://github.com/waltersiqueira' target='_blank' className='githubBtn'><img className='githubIcon' src={githubIcon}/></a>
        <a href='https://www.linkedin.com/in/walter-siqueira/' target='_blank' className='linkedinBtn'><img className='linkedinIcon' src={linkedinIcon}/></a>
      </div>
    </section>
  )
}
export default AboutSection;
