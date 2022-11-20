import React from 'react';

function IntroSection({introId}) {
  return (
    <section ref={introId} className='introBlock'>
      <h3 className='introGreeting'>Hi my name is</h3>
      <h1 className='introName'>Walter Siqueira</h1>
      <h3 className='introDescription'>I am a Front-end developer based in Brazil that is always looking
      for knowladge and new experiences
      </h3>
    </section>
  )
}

export default IntroSection;
