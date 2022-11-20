import React, {useRef} from 'react';
import css from './Assets/styles/css/main.css';
import Menu from './Assets/images/menu.png';
import Close from './Assets/images/close.png';
import IntroSection from './Components/intro/intro.js';
import ProjectSection from './Components/projects/projects.js';
import AboutSection from './Components/about_me/about.js';
import TechSection from './Components/technologies/tech.js';
import ContactSection from './Components/contacts/contacts.js';
import FooterSection from './Components/footer/footer.js';
function App() {
  const buttonsRef = useRef();
  const homeRef = useRef();
  const menuRef = useRef();
  const closeRef = useRef();
  let status = false;
  const introId = useRef();
  const techId = useRef();
  const aboutId = useRef();
  const projectsId = useRef();
  const contactsId = useRef();
  const scrollToIntro = () => {
    introId.current.scrollIntoView({block: 'center'});
  }
  const scrollToTech = () => {
    techId.current.scrollIntoView({block: 'center'});
  }
  const scrollToProjects = () => {
    projectsId.current.scrollIntoView({block: 'center'});
  }
  const scrollToAbout = () => {
    aboutId.current.scrollIntoView({block: 'center'});
  }
  const scrollToContacts = () => {
    contactsId.current.scrollIntoView({block: 'center'});
  }
  const showHideBTN = () => {
    if (status === false) {
      buttonsRef.current.style.display = 'grid';
      closeRef.current.style.display = 'block';
      homeRef.current.style.display = 'none';
      menuRef.current.style.display = 'none';
      status = true;
    } else if (status === true) {
      buttonsRef.current.style.display = 'none';
      closeRef.current.style.display = 'none';
      homeRef.current.style.display = 'block';
      menuRef.current.style.display = 'block';
      status = false;
    }
  }
  return (
    <main className='mainBlock'>
      <header className='headerBlock'>
        <button onClick={scrollToIntro} ref={homeRef} className='homeBTN'>Walter Siqueira</button>
        <div ref={buttonsRef} className='headerButtonsBox'>
          <button onClick={scrollToTech} className='techBTN'>Technologies</button>
          <button onClick={scrollToAbout} className='aboutBTN'>About</button>
          <button onClick={scrollToProjects} className='projectsBTN'>Projects</button>
          <button onClick={scrollToContacts} className='contactsBTN'>Contacts</button>
          <img onClick={showHideBTN} ref={closeRef} className='closeBTN' src={Close}/>
        </div>
        <img ref={menuRef} className='menuBTN' onClick={showHideBTN} src={Menu}/>
      </header>
      <IntroSection introId={introId}/>
      <ProjectSection projectsId={projectsId}/>
      <AboutSection aboutId={aboutId}/>
      <TechSection techId={techId}/>
      <ContactSection contactsId={contactsId}/>
      <FooterSection/>
    </main>
  )
}

export default App;
