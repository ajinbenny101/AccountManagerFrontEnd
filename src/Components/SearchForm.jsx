import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchForm = () => {
  const [selectedStream, setSelectedStream] = useState(null);
  const [consultants, setConsultants] = useState([]);
  const [passedConsultants, setPassedConsultants] = useState([]);
  // const [selectedSkills, setSelectedSkills] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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

  const searchFunction = async () => {
    try {
      const location = `http://localhost:8088/api/v1/consultants/findConsultantsByStream/${selectedStream}`;
      let response = await axios.get(location, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      const data1 = response.data;
      navigate("/searchresults", {
        state: { parameter: { data1 } },
      });
      /*} else if (location.state.parameter.selectedSkills && location.state.parameter.selectedSkills.length) {
        // New code for skills search
        let response = await axios.post(
          `http://localhost:8088/api/v1/consultants/findConsultantsBySkills`,
          { skills: location.state.parameter.selectedSkills },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setConsultants(response.data);
      } */
    } catch (error) {
      console.log(error);
    }
  };

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
    searchFunction();
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
        <select
          value={selectedStream}
          onChange={(e) => setSelectedStream(e.target.value)}
        >
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
