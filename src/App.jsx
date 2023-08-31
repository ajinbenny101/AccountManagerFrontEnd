import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/header";
import AllConsultants from "./pages/AllConsultants";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <AllConsultants />
    </div>
  );
}

export default App;
