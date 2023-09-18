import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const SearchForm = () => {
  const [selectedStream, setSelectedStream] = useState(null);
  const [consultants, setConsultants] = useState([]);
  const [passedConsultants, setPassedConsultants] = useState([]);
  // const [selectedSkills, setSelectedSkills] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [requestdata, setRequestData] = useState([]);
  const listtest = [
    "Adobe Creative Suite",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adaptability",
    "Agile Framework",
    "Apple Keynote",
    "Big Data Engineering",
    "Business Analytics",
    "Business Mapping",
    "C#",
    "C++",
    "Canva",
    "Communication Skills",
    "Creativity Skills",
    "CSS",
    "Critical Thinking",
    "Data Cleaning",
    "Data Management",
    "Data Mining",
    "Data Modelling",
    "Data Visualisation",
    "Data Wrangling",
    "Databricks",
    "Decision-making",
    "DevOps",
    "ETL Process",
    "Figma",
    "Git",
    "GitHub",
    "GitLab",
    "Google Analytics",
    "HTML",
    "Hadoop/Hive Ecosystem",
    "Interpersonal Skills",
    "Java",
    "JavaScript",
    "Jira",
    "Kanban board",
    "Leadership",
    "Microsoft 365",
    "Microsoft Excel",
    "Microsoft Excel VBA",
    "Microsoft PowerPoint",
    "Microsoft Power Automate",
    "Microsoft Power Apps",
    "MS PowerShell",
    "MySQL",
    "Network Security",
    "Negotiation",
    "Organisation",
    "Persuasion",
    "Problem Solving",
    "Product Delivery",
    "Project Management",
    "Python",
    "R",
    "Requirement Gathering Technique",
    "Risk-analysis",
    "SQL",
    "SQL Developer Oracle",
    "SQL Server",
    "SWOT Analysis",
    "Scala",
    "Scrum",
    "Scrum Master",
    "Stakeholder Engagement",
    "Stakeholder Management",
    "Tableau",
    "Teamwork",
    "Time Management",
    "UI/UX Design",
    "UNIX",
    "VSCode",
    "Waterfall",
  ];

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

  const handleSkillSearch = (e) => {
    e.preventDefault();
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
      <form onSubmit={handleStreamSearch} className="mb-3">
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

      <form onSubmit={handleSkillsSearch}>
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={listtest}
          getOptionLabel={(option) => option}
          defaultValue={[listtest[0]]}
          value={requestdata}
          onChange={(e) => setRequestData(e.target.value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="skills"
              placeholder="start typing..."
            />
          )}
          sx={{ width: "500px" }}
        />
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
