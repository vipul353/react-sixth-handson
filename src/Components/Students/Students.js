import React, { useState } from "react";
import Data from "../../data/Data";
import "./StuStyle.css";
import { Link } from "react-router-dom";

function Students() {
  const [data] = useState(Data);
  console.log(data);
  return (
    <div className="main">
      <div className="flex">
        <span className="stu">Students Details</span>
        <button
          onClick={() => {
           
          }}
          className="btn"
        >
          Add new Student
        </button>
      </div>
      <table className="table">
        <thead>
          <tr><th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>change</th></tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td><Link>Edit</Link></td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
