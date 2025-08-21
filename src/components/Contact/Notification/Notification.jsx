import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmark  } from '@fortawesome/free-solid-svg-icons';
import './Notification.css'

function Notification({isSubmit , setIsSubmit}) {
  
  return (
    <div className={`notification ${isSubmit ? "show" : ""}`} >
        <span className="icon">
          <FontAwesomeIcon icon={faBell} />
        </span>
        <div>
          <b>Form Subbmited!</b>
          <p>Thank You, Your Name for your response. I'll reply back in a sec!</p>
        </div>
        <span className="close" onClick={() => setIsSubmit(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
    </div>
  );
};

export default Notification;