import React from 'react';
import kim from '../../assets/images/kim.jpg';
function About() {
  return (
    <section className='aboutBlock'>
      <img src={kim} className='kimImage'/>
      <h2 className='aboutTitle'>About me</h2>
      <h3 className='greetings'>Hello i am <h4 className='kimsName'>Kimbely Ellis</h4></h3>
      <p className='introductionText'>I am a 28 years old professional wildlife photographer
        that love to show the wonderful side of the nature
      </p>
    </section>
  )
}

export default About;
