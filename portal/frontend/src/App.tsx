import { useEffect, useState } from "react";
import Authentication from "./components/Authentication/Authentication";
import Home from "./components/Home/Home";
import './App.css'

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if(token) {
      setIsLoggedIn(true);
    }
  }, [])
  return (
    <div className="w-full min-h-screen flex flex-col">
      {isLoggedIn ? <Home /> : <Authentication setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  );
};

export default App;
