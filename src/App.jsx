import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Header from "./Components/header";
import AllConsultants from "./pages/AllConsultants";
import ConsultantDetails from "./pages/ConsultantDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AccessDenied from "./pages/AccessDenied";
import SearchForm from "./Components/SearchForm";
import SearchResults from "./pages/SearchResults";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AllConsultants />} />
          <Route path="consultants/:id" element={<ConsultantDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="accessdenied" element={<AccessDenied />} />
          <Route path="search" element={<SearchForm />} />
          <Route path="searchresults/:stream" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
