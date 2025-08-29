import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope,  } from '@fortawesome/free-regular-svg-icons';

import './Form.css';
// import { useState } from "react";

function Form({setMessages , count}) {
  // const [formData, setFormData] = useState({fullName : "", email: "", detail : ""});
  
  function handleChange(e) {
     if(!e.target.value) {
        e.target.parentElement.classList.add("alert");
     } else {
        e.target.parentElement.classList.remove("alert");
     }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newMessage = e.target.fullName.value;
    if (e.target.fullName.value == "" && e.target.email.value == "") {
        e.target.fullName.parentElement.classList.add("alert");
        e.target.email.parentElement.classList.add("alert");
      return
    }

    setMessages(prev => [...prev, {id: count, title: "Form Submitted", text: "Thank you, " + newMessage + ". I'll reply back shortly", isShow: true}]);
    e.target.reset();
  }

  
  

  return (
    <form onSubmit={handleSubmit}>
            <div className={`input`}>
                <FontAwesomeIcon className='icon' icon={faUser} />
              <input 
                type="text" 
                placeholder='Full Name...' 
                name="fullName"
                // value={formData.fullName}
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
                // value={formData.email}
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
                // value={formData.detail}
                // onChange={handleChange}
              >

              </textarea>

            </div>
            
            
            <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
