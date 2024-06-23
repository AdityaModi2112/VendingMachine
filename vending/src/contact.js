import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div className="contact">
      <h1>CONTACT US!</h1>
      <form action="#">
        <div className='firstfield'>
            <input className='Fname' type='text' placeholder='First Name' required/>
            <input className='Lname' type='text' placeholder='Last Name' required/>
        </div>
        <div className='restfield'>
        <input type='email' placeholder='email' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='phone number' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='subject' required/>
        </div>
        <div className='textfield'>
        <textarea type='text' rows="6" placeholder='Message' required/>
        </div>
        <div className='contactbutton'>
            <button id='contactb'>Submit→</button>
            <button>Submit→</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;