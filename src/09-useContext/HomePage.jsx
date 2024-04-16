import { useContext } from 'react';
import { Usercontext } from './context/UserContext';

export const HomePage = () => {
  const { user } = useContext(Usercontext);
  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
