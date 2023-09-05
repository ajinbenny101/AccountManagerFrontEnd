import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AllConsultants from "./pages/AllConsultants";
import ConsultantDetails from "./pages/ConsultantDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import SearchForm from "./Components/SearchForm";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/Home";
import HeaderAuth from "./Components/HeaderAuth";

function App() {
  return (
    <Router>
      <div>
        <HeaderAuth />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultants" element={<AllConsultants />} />
          <Route path="consultants/:id" element={<ConsultantDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="accessdenied" element={<AccessDenied />} />
          <Route path="search" element={<SearchForm />} />
          <Route path="searchresults" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
