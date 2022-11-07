import React from 'react';
import ReactIcon from '../../Assets/images/react.png';
import SassIcon from '../../Assets/images/sass.png';
import JavascriptIcon from '../../Assets/images/java-script.png';
import CssIcon from '../../Assets/images/css.png';
import HtmlIcon from '../../Assets/images/html-5.png';
function TechSection() {
  return (
    <section>
      <h2>Technologies</h2>
      <div>
        <img src={ReactIcon}/> 
        <h3>React</h3>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
        It lets you compose complex UIs from small and isolated pieces of code called components.
        </p>
      </div>
      <div>
        <img src={JavascriptIcon}/> 
        <h3>Javascript</h3>
        <p>
          JavaScript is a scripting or programming language that allows you to 
          implement complex features on web pages.
        </p>
      </div>
      <div>
        <img src={CssIcon}/> 
        <h3>Css 3</h3>
        <p>
          Cascading Style Sheets (CSS) is a style sheet 
          language used for describing the presentation of a document written in a markup language.
        </p>
      </div>
      <div>
        <img src={HtmlIcon}/> 
        <h3>Html 5</h3>
        <p>
          The HyperText Markup Language or 
          HTML is the standard markup language for documents designed to be displayed in a web browser.
        </p>
      </div>
      <div>
        <img src={SassIcon}/> 
        <h3>Sass</h3>
        <p>
          Sass (short for syntactically awesome style sheets) is a preprocessor
          scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
        </p>
      </div>
    </section>
  )
}
export default TechSection;
