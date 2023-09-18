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
    } catch (error) {
      console.log(error);
    }
  };

  const searchSkills = async () => {
    try {
      let response = await axios.post(
        "http://localhost:8088/api/v1/consultants/findConsultantsBySkills",
        {
          skills: requestdata,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      const data1 = response.data;
      navigate("/searchresults", {
        state: { parameter: { data1 } },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStreamSearch = (e) => {
    e.preventDefault();
    searchFunction();
  };

  const handleSkillsSearch = (e) => {
    e.preventDefault();
    searchSkills();
  };

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
          onChange={(event, value) => {
            setRequestData(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="skills"
              placeholder="start typing..."
            />
          )}
          sx={{ width: "500px" }}
        />
        <button type="submit">Search by Skill</button>
      </form>
    </div>
  );
};

export default SearchForm;
