// // import React, { useState } from 'react';

// // const Chatbot = () => {
// //   const [userMessage, setUserMessage] = useState('');
// //   const [chatLogs, setChatLogs] = useState([]);

// //   // Send message to the chatbot via the Flask backend
// //   const sendMessageToChatbot = async () => {
// //     const url = 'http://127.0.0.1:5000/predictu'; // Only use the 'user' endpoint for all cases
// //     const message = userMessage;

// //     try {
// //       const response = await fetch(url, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ message }), // Sending message in JSON format
// //       });

// //       const data = await response.json();
// //       setChatLogs((prevLogs) => [...prevLogs, { user: message, bot: data.answer }]);
// //       setUserMessage(''); // Clear input field
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div style={chatbotStyle}>
// //       <h2>Chatbot</h2>
// //       <div id="chatbox" style={chatboxStyle}>
// //         <div id="chatlogs" style={chatLogsStyle}>
// //           {chatLogs.map((log, index) => (
// //             <div key={index} style={{ marginBottom: '10px' }}>
// //               <div><strong>You:</strong> {log.user}</div>
// //               <div><strong>Bot:</strong> {log.bot}</div>
// //             </div>
// //           ))}
// //         </div>
// //         <input
// //           type="text"
// //           value={userMessage}
// //           onChange={(e) => setUserMessage(e.target.value)}
// //           placeholder="Type your message here"
// //           style={inputStyle}
// //         />
// //         <button onClick={sendMessageToChatbot} style={buttonStyle}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Simple inline CSS for styling
// // const chatbotStyle = {
// //   border: '1px solid #ccc',
// //   padding: '20px',
// //   borderRadius: '10px',
// //   width: '400px',
// //   margin: '0 auto',
// // };

// // const chatboxStyle = {
// //   height: '300px',
// //   overflowY: 'scroll',
// //   padding: '10px',
// //   backgroundColor: '#f9f9f9',
// //   borderRadius: '10px',
// //   marginBottom: '10px',
// // };

// // const chatLogsStyle = {
// //   maxHeight: '200px',
// //   overflowY: 'auto',
// //   marginBottom: '10px',
// // };

// // const inputStyle = {
// //   width: '70%',
// //   padding: '10px',
// //   marginRight: '5px',
// // };

// // const buttonStyle = {
// //   padding: '10px 20px',
// //   backgroundColor: '#007BFF',
// //   color: '#fff',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// // };

// // export default Chatbot;


// // import { useState } from 'react';

// // const Chatbot = () => {
// //   const [userMessage, setUserMessage] = useState('');
// //   const [chatLogs, setChatLogs] = useState([]);

// //   const sendMessageToChatbot = async () => {
// //     const url = 'http://localhost:5000/predictu';
// //     const message = userMessage;

// //     if (!message.trim()) return; // Prevent sending empty messages

// //     try {
// //       const response = await fetch(url, {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ message }),
// //       });

// //       if (!response.ok) {
// //           throw new Error('Network response was not ok');
// //       }

// //       const data = await response.json();
// //       console.log('API response:', data); // Log the API response

// //       if (data.answer) {
// //           setChatLogs((prevLogs) => [...prevLogs, { user: message, bot: data.answer }]);
// //       } else {
// //           console.error('No answer field in response:', data);
// //       }
// //       setUserMessage(''); // Clear input field
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div style={chatbotStyle}>
// //       <h2>Chatbot</h2>
// //       <div id="chatbox" style={chatboxStyle}>
// //         <div id="chatlogs" style={chatLogsStyle}>
// //           {chatLogs.map((log, index) => (
// //             <div key={index} style={{ marginBottom: '10px' }}>
// //               <div><strong>You:</strong> {log.user}</div>
// //               <div><strong>Bot:</strong> {log.bot}</div>
// //             </div>
// //           ))}
// //         </div>
// //         <input
// //           type="text"
// //           value={userMessage}
// //           onChange={(e) => setUserMessage(e.target.value)}
// //           placeholder="Type your message here"
// //           style={inputStyle}
// //         />
// //         <button onClick={sendMessageToChatbot} style={buttonStyle}>Send</button>
// //       </div>
// //     </div>
// //   );
// // };

// // // Simple inline CSS for styling
// // const chatbotStyle = {
// //   border: '1px solid #ccc',
// //   padding: '20px',
// //   borderRadius: '10px',
// //   width: '400px',
// //   margin: '0 auto',
// // };

// // const chatboxStyle = {
// //   height: '300px',
// //   overflowY: 'scroll',
// //   padding: '10px',
// //   backgroundColor: '#f9f9f9',
// //   borderRadius: '10px',
// //   marginBottom: '10px',
// // };

// // const chatLogsStyle = {
// //   maxHeight: '200px',
// //   overflowY: 'auto',
// //   marginBottom: '10px',
// // };

// // const inputStyle = {
// //   width: '70%',
// //   padding: '10px',
// //   marginRight: '5px',
// // };

// // const buttonStyle = {
// //   padding: '10px 20px',
// //   backgroundColor: '#007BFF',
// //   color: '#fff',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// // };

// // export default Chatbot;


// // 
import { useState } from 'react';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatLogs, setChatLogs] = useState([]);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const sendMessageToChatbot = async () => {
    const url = 'http://localhost:5000/predictu';
    const message = userMessage;

    if (!message.trim()) return;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('API response:', data);

      if (data.answer) {
        setChatLogs((prevLogs) => [...prevLogs, { user: message, bot: data.answer }]);
      } else {
        console.error('No answer field in response:', data);
      }
      setUserMessage('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div style={containerStyle}>
      {!isChatbotOpen ? (
        <img
          src="https://imgs.search.brave.com/5stxmbeIx0mGlYlK_K4rY1whY39lncQ4gWPuNkeZ5V0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG90by1yZWFs/aXN0aWMtYXMtYWkt/Y2hhdGJvdC1jdXN0/b21lci1lbmdhZ2Vt/ZW50LWNvbmNlcHQt/YXMtYWktY2hhdGJv/dC1pY29uLXBhaXJl/ZC13aXRoLWN1Xzk4/MDcxNi00NTkzMDUu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
          alt="Chatbot"
          style={chatbotImageStyle}
          onClick={toggleChatbot}
        />
      ) : (
        <div style={chatbotStyle}>
          <h2 style={chatbotHeaderStyle}>RitsVerse Chat</h2>
          <div id="chatbox" style={chatboxStyle}>
            <div id="chatlogs" style={chatLogsStyle}>
              {chatLogs.map((log, index) => (
                <div key={index} style={logStyle}>
                  <div><strong>You:</strong> {log.user}</div>
                  <div><strong>Bot:</strong> {log.bot}</div>
                </div>
              ))}
            </div>

          </div>
          <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              style={inputStyle}
            />
            <button onClick={sendMessageToChatbot} style={buttonStyle}>Send</button>
          <button onClick={toggleChatbot} style={closeButtonStyle}>Close Chatbot</button>
        </div>
      )}
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
position: 'fixed',
  bottom: '20px',
  right: '20px',
  // zIndex: 1000, // Ensure the chatbot is on top of other content
  textAlign: 'center',

  backgroundColor: '#1A1A2E',
};

const chatbotImageStyle = {
  cursor: 'pointer',
  width: '70px',
  height: '70px',
  borderRadius: '25%',
  border: '2px solid #0f3460',
  boxShadow: '0 0 20px #00d4ff',
  transition: 'transform 0.3s ease',
};

const chatbotStyle = {
  backgroundColor: '#0f3460',
  borderRadius: '15px',
  width: '400px',
  padding: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  transition: 'opacity 0.5s ease',
  position: 'relative',
  height:"600px",
};

const chatbotHeaderStyle = {
  color: '#00d4ff',
  textAlign: 'center',
  fontSize: '1.5em',
  marginBottom: '10px',
  fontWeight: '600',
  textTransform: 'uppercase',
};

const chatboxStyle = {
  backgroundColor: '#16213e',

  overflowY: 'hidden',
  padding: '15px',
  borderRadius: '10px',
  marginBottom: '20px',
  height:"400px"
  
};

const chatLogsStyle = {
  maxHeight: '240px',
  overflowY: 'auto',
};

const logStyle = {
  backgroundColor: '#1F4068',
  padding: '10px',
  borderRadius: '10px',
  marginBottom: '10px',
  color: '#fff',
  fontSize: '0.9em',
};

const inputStyle = {
  width: '80%',
  padding: '10px',
  borderRadius: '10px',
  border: 'none',
  marginRight: '10px',
  outline: 'none',
  color: '#fff',
  backgroundColor: '#16213e',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#00d4ff',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const closeButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#f44336',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  position: 'absolute',
  right: '20px',
  bottom: '20px',
  transition: 'background-color 0.3s ease',
};

export default Chatbot;


// import { useState } from 'react';

// const Chatbot = () => {
//   const [userMessage, setUserMessage] = useState('');
//   const [chatLogs, setChatLogs] = useState([]);
//   const [isChatbotOpen, setIsChatbotOpen] = useState(false);

//   const sendMessageToChatbot = async () => {
//     const url = 'http://localhost:5000/predictu';
//     const message = userMessage;

//     if (!message.trim()) return;

//     try {
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ message }),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log('API response:', data);

//       if (data.answer) {
//         setChatLogs((prevLogs) => [...prevLogs, { user: message, bot: data.answer }]);
//       } else {
//         console.error('No answer field in response:', data);
//       }
//       setUserMessage('');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const toggleChatbot = () => {
//     setIsChatbotOpen(!isChatbotOpen);
//   };

//   return (
//     <div style={containerStyle}>
//       {!isChatbotOpen ? (
//         <img
//           src="https://imgs.search.brave.com/5stxmbeIx0mGlYlK_K4rY1whY39lncQ4gWPuNkeZ5V0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG90by1yZWFs/aXN0aWMtYXMtYWkt/Y2hhdGJvdC1jdXN0/b21lci1lbmdhZ2Vt/ZW50LWNvbmNlcHQt/YXMtYWktY2hhdGJv/dC1pY29uLXBhaXJl/ZC13aXRoLWN1Xzk4/MDcxNi00NTkzMDUu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
//           alt="Chatbot"
//           style={chatbotImageStyle}
//           onClick={toggleChatbot}
//         />
//       ) : (
//         <div style={chatbotStyle}>
//           <h2>Chatbot</h2>
//           <div id="chatbox" style={chatboxStyle}>
//             <div id="chatlogs" style={chatLogsStyle}>
//               {chatLogs.map((log, index) => (
//                 <div key={index} style={{ marginBottom: '10px' }}>
//                   <div><strong>You:</strong> {log.user}</div>
//                   <div><strong>Bot:</strong> {log.bot}</div>
//                 </div>
//               ))}
//             </div>
//             <input
//               type="text"
//               value={userMessage}
//               onChange={(e) => setUserMessage(e.target.value)}
//               placeholder="Type your message here"
//               style={inputStyle}
//             />
//             <button onClick={sendMessageToChatbot} style={buttonStyle}>Send</button>
//           </div>
//           <button onClick={toggleChatbot} style={closeButtonStyle}>Close Chatbot</button>
//         </div>
//       )}
//     </div>
//   );
// };

// // Updated inline CSS for bottom-right positioning
// const containerStyle = {
//   position: 'fixed',
//   bottom: '20px',
//   right: '20px',
//   zIndex: 1000, // Ensure the chatbot is on top of other content
//   textAlign: 'center',
// };

// const chatbotImageStyle = {
//   cursor: 'pointer',
//   width: '80px',
//   height: '80px',
//   borderRadius: '50%',
//   border: '1px solid #ccc',
// };

// const chatbotStyle = {
//   border: '1px solid #ccc',
//   padding: '20px',
//   borderRadius: '10px',
//   width: '350px',
//   backgroundColor: '#fff', // Adjust the background for a clean look
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Modern shadow for depth
// };

// const chatboxStyle = {
//   height: '250px',
//   overflowY: 'scroll',
//   padding: '10px',
//   backgroundColor: '#f9f9f9',
//   borderRadius: '10px',
//   marginBottom: '10px',
// };

// const chatLogsStyle = {
//   maxHeight: '200px',
//   overflowY: 'auto',
//   marginBottom: '10px',
// };

// const inputStyle = {
//   width: '70%',
//   padding: '10px',
//   marginRight: '5px',
// };

// const buttonStyle = {
//   padding: '10px 20px',
//   backgroundColor: '#007BFF',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
// };

// const closeButtonStyle = {
//   padding: '10px 20px',
//   backgroundColor: '#FF0000',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   marginTop: '10px',
// };

// export default Chatbot;
