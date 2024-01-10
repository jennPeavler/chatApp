import { Conversation } from './Conversation';
import { ChatInput } from './ChatInput';
import { ConversationContext } from '../context/ConversationContext';
import { useContext } from 'react';

export const ChatWindow = () => {
  const { currentConversation, conversations } = useContext(ConversationContext);
  if(!conversations?.length) return <div>Loading conversations</div>
  
  return (
    <section className='chat-window'>
      <Conversation conversation={currentConversation} />
      {currentConversation && <ChatInput />}
    </section>
  )
}