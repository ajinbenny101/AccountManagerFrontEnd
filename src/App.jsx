import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/header";
import AllConsultants from "./pages/AllConsultants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllConsultants />}/>
        <Route path="consultants/:id"/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
