import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {

      if (isLoading || inputText === '') {
        return;
      }

    setIsLoading(true);

    setInputText('');

    const newChatMessages = [
        ...chatMessages,
        {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            time: dayjs().valueOf()
        }
    ];

          setChatMessages([
            ...newChatMessages,
            {
              message: <img className="loading-spinner" src={LoadingSpinner}/>,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);

          setIsLoading(false);
        }

        function checkKey(event) {
          if(event.key === 'Enter'){
            sendMessage();
          } else if (event.key === 'Escape') {
            setInputText('');
          }
        }

        function clearMessage() {
          setChatMessages([]);
        }

        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              className="chat-input" 
              onChange={saveInputText}
              value={inputText}
              onKeyDown={checkKey}
            ></input>
            <button
              onClick={sendMessage}
              className="send-button"
            >Send
            </button>
            <button
              onClick={clearMessage}
              className="clear-button"
            >Clear
            </button>
          </div>
        );
      }