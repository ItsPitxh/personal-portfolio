// src/components/Contact/Contact.jsx - Template
import './Contact.css';
import Footer from '../Footer/Footer';

import Form from './Form';
import { useState } from 'react';

import Notification from './Notification/Notification';


function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <section id="contact" className="contact section">
      <div className="container">
        
        {/* TODO: นักศึกษาเพิ่ม contact form ที่นี่ */}
        <div className="contact-placeholder">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!

        </p>
          <Form setIsSubmit={setIsSubmit}/>
        </div>
      </div>
      <Footer />

      <Notification isSubmit={isSubmit} setIsSubmit={setIsSubmit}/>
      
    </section>
  );
}

export default Contact;