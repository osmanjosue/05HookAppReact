import { Usercontext } from './UserContext';

/* const user = {
  id: 123,
  name: 'Fernando Herrera',
  email: 'fernando@gmail.com',
}; */

export const UserProvider = ({ children }) => {
  return (
    <Usercontext.Provider value={{}}>
      {children}
    </Usercontext.Provider>
  );
};