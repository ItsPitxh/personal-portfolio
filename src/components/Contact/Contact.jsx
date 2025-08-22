// src/components/Contact/Contact.jsx - Template
import './Contact.css';
import Footer from '../Footer/Footer';

import Form from './Form';
import { useEffect, useState } from 'react';

import Notification from './Notification/Notification';


function Contact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [message, setMessage] = useState(
    {title: "Welcome Alert", text: "Hello, welcome to my portfolio"}
  )
   useEffect(() => {
     setIsSubmit(true);
     setTimeout(() => setIsSubmit(false), 7000);
  }, [message]);

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact-placeholder">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's work together!
        </p>
          <Form setIsSubmit={setIsSubmit} setMessage={setMessage}/>
        </div>
      </div>
      <Footer />

      <Notification isSubmit={isSubmit} setIsSubmit={setIsSubmit} message={message}/>
      
    </section>
  );
}

export default Contact;