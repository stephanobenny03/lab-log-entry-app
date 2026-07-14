import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";


const ViewLog = () => {
  const [data, ChangeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/logs")
      .then((response) => {
        ChangeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <NavBar/>

      <div className="container">
        <h1 className="text-center mt-4">VIEW LOGS</h1>

        <div className="row mt-4">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Semester</th>
                    <th>Course</th>
                    <th>System No</th>
                    <th>Log In Time</th>
                    <th>Log Out Time</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((value, index) => (
                    <tr key={index}>
                      <td>{value.name}</td>
                      <td>{value.dept}</td>
                      <td>{value.sem}</td>
                      <td>{value.course}</td>
                      <td>{value.sysNo}</td>
                      <td>{value.logInTime}</td>
                      <td>{value.logOutTime}</td>
                      <td>{value.date}</td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewLog;