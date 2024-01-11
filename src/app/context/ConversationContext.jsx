import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import io from 'socket.io-client';
import { UserContext } from './UserContext';
import { fetchConversations } from '../services/conversations';

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
  const socket = io("http://localhost:3001");
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [currentMessage, setCurrentMessage] = useState('')
  const { currentUserId } = useContext(UserContext);

  const handleNewMessage = useCallback((msgData) => {
    //Add new message to conversation in list of conversations
    const updatedConversations = conversations.map(c => {
      if(c.id === msgData.conversationId) return { ...c, messages: [...c.messages, msgData] };
      return c;
    });
    setConversations(updatedConversations);

    //Add new message to current conversation if message belongs to it
    if(msgData.conversationId === currentConversation.id) {
      setCurrentConversation({ ...currentConversation, messages: [...currentConversation.messages, msgData]});
    }
  }, [conversations, currentConversation]);

  useEffect(() => {
    fetchConversations().then(data => setConversations(data))
  }, []);

  useEffect(() => {
    
    socket.on('message', msgData => handleNewMessage(msgData));

    return () => socket.disconnect();
  }, [socket, handleNewMessage])

  const selectConversation = (conversation) => {
    setCurrentConversation(conversation);
  };

  const writeMessage = (message) => {
    setCurrentMessage(message)
  }

  const sendMessage = () => {
    const msgData = {
      authorId: currentUserId,
      text: currentMessage,
      lastModified: String(Date.now()),
      conversationId: currentConversation.id
    }

    socket.emit('message', msgData)
    handleNewMessage(msgData);
    setCurrentMessage('');
  }

  return (
      <ConversationContext.Provider 
        value={{ 
          conversations, 
          currentConversation, 
          currentMessage,
          selectConversation,
          sendMessage,
          writeMessage 
        }}
      >
          {children}
      </ConversationContext.Provider>
  );
};