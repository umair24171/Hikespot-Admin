import React, { useEffect, useState, useContext, useRef } from 'react';
import './UserFeedback.css';
import { IoCall } from "react-icons/io5";
import MyContext from '../../../../context/myContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../../../Firebase/FirebaseConfig';

const UserFeedback = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { fetchChats, fetchMessages, currentUser } = useContext(MyContext);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const loadChats = async () => {
      const chatData = await fetchChats();
      setChats(chatData);
    };

    loadChats();
  }, [fetchChats]);

  useEffect(() => {
    if (selectedChat) {
      const loadMessages = async () => {
        const messageData = await fetchMessages(selectedChat.chatId);
        console.log("Fetched messages:", messageData);
        // Sort messages by timestamp
        const sortedMessages = messageData.sort((a, b) => Number(a.sent) - Number(b.sent));
        setMessages(sortedMessages);
      };

      loadMessages();
    }
  }, [selectedChat, fetchMessages]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async (chatId, messageText, receiver) => {
    try {
      const messagesCollection = collection(fireDB, 'chats', chatId, 'messages');
      await addDoc(messagesCollection, {
        chatId,
        lat: 0,
        long: 0,
        message: messageText,
        senderId: currentUser.id,
        senderUsername: "Makki Zubair",
        senderImage: "https://s3-alpha-sig.figma.com/img/5453/8b64/345958ae529fa953283514d50769dd69?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GStH-CUDeOkGNP4qSFJRLhrmIl8hEj1gAlMC8PbTsQCbkUBWfAx6qXV8sng5XiT6I0mqu88U~mAXood~iLF5ROIMAUTkbcJMeK8KZg-qSdmO1Y5qBUTAd99UCI0ftJLkTOfrmE1Ti6LN95TtpF0O6y~k30Nh1d-mL-5hDeg~yZ5zPVEFrnVRMecYp9B1Fd8SscjeDTYooYeK-BNZR0PERFQGOrJ0neQUW34DBdrdUdvIN2KqChgulMWklE6lwyjxLcoWaQMoKo5W-Z6ciTglPPIDv1kkqpEFF~C58jQ3RHNjtcBaE6F8h3WpmPoL6ay0-ez2gFKSnSocgb7H4fS09A__", // Use current user's image URL from context
        sent: Timestamp.now().toMillis(),
        type: 'text',
        read: '',
        receiverId: receiver.id,
        receiverUsername: receiver.username,
        receiverImage: receiver.image,
        userOnlineState: false
      });
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === '' || !selectedChat) return;

    // Example receiver data, you should get this from your selected chat
    const receiver = {
      id: selectedChat.chatAdmin,  // Adjust as needed
      username: selectedChat.chatName,  // Adjust as needed
      image: selectedChat.chatImage,  // Adjust as needed
    };

    await sendMessage(selectedChat.chatId, newMessage, receiver);

    // Clear the input field
    setNewMessage('');

    // Refresh messages
    const messageData = await fetchMessages(selectedChat.chatId);
    const sortedMessages = messageData.sort((a, b) => Number(a.sent) - Number(b.sent));
    setMessages(sortedMessages);
  };

  return (
    <div className="user-feedback">
      <div className="row">
        <div className="col-lg-4 chat-list">
          {/* Chat List */}
          <h4 className='chat-items-heading'>Support Inbox</h4>
          {chats.map(chat => (
            <div key={chat.id} className="chat-item" onClick={() => setSelectedChat(chat)}>
              <img src={chat.chatImage} alt="Avatar" className="avatar" />
              <div className="chat-info">
                <h4 style={{ fontSize: "16px", fontWeight: "600" }}>{chat.chatName}</h4>
                <p style={{ fontSize: "12px", fontWeight: "300" }}>{chat.lastMessage}</p>
              </div>
              <div className="chat-meta">
                <span style={{ fontSize: "12px", fontWeight: "500", display: 'block' }}>
                  {new Date(Number(chat.lastMessageTime)).toLocaleTimeString()}
                </span>
                <span className="unread-count">3</span>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-8 chat-content">
          {/* Chat Content */}
          {selectedChat && (
            <>
              <div className="chat-header">
                <img src={selectedChat.chatImage} alt="Avatar" className="avatar" />
                <h4>{selectedChat.chatName}</h4>
                {/* <IoCall style={{ marginLeft: 'auto' }} /> */}
              </div>
              <div className="chat-messages">
                {messages.map(message => (
                  <div key={message.id} className={`message ${message.senderId === selectedChat.chatAdmin ? 'received' : 'sent'}`}>
                    <p style={{ background: message.senderId === selectedChat.chatAdmin ? "#515862" : "#FFBC07", borderRadius: "20px", padding: "10px 10px", fontSize: "16px" }}>
                      {message.message}
                    </p>
                    <span style={{ fontSize: "12px", fontWeight: "500" }}>
                      {new Date(Number(message.sent)).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Scroll reference */}
              </div>

              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type a message"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserFeedback;
