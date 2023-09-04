import React, { useState } from "react";
import SearchResults from "../pages/SearchResults";
import { useNavigate } from "react-router";

const SearchForm = () => {
  const [parameter, setParameter] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    navigate("/searchresults", {state:{parameter:{parameter}}})
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>seach: </label>
      <input
        type="search"
        id="search parameter"
        value={parameter}
        onChange={(e) => setParameter(e.target.value)}
      ></input>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ backgroundColor: "#007bff" }}
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
