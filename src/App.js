import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isAuthenticated ? (
          <div>
            <Profile />
          </div>
        ) : (
          <Login />
        )}
      </header>
    </div>
  );
}

export default App;
