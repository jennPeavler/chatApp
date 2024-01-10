import { useContext } from 'react';
import { ConversationContext } from '../context/ConversationContext';
import { getParticipantComma } from '../functions/getParticipantComma';

export const ConversationList = () => {
  const { conversations, selectConversation } = useContext(ConversationContext);

  const ListItem = ({ conversation, i }) => {
    return (
      <article style={style.listItem} onClick={() => selectConversation(conversation)}>
        {conversation?.participants.map((p, i) => {
          return (
            <span key={`participant-${p.id}`} style={style.name}>
              {`${p.userName}${getParticipantComma({ participants: conversation.participants, i })} `}
            </span>
          );
        })}
      </article>
    );
  }
   

  return (
    <section style={style.container}>
      {conversations.map((conversation) => <ListItem key={`conversation-${conversation.id}`} conversation={conversation}/>)}
    </section>
  );
}

const style = {
  container: {
    background: 'black'
  },
  listItem: {
    marginBottom: '0.5rem',
    cursor: 'pointer'
  },
  name: {
    fontSize: '1rem',
    color: 'grey'
  }
}