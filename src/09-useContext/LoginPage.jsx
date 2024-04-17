import { useContext } from "react";
import { Usercontext } from "./context/UserContext";

export const LoginPage = () => {

  const {user, setUser}=useContext(Usercontext);
    return (
      <>
        <h1>LoginPage</h1>
        <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
        
        <button className="btn btn-primary"
        onClick={()=> setUser({id: 123, name: 'Juan', email: 'juan@google.com'})}
        >
          Establecer Usuario
        </button>

      </>
    );
  };
  