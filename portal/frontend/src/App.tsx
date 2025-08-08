import { useState } from "react";
import Authentication from "./components/Authentication/Authentication";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLoggedIn ? <Home /> : <Authentication />}
    </div>
  );
};

export default App;
