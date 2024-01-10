import { createContext, useState, useEffect } from 'react';
import { fetchConversations } from '../services/conversations';

export const ConversationContext = createContext();

export const ConversationProvider = ({ children }) => {
    const [conversations, setConversations] = useState([]);
    const [currentConversation, setCurrentConversation] = useState(null);

    useEffect(() => {
      fetchConversations().then(data => setConversations(data))
    }, []);

    const selectConversation = (conversation) => {
      setCurrentConversation(conversation);
    };

    return (
        <ConversationContext.Provider value={{ conversations, currentConversation, selectConversation }}>
            {children}
        </ConversationContext.Provider>
    );
};