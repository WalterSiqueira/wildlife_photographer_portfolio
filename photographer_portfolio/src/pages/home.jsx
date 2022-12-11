import React from 'react';
import Presentation from '../components/presentation/presentation.jsx';
import About from '../components/about/about.jsx';
import Contacts from '../components/contacts/contacts.jsx';
import Footer from '../components/footer/footer.jsx';
import Projects from '../components/projects/projects.jsx';
import main from '../assets/styles/css/main.css';

function Home() {
  return (
    <main className='mainBlock'>
      <Presentation/> 
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </main>
  )
}


export default Home;
