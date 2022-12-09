import React from 'react';
import moose from '../../assets/images/moose.png';
function Presentation() {
  return (
    <section className='presentationSection'>
      <img src={moose} className='background_image'/>
      <div className='titleBox'>
        <h1 className='presentationTitle'>The wild life as it is</h1>
      </div>
    </section>
  )
}

export default Presentation;
