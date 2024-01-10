'use client'
import { ChatWindow } from './components/ChatWindow';
import { ConversationList } from './components/ConversationList';

import { ConversationProvider } from './context/ConversationContext';

export default function Home() {
  return (
    <ConversationProvider>
      <main style={style.body}>
        <ConversationList />
        <ChatWindow />
      </main>
    </ConversationProvider>
  )
}

const style = {
  body: {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    padding: '2rem'
  }
}
