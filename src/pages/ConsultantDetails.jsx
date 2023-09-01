import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConsultantDetails = () => {
  const { id } = useParams();
  const [consultant, setConsultant] = useState({});

  useEffect(() => {
    const fetchConsultantDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8088/api/v1/consultants/${id}`
        );
        setConsultant(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchConsultantDetails();
  }, [id]);

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4">
        Consultant Details - {consultant.firstName} {consultant.lastName}
      </h1>
      <div>
        <p>Phone: {consultant.phoneNumber}</p>
        <p>Email: {consultant.fdmEmail}</p>
        <p>Stream: {consultant.stream && consultant.stream.stream}</p>
        {/* Display other details as needed */}
      </div>
    </div>
  );
};

export default ConsultantDetails;
