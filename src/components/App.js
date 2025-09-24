
import React,{ createContext, useContext, useState } from "react";
import './../styles/App.css';

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
const Auth = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />{" "}
        I am not a robot
      </label>

      <p className="authText">
        {isAuthenticated
          ? "You are now authenticated, you can proceed"
          : "you are not authenticated"}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <AuthProvider>
        <Auth />
      </AuthProvider>
    </div>
  )
}

export default App
