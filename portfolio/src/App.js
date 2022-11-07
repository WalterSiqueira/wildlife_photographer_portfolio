import React from 'react';
import Menu from './Assets/images/menu.png';
import IntroSection from './Components/intro/intro.js';
import ProjectSection from './Components/projects/projects.js';
import AboutSection from './Components/about_me/about.js';
import TechSection from './Components/technologies/tech.js';
import ContactSection from './Components/contacts/contacts.js';
import FooterSection from './Components/footer/footer.js';
function App() {
  return (
    <main>
      <header>
        <button>Walter Siqueira</button>
        <button className='homeBTN'>Technologies</button>
        <button className='aboutBTN'>About</button>
        <button className='projectsBTN'>Projects</button>
        <button className='contactsBTN'>Contacts</button>
        <img src={Menu}/> 
      </header>
      <IntroSection/>
      <ProjectSection/>
      <AboutSection/>
      <TechSection/>
      <ContactSection/>
      <FooterSection/>
    </main>
  )
}

export default App;
