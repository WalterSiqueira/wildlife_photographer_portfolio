import React, {useRef} from 'react';
import butterfly from '../../assets/images/butterfly.jpg';
import fox from '../../assets/images/fox.jpg';
import cow from '../../assets/images/cow.jpg';
import owl from '../../assets/images/owl.jpg';
import left_arrow from '../../assets/images/left-arrow.png';
import right_arrow from '../../assets/images/right-arrow.png';
function Projects() {
  const butterFox = useRef();
  const cowOwl = useRef();
  let status = false;
  const showhide = () => {
    if (status == false) {
        butterFox.current.style.display = 'none'
        cowOwl.current.style.display = 'block';
        status = true;
    } else if (status == true) {
        butterFox.current.style.display = 'block'
        cowOwl.current.style.display = 'none';
        status = false; 
    }
  }
  return (
    <section className='projectsBlock'>
      <div ref={butterFox} className='butterFoxBox'>
        <img ref={butterFox} className='butterflyImage PImg' src={butterfly}/>
        <img ref={butterFox} className='foxImage PImg' src={fox}/>
      </div>
      <div ref={cowOwl} className='cowOwlBox'>
        <img ref={cowOwl} className='cowImage PImg' src={cow}/>
        <img ref={cowOwl} className='owlImage PImg' src={owl}/>
      </div>
      <div className='arrowButtons'>
        <img onClick={showhide} className='leftArrow' src={left_arrow}/>
        <img onClick={showhide} className='rightArrow' src={right_arrow}/> 
      </div>
    </section> 
  )
}

export default Projects;
