import { useState } from 'react';
import { Usercontext } from './UserContext';

/* const user = {
  id: 123,
  name: 'Fernando Herrera',
  email: 'fernando@gmail.com',
}; */

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState()
  return (
    <Usercontext.Provider value={{user, setUser}}>
      {children}
    </Usercontext.Provider>
  );
};
