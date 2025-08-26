import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faXmark  } from '@fortawesome/free-solid-svg-icons';
import './Notification.css'


function Notification({ messages, setMessages }) {



  const handleClose = (id) => {
    setMessages(prev => 
      prev.map(message =>
        message.id === id ? {...message, isShow: false} : message
      )
    );
  }

    return (
      <div className="notificationWrapper">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`notification ${!message.isShow && "closing"}`} 
            onAnimationEnd={() => {
              if (!message.isShow) {
                setMessages(prev => prev.filter(m => m.id !== message.id));
              }
            }}
          >
              <span className="icon">
                <FontAwesomeIcon icon={faBell} />
              </span>
              <div>
                <b>{message.title}</b>
                <p>{message.text}</p>
              </div>
              <span className="closeBtn" onClick={() => handleClose(message.id)}>
                <FontAwesomeIcon icon={faXmark} />
              </span>
          </div>
        ))}

      </div>
    );


};


export default Notification;