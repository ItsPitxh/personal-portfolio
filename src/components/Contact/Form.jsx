import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope,  } from '@fortawesome/free-regular-svg-icons';

import './Form.css';
import { useState } from "react";

function Form({setMessage, setIsSubmit}) {
  const [formData, setFormData] = useState({fullName : "", email: "", detail : ""});
  
  function handleChange(e) {
    if(!e.target.value) {
       e.target.parentElement.classList.add("alert");
    } else {
       e.target.parentElement.classList.remove("alert");
    }

    setFormData({...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const {fullName, email, detail} = e.target;
    if(fullName.value != '' && email.value != '' && detail.value != '') {
      setIsSubmit(false);
      setMessage({title: "Form Submitted", text: `Thanks for your response, ${formData.fullName}!! I'll respond back to you shortly.`});
      setFormData({fullName: "", email: "", detail: ""});
    } else {
      fullName.parentElement.classList.add("alert");
      email.parentElement.classList.add("alert");
      detail.parentElement.classList.add("alert");

    }
    
  }

  
  

  return (
    <form onSubmit={handleSubmit}>
            <div className={`input`}>
                <FontAwesomeIcon className='icon' icon={faUser} />
              <input 
                type="text" 
                placeholder='Full Name...' 
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <span>

              </span>
            </div>
            <div className='input'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <input 
                type="text" 
                placeholder='Email Address' 
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>


            <div className='textarea'>
              <span>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                What Do You Have In Mind?
              </span>
              <textarea 
                name="detail" 
                rows='5' 
                placeholder='Details...'
                value={formData.detail}
                onChange={handleChange}
              >

              </textarea>

            </div>
            
            
            <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
