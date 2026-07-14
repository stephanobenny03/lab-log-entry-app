import axios from "axios";
import React, { useState } from "react";


const AddLog = () => {
  const [input, ChangeInput] = useState({
    name: "",
    dept: "",
    sem: "",
    course: "",
    sysNo: "",
    logInTime: "",
    logOutTime: "",
    date: "",
  });

  const inputHandler = (event) => {
    ChangeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    console.log(input);

    axios
      .post("https://host-demo-app.onrender.com/api/add-log", input)
      .then((response) => {
        console.log(response.data);
        alert("Log added successfully");
      })
      .catch((error) => {
        console.error("Error Adding Log:", error);
        console.log(error.response);
        console.log(error.response?.data);
        console.log(error.response?.status);

        alert("Failed to Add Log!!");
      });
  };

  return (
    <div>
    

      <h2 className="text-center p-5">ADD LOG</h2>

      <div className="container">
        <div className="row">
          <div className="col col-12">
            <div className="row g-4">

              <div className="col col-12 col-sm-6">
                <label className="form-label">NAME</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={input.name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">DEPARTMENT</label>
                <input
                  type="text"
                  className="form-control"
                  name="dept"
                  value={input.dept}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">SEMESTER</label>
                <input
                  type="text"
                  className="form-control"
                  name="sem"
                  value={input.sem}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">COURSE</label>
                <input
                  type="text"
                  className="form-control"
                  name="course"
                  value={input.course}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">SYSTEM NUMBER</label>
                <input
                  type="text"
                  className="form-control"
                  name="sysNo"
                  value={input.sysNo}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">LOG IN TIME</label>
                <input
                  type="time"
                  className="form-control"
                  name="logInTime"
                  value={input.logInTime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">LOG OUT TIME</label>
                <input
                  type="time"
                  className="form-control"
                  name="logOutTime"
                  value={input.logOutTime}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">DATE</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={input.date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12">
                <button className="btn btn-dark" onClick={readValue}>
                  Submit
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLog;