import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AllConsultants = () => {
  const [consultants, setConsultants] = useState([]);
  const token = localStorage.getItem("token");
  const [userLoggedIn, setUserLoggedIn] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConsultants = async () => {
      try {
        let response = await axios.get(
          "http://localhost:8088/api/v1/consultants",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setConsultants(response.data);
        console.log(response);
      } catch (error) {
        if (error.response.status === 401) {
          navigate("/accessdenied");
        }
      }
    };
    fetchConsultants();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4">All Consultants true</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Stream</th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant) => (
              <tr key={consultant.id} onClick={() => {}}>
                <td>
                  <a
                    href={`/consultants/${consultant.id}`}
                    className="text-decoration-none text-dark"
                  >
                    {consultant.firstName} {consultant.lastName}
                  </a>
                </td>
                <td>{consultant.phoneNumber}</td>
                <td>{consultant.fdmEmail}</td>
                <td>{consultant.stream.stream}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllConsultants;
