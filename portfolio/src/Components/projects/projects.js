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
function ProjectSection({projectsId}) {
  return (
    <section ref={projectsId} className='projectsBlock'>
        <h2 className='projectsTitle'>Projects</h2>
        <div className='noteAppBlock'>
          <img className='noteImg'src={noteApp}/> 
          <h4 className='noteTitle'>To-do App</h4>
          <h5 className='noteDescription'>A to-do app to keep your notes that use CRUD operations</h5>
          <h3 className='noteSubtitle'>Technologies</h3>
          <div className='noteButtonsBlock'>
            <button className='reactBtn'><img className='reactIcon'src={ReactIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <button onclick=" window.open('https://todo-walter.vercel.app/')" target='_blank' className='noteLiveBtn'>Live Site</button>
          <button onclick=" window.open('https://github.com/WalterSiqueira/To_do_app')" target='_blank' className='noteGithubBtn'>Github</button>
        </div>
        <div className='calcBlock'>
          <img className='calcImg' src={SimpleCalc}/> 
          <h4 className='calcTitle'>calculator App</h4>
          <h5 className='calcDescription'>A simple calculator to do math operations</h5>
          <h3 className='calcSubtitle'>Technologies</h3>
          <div className='calcButtonsBlock'>
            <button className='htmlBtn'><img className='htmlIcon' src={HtmlIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <button onclick=" window.open('https://calculator-walter.vercel.app/')" target='_blank' className='calcLiveBtn'>Live Site</button>
          <button onclick=" window.open('https://github.com/WalterSiqueira/Calculator')" target='_blank' className='calcGithubBtn'>Github</button>
        </div>
        <div className='fyloBlock'>
          <img className='fyloImg' src={FyloLanding}/> 
          <h4 className='fyloTitle'>Landing page</h4>
          <h5 className='fyloDescription'>A landing page for a fictious enterpraise called fylo</h5>
          <h3 className='fyloSubtitle'>Technologies</h3>
          <div className='fyloButtonsBlock'>
            <button className='reactBtn'><img className='reactIcon' src={ReactIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <button onclick=" window.open('https://fylo-landing-two.vercel.app/')" target='_blank' className='fyloLiveBtn'>Live Site</button>
          <button onclick=" window.open('https://github.com/WalterSiqueira/fylo-landing-page')" target='_blank' className='fyloGithubBtn'>Github</button>
        </div>
        <div className='tipBlock'>
          <img className='tipImg' src={TipCalc}/> 
          <h4 className='tipTitle'>Tip calculator App</h4>
          <h5 className='tipDescription'>A restaurant's tip calculator</h5>
          <h3 className='tipSubtitle'>Technologies</h3>
          <div className='tipButtonsBlock'>
            <button className='htmlBtn'><img className='htmlIcon' src={HtmlIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <button onclick=" window.open('https://tip-calculator-orcin.vercel.app/')" target='_blank' className='tipLiveBtn'>Live Site</button>
          <button onclick=" window.open('https://github.com/WalterSiqueira/tip_calculator')" target='_blank' className='tipGithubBtn'>Github</button>
        </div>
    </section>
    
  )
}
export default ProjectSection;
