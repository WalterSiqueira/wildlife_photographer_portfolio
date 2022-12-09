import React from 'react';
import butterfly from '../../assets/images/butterfly.jpg';
import fox from '../../assets/images/fox.jpg';
import cow from '../../assets/images/cow.jpg';
import owl from '../../assets/images/owl.jpg';
import left_arrow from '../../assets/images/left-arrow.png';
import right_arrow from '../../assets/images/right-arrow.png';
function Projects() {
  return (
    <section className='projectsBlock'>
      <img className='butterflyImage PImg' src={butterfly}/>
      <img className='foxImage PImg' src={fox}/>
      <img className='cowImage PImg' src={cow}/>
      <img className='owlImage PImg' src={owl}/>
      <div className='arrowButtons'>
        <img className='leftArrow' src={left_arrow}/>
        <img className='rightArrow' src={right_arrow}/> 
      </div>
    </section> 
  )
}

export default Projects;
