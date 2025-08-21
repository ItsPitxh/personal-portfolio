import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope,  } from '@fortawesome/free-regular-svg-icons';
import './Form.css';

function Form({setIsSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    setTimeout(() => setIsSubmit(false), 7000);
  }

  

  return (
    <form onSubmit={handleSubmit}>
            <div className='input'>
                <FontAwesomeIcon className='icon' icon={faUser} />
              <input type="text" placeholder='Full Name...' name="fullName"/>
            </div>
            <div className='input'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <input type="text" placeholder='Email Address' name="email"/>
            </div>


            <div className='textarea'>
              <span>
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                What Do You Have In Mind?
              </span>
              <textarea name="detail" rows='5' placeholder='Details...'></textarea>

            </div>
            
            
            <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
