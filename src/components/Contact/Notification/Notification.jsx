import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmark  } from '@fortawesome/free-solid-svg-icons';
import './Notification.css'

function Notification({isSubmit, setIsSubmit, message}) {

  return (
    <div className={`notification ${isSubmit && 'show'}`} >
        <span className="icon">
          <FontAwesomeIcon icon={faBell} />
        </span>
        <div>
          <b>{message.title}</b>
          <p>{message.text}</p>
        </div>
        <span className="close" onClick={() => setIsSubmit(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
    </div>
  );


};


export default Notification;