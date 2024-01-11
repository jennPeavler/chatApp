import { createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{ currentUserId: 1 }}>{children}</UserContext.Provider>
}