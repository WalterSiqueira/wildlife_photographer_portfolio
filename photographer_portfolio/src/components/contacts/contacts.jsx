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
    </section>
  )
}
export default ContactSection;
