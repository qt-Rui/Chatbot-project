import { useState, useEffect } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import { Chatbot } from 'supersimpledev';

function App() {
        const [chatMessages, setChatMessages] = useState([])
        // const [ chatMessages, setChatMessages ] = array;
        // const chatMessages = array[0];
        // const setChatMessages = array[1]; (long way)

        useEffect(() => {
          Chatbot.addResponses({
            'goodbye': 'Goodbye. Have a great day!',
            'give me a unique id': function () {
              return `Sure, here's a unique ID: ${crypto.randomUUID()}`;
            }
          });
        }, []);

        return (
          <div className="app-container">
            {chatMessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below
              </p>
            )}
            <ChatMessages
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />          
        </div>
        );
      }

export default App
