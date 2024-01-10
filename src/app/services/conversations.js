import { conversations } from '../mock-data/conversations'

export const fetchConversations = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(conversations)
    }, 1000)
  })
}