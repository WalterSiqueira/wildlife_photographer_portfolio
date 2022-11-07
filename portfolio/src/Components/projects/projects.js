import React from 'react';
import noteApp from '../../Assets/images/noteApp.png';
import SimpleCalc from '../../Assets/images/SimpleCalc.png';
import FyloLanding from '../../Assets/images/FyloLanding.png';
import TipCalc from '../../Assets/images/TipCalc.png';
import ReactIcon from '../../Assets/images/react.png';
import SassIcon from '../../Assets/images/sass.png';
import JavascriptIcon from '../../Assets/images/java-script.png';
import CssIcon from '../../Assets/images/css.png';
import HtmlIcon from '../../Assets/images/html-5.png';
function ProjectSection() {
  return (
    <section>
        <h2>Projects</h2>
        <div>
          <img src={noteApp}/> 
          <h4>To-do App</h4>
          <h5>A to-do app to keep your notes that use CRUD operations</h5>
          <h3>Technologies</h3>
          <div>
            <button className='reactIcon'><img src={ReactIcon}/></button>
            <button className='sassIcon'><img src={SassIcon}/></button>
            <button className='javascriptIcon'><img src={JavascriptIcon}/></button>
            <button className='cssIcon'><img src={CssIcon}/></button> 
          </div>
          <button>Live Site</button>
          <button>Github</button>
        </div>
        <div>
          <img src={SimpleCalc}/> 
          <h4>calculator App</h4>
          <h5>A simple calculator to do math operations</h5>
          <h3>Technologies</h3>
          <div>
            <button className='htmlIcon'><img src={HtmlIcon}/></button>
            <button className='sassIcon'><img src={SassIcon}/></button>
            <button className='javascriptIcon'><img src={JavascriptIcon}/></button>
            <button className='cssIcon'><img src={CssIcon}/></button> 
          </div>
          <button>Live Site</button>
          <button>Github</button>
        </div>
        <div>
          <img src={FyloLanding}/> 
          <h4>Landing page</h4>
          <h5>A landing page for a fictious enterpraise called fylo</h5>
          <h3>Technologies</h3>
          <div>
            <button className='reactIcon'><img src={ReactIcon}/></button>
            <button className='sassIcon'><img src={SassIcon}/></button>
            <button className='javascriptIcon'><img src={JavascriptIcon}/></button>
            <button className='cssIcon'><img src={CssIcon}/></button> 
          </div>
          <button>Live Site</button>
          <button>Github</button>
        </div>
        <div>
          <img src={TipCalc}/> 
          <h4>Tip calculator App</h4>
          <h5>A restaurant's tip calculator</h5>
          <h3>Technologies</h3>
          <div>
            <button className='htmlIcon'><img src={HtmlIcon}/></button>
            <button className='javascriptIcon'><img src={JavascriptIcon}/></button>
            <button className='cssIcon'><img src={CssIcon}/></button> 
          </div>
          <button>Live Site</button>
          <button>Github</button>
        </div>
    </section>
    
  )
}
export default ProjectSection;
