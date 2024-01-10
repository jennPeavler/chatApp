export const conversations = () => [
  { 
    id: 1,
    participants: [
      {
        id: 1,
        userName: 'Jenn Peavler',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female' 
      },
      {
        id: 2,
        userName: 'RuPaul Charles',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male'
      }
    ],
    messages: [
      {
        authorId: 1,
        text: 'Did you done already have yourses?',
        lastModified: '2024-01-08T10:00:00.000Z'
      },
      {
        authorId: 2,
        text: 'I done already had mine',
        lastModified: '2024-01-08T10:00:10.000Z'
      }
    ],
    lastModified: '2024-01-08T10:00:10.000Z'
  },
  { 
    id: 2,
    participants: [
      {
        id: 1,
        userName: 'Jenn Peavler',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=female' 
      },
      {
        id: 2,
        userName: 'Dolly Parton',
        avatarUrl: 'https://xsgames.co/randomusers/avatar.php?g=male'
      }
    ],
    messages: [
      {
        authorId: 1,
        text: 'Will you always love me?',
        lastModified: '2024-01-08T10:00:00.000Z'
      },
      {
        authorId: 2,
        text: 'I will always love you.',
        lastModified: '2024-01-08T10:00:10.000Z'
      }
    ],
    lastModified: '2024-01-08T10:00:10.000Z'
  }
];