import React from 'react';
import ReactIcon from '../../Assets/images/react.png';
import SassIcon from '../../Assets/images/sass.png';
import JavascriptIcon from '../../Assets/images/java-script.png';
import CssIcon from '../../Assets/images/css.png';
import HtmlIcon from '../../Assets/images/html-5.png';
function TechSection({techId}) {
  return (
    <section ref={techId} className='techBlock'>
      <h2 className='techTitle'>Technologies</h2>
      <div className='reactBlock'>
        <img className='reactImg' src={ReactIcon}/> 
        <h3 className='reactTitle'>React</h3>
        <p className='reactDescription'>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
        It lets you compose complex UIs from small and isolated pieces of code called components.
        </p>
      </div>
      <div className='JavascriptBlock'>
        <img className='javascriptImg' src={JavascriptIcon}/> 
        <h3 className='javascriptTitle'>Javascript</h3>
        <p className='javascriptDescription'>
          JavaScript is a scripting or programming language that allows you to 
          implement complex features on web pages.
        </p>
      </div>
      <div className='cssBlock'>
        <img className='cssImg' src={CssIcon}/> 
        <h3 className='cssTitle'>Css 3</h3>
        <p className='cssDescription'>
          Cascading Style Sheets (CSS) is a style sheet 
          language used for describing the presentation of a document written in a markup language.
        </p>
      </div>
      <div className='htmlBlock'>
        <img className='htmlImg' src={HtmlIcon}/> 
        <h3 className='htmlTitle'>Html 5</h3>
        <p className='htmlDescription'>
          The HyperText Markup Language or 
          HTML is the standard markup language for documents designed to be displayed in a web browser.
        </p>
      </div>
      <div className='sassBlock'>
        <img className='sassImg' src={SassIcon}/> 
        <h3 className='sassTitle'>Sass</h3>
        <p className='sassDescription'>
          Sass (short for syntactically awesome style sheets) is a preprocessor
          scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
        </p>
      </div>
    </section>
  )
}
export default TechSection;
