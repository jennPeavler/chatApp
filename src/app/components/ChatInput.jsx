import { useContext } from 'react';
import { ConversationContext } from '../context/ConversationContext';

export const ChatInput = () => {
  const { currentMessage, writeMessage, sendMessage } = useContext(ConversationContext);
  return (
    <div>
      <input type='text' value={currentMessage} onChange={(e) => writeMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

