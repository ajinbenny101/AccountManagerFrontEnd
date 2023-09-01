import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ConsultantDetails = () => {
  const { id } = useParams();
  const [consultant, setConsultant] = useState({});

  useEffect(() => {
    const fetchConsultantDetails = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:8088/api/v1/consultants/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setConsultant(response.data);
      } catch (error) {
        console.error(error);
        if (error.response.status === 401) {
          navigate("/accessdenied");
        }
      }
    };
    fetchConsultantDetails();
  }, [id]);

  return (
    <div className="container py-4">
      <h1 className="display-4 mb-4">
        Consultant Details - {consultant.firstName} {consultant.lastName}
      </h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th scope="row">Phone</th>
              <td>{consultant.phoneNumber}</td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>{consultant.fdmEmail}</td>
            </tr>
            <tr>
              <th scope="row">Consultant Type</th>
              <td>{consultant.type}</td>
            </tr>
            <tr>
              <th scope="row">Stream</th>
              <td>{consultant.stream && consultant.stream.stream}</td>
            </tr>
            <tr>
              <th scope="row">Geoflex</th>
              <td>
                {consultant.geoflex && consultant.geoflex.length > 0
                  ? consultant.geoflex[0].region
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th scope="row">Skills</th>
              <td>
                {consultant.skills && consultant.skills.length > 0
                  ? consultant.skills[0].skillName
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <th scope="row">Placements</th>
              <td>
                {consultant.placements && consultant.placements.length > 0 ? (
                  <ul className="list-unstyled">
                    {consultant.placements.map((placement) => (
                      <React.Fragment key={placement.id}>
                        <li>
                          <p>Name of Company: {placement.nameOfCompany || "N/A"}</p>
                          <p>Job Title: {placement.jobTitle || "N/A"}</p>
                        </li>
                        <hr className="my-4" /> 
                      </React.Fragment>
                    ))}
                  </ul>
                ) : (
                  <p>No Placements Attended</p>
                )}
              </td>
            </tr>
            <tr>
              <th scope="row">Interests</th>
              <td>
                {consultant.interests &&
                  consultant.interests.map((interest) => interest.interest).join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultantDetails;
