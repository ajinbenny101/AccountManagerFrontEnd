import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [selectedStream, setSelectedStream] = useState("");
 // const [selectedSkills, setSelectedSkills] = useState(""); 
  const navigate = useNavigate();

  const streamOptions = [
    { streamCode: "BA", stream: "Business Analyst" },
    { streamCode: "BI", stream: "Business Intelligence" },
    { streamCode: "DE", stream: "Data Engineering" },
    { streamCode: "PMO", stream: "Project Management" },
    { streamCode: "SD", stream: "Software Development" },
    { streamCode: "ST", stream: "Software Testing" },
    { streamCode: "TO", stream: "Technical Operations" },
    { streamCode: "CL", stream: "Cloud Computing" },
  ];

  /* const skillOptions = [ 
    {
    "id": 1,
    "ability": "Beginner",
    "skillType": "Technical",
    "skillName": "Project Management"
}, 
];*/
  
  const handleStreamSearch = (e) => {
    e.preventDefault();
    if (selectedStream) {
      navigate("/searchresults", { state: { parameter: { selectedStream } } });
    }
  };

  /* const handleSkillSearch = (e) => {
    e.preventDefault();
    if (selectedSkills.length) {
      navigate("/searchresults", { state: { parameter: { selectedSkills } } });
    }
  };
 */
  const handleSelectChange = (e) => {
    setSelectedStream(e.target.value);
  };

  return (
    <div>
      {/* Stream Search */}
      <form onSubmit={handleStreamSearch}>
        <label>Search by Stream: </label>
        <select value={selectedStream} onChange={(e) => setSelectedStream(e.target.value)}>
          <option value="">Select a Stream</option>
          {streamOptions.map((stream) => (
            <option key={stream.streamCode} value={stream.streamCode}>
              {stream.stream}
            </option>
          ))}
        </select>
        <button type="submit">Search by Stream</button>
      </form>

      {/* Skills Search */}
     {/*  <form onSubmit={handleSkillSearch}>
        <label>Select Skills: </label>
        <select multiple value={selectedSkills} onChange={(e) => setSelectedSkills([...e.target.selectedOptions].map(option => option.value))}>
  {skillOptions.map((skill) => (
    <option key={skill.id} value={skill.skillName}>
      {skill.skillName}
    </option>
  ))}
</select>

        <button type="submit">Search by Skills</button>
      </form>*/}
    </div> 
  );
};

export default SearchForm;