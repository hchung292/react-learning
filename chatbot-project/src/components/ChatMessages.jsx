import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css';

// Custom Hook
function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(()=>{
    const containerElem = containerRef.current;
    if(containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return containerRef;
}

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useAutoScroll([chatMessages]);

  //Array Destructuring
  //const [chatMessages, setChatMessages] = array;

  // const chatMessages = array[0];      //current value
  // const setChatMessages = array[1];   // update function

  return (
    <div className="chat-messages-container" 
      ref={chatMessagesRef}
    >
    {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message = {chatMessage.message}
            sender = {chatMessage.sender}
            key = {chatMessage.id}
            time = {chatMessage.time}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;