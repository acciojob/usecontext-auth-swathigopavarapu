
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
    <div className="auth-container">
      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={toggleAuth}
        />{" "}
        I am not a robot
      </label>

      <p>
        {isAuthenticated
          ? "You are authenticated!"
          : "You are not authenticated."}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <AuthProvider>
        <h1>useContext Authentication Demo</h1>
        <Auth />
      </AuthProvider>
    </div>
  )
}

export default App
