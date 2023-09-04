import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [selectedStream, setSelectedStream] = useState("");
  const navigate = useNavigate();

  const streamOptions = [
    { streamCode: "BA", stream: "Business Analysis" },
    { streamCode: "BI", stream: "Business Intelligence" },
    { streamCode: "DE", stream: "Data Engineering" },
    { streamCode: "PMO", stream: "Project Management" },
    { streamCode: "SD", stream: "Software Development and Engineering" },
    { streamCode: "ST", stream: "Software Testing" },
    { streamCode: "TO", stream: "Technical Operations" },
    { streamCode: "CL", stream: "Cloud Computing" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedStream) {
      navigate(`/searchresults/${selectedStream}`);
    }
  };

  const handleSelectChange = (e) => {
    setSelectedStream(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search by Stream: </label>
      <select value={selectedStream} onChange={handleSelectChange}>
        <option value="">Select a Stream</option>
        {streamOptions.map((stream) => (
          <option key={stream.streamCode} value={stream.streamCode}>
            {stream.stream}
          </option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
