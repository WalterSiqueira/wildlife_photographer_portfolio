import React from 'react';

function ContactSection() {
  return (
    <section className='contactBlock'>
      <h2 className='contactTitle'>Contact Info</h2>
      <form className='formBox'>
        <input className='nameInput' placeholder='your name' type='text'/>
        <input className='emailInput' placeholder='exemple@test.com' type='email'/>
        <textarea placeholder='message' className='messageArea'/>
        <button className='submitBtn' type='submit'>contact me</button>
      </form>
      <div className='personalInfoBlock'>
        <div className='emailBox'>
          <h3 className='emailTitle'>My email:</h3>
          <h4 className='emailText'>kim_photographer@wildlife.com</h4>
        </div>
        <div className='locationBox'>
          <h3 className='locationTitle'>My location:</h3>
          <h4 className='locationText'>New york, USA</h4>
        </div>
      </div>
    </section>
  )
}
export default ContactSection;
