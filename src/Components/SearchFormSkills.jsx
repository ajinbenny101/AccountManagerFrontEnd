import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchFormSkills = () => {
  const [selectedSkills, setSelectedSkills] = useState("");
  //   const navigate = useNavigate();

  //   const location =
  //     "http://localhost:8088/api/v1/consultants/findConsultantsBySkills";

  const skillsOptions = [
    {
      id: 170,
      skillName: "Microsoft Excel",
      ability: "Technical",
    },
    {
      id: 163,
      skillName: "Project Management",
      ability: "Technical",
    },
    {
      id: 276,
      skillName: "Azure DevOps",
      ability: "Technical",
    },
    {
      id: 196,
      skillName: "Git",
      ability: "Technical",
    },
    {
      id: 168,
      skillName: "Python",
      ability: "Technical",
    },
  ];

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (selectedStream) {
  //       navigate(`/searchresults/${selectedStream}`);
  //     }
  //   };

  // const Search = async (skill) => {
  //     try {
  //       const response = await axios.post(location,
  //         [selectedSkills],
  //         {headers: {
  //             Authorization: `Bearer ${token}`,
  //           }}
  //       );

  //       const loginResponse = response.data;
  //       localStorage.setItem("token", loginResponse.jwt);

  //       navigate("/");
  //       window.location.reload();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  // const handleSelectChange = (e) => {
  //   setSelectedSkills(e.target.value);
  // };

  // const handleSubmit = async (skills) => {
  //       try {
  //         const response = await axios.post(location,
  //           [selectedSkills],
  //           {headers: {
  //               Authorization: `Bearer ${token}`,
  //             }}
  //         );

  //         const loginResponse = response.data;
  //         localStorage.setItem("token", loginResponse.jwt);

  //         navigate("/");
  //         window.location.reload();
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //need to handle the submission from form. Unsure how to pass the selected data to the axios post request.
  //possibly should do it via props but still need to figure out
  const handleSubmit = async (skills) => {
    try {
      const response = await axios.post(location, [selectedSkills], {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const loginResponse = response.data;
      localStorage.setItem("token", loginResponse.jwt);

      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSelectChange = (e) => {
  //   setSelectedSkills(e.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search by Skills: </label>
      {skillsOptions.map((skill) => (
        <>
          <input
            type="checkbox"
            key={skill.skillName}
            name={skill.skillName}
            value={skill.skillName}
          ></input>
          <label>{skill.skillName}</label>
        </>
      ))}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchFormSkills;
