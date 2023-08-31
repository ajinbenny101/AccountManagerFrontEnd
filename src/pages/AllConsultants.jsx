import React, { useState, useEffect } from "react";
import axios from "axios";

const AllConsultants = () => {
  const [consultants, setConsultants] = useState([]);

  useEffect(() => {
    const fetchConsultant = async () => {
      let response = await axios.get(
        "http://localhost:8088/api/v1/consultants"
      );
      setConsultants(response.data);
      console.log(response);
    };
    fetchConsultant();
  }, []);

  return (
    <div className="container-fluid">
      <h1>All Consultants</h1>
      {consultants.map((consultant) => {
        return (
          <div className="card" key={consultant.id}>
            <h2 className="consultant-name">
              {consultant.firstName} {consultant.lastName}
            </h2>
            <li>
              <ul>{consultant.phoneNumber}</ul>
              <ul>{consultant.fdmEmail}</ul>
              <ul>{consultant.stream.stream}</ul>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default AllConsultants;
