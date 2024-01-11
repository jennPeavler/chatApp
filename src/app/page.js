'use client'
import { ChatWindow } from './components/ChatWindow';
import { ConversationList } from './components/ConversationList';

import { ConversationProvider } from './context/ConversationContext';
import { UserProvider } from './context/UserContext';

export default function Home() {
  return (
    <UserProvider>
      <ConversationProvider>
        <main style={style.body}>
          <ConversationList />
          <ChatWindow />
        </main>
      </ConversationProvider>
    </UserProvider>
  )
}

const style = {
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    padding: '2rem'
  }
}
