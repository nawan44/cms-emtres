import "./App.css";
import Routers from "./Router";
import AuthState from "./context/auth/AuthState";

function App() {
  return (
      <AuthState>
        <Routers />
      </AuthState>
  );
}

export default App;