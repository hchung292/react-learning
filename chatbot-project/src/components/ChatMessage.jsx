import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import dayjs from 'dayjs'

import './ChatMessage.css'

export function ChatMessage({message, sender, time}) {
  const timeTwelveFormat = dayjs(time).format('h:mma');

  return (
    <div className={ 
      sender === 'user' 
        ? 'chat-message-user' 
        : 'chat-message-robot' 
    }>
      {sender === 'robot' && (
        <img className="chat-message-profile" src={RobotProfileImage}/>
      )}

      <div className="chat-message-text">
        {message}
        <span className="message-time">
          { timeTwelveFormat }
        </span>
      </div>

      {sender === 'user' && (
        <img className="chat-message-profile" src={UserProfileImage} />
      )}
    </div>
  );
}