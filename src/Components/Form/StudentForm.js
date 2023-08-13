import React, { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
// import Data from "../../data/Data";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contextApi } from "../../App";
import { useNavigate } from "react-router-dom";

export const StudentForm = () => {
  const navigate = useNavigate();

  const data = useContext(contextApi);
  const { id } = useParams();
  console.log(id);
  const [name, setName] = useState(data.StuData[id].name);
  const [age, setAge] = useState(data.StuData[id].Age);
  const [course, setCourse] = useState(data.StuData[id].Course);
  const [batch, setBatch] = useState(data.StuData[id].Batch);

  // const [formData , setFormData] = useState({})

  const onClick = (e) => {
    e.preventDefault();
    let entryvalue = {
      name: name,
      Age: age,
      Course: course,
      Batch: batch,
    };

    let updatedArray = data.StuData.map((item) => {
      // eslint-disable-next-line
      if (item.id == id) {
        console.log("matched");
        return { ...item, ...entryvalue };
      }
      return item;
    });

    console.log(updatedArray);
    data.setStuData(updatedArray);
    navigate("/Students");
  };

  return (
    <div className="mainForm">
      <form className="form">
        <div className="input-container">
          <input
            className="text-input"
            name={"Name"}
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            id={"Name"}
          />
          <label
            htmlFor={"Name"}
            style={name ? { display: "none" } : { display: "block" }}
            className="lable"
          >
            {name}
          </label>
        </div>

        <div className="input-container">
          <input
            className="text-input"
            name={"Age"}
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            id={"Age"}
          />
          <label
            htmlFor={"Age"}
            style={age ? { display: "none" } : { display: "block" }}
            className="lable"
          >
            {age}
          </label>
        </div>

        <div className="input-container">
          <input
            className="text-input"
            name={"Course"}
            type="text"
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
            id={"Course"}
          />
          <label
            htmlFor={"Course"}
            style={course ? { display: "none" } : { display: "block" }}
            className="lable"
          >
            {course}
          </label>
        </div>

        <div className="input-container">
          <input
            className="text-input"
            name={"Batch"}
            type="text"
            value={batch}
            onChange={(e) => {
              setBatch(e.target.value);
            }}
            id={"Batch"}
          />
          <label
            htmlFor={"Batch"}
            style={batch ? { display: "none" } : { display: "block" }}
            className="lable"
          >
            {batch}
          </label>
        </div>
      </form>
      <div className="Frm-btn-row">
        <button className="frm-btn" onClick={onClick}>
          {id ? "update" : "submit"}
        </button>
        <button className="frm-btn">
          <Link to={`/Students`}>Cancel</Link>
        </button>
      </div>
    </div>
  );
};
