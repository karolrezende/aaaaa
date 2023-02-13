import "./App.css";
import Restricted from "./components/RestrictAcess/index.js";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const user = "Karol";

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <Restricted
        user={user}
        isLoggedIn={isLoggedIn}
        Login={login}
        Logout={logout}
      />
    </div>
  );
}

export default App;
