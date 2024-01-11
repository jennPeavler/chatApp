export const Conversation = ({ conversation }) => {
  if (!conversation) return <div>please select conversation</div>;

  const authorMap = conversation.participants.reduce((acc, p) => {
    acc[p.id] = { avatarUrl: p.avatarUrl, userName: p.userName }
    return acc;
  }, {})

  const MessageItem = ({ message }) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem'}}>
        <img style={style.author} src={authorMap[message.authorId].avatarUrl} alt="Author avatar" />
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '1rem'}}>{authorMap[message.authorId].userName}</div>
            <div style={{ fontSize: '0.8rem', color: 'grey' }}>{message.lastModified}</div>
          </div>
          <div>{message.text}</div>
        </div>
      </div>
    )
  }
  return (
    <article className='conversation' key={`conversation__${conversation?.id}`}>
      {conversation?.messages.map(message => <MessageItem key={`${message.senderId}-${message.lastModified}`} message={message} />)}
    </article>
  )
}

const style = {
  author: {
    height: '3rem',
    width: '3rem',
    borderRadius: '0.8rem',
    marginRight: '0.8rem'
  }
}