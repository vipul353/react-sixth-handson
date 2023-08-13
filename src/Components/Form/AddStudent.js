import React,{useState} from 'react'
import "./style.css";
import { Link,useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { contextApi } from '../../App';

const AddStudent = () => {
    const navigate = useNavigate()
    const data =  useContext(contextApi)
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");

 function clickHandle() {
   let arrayData = data.StuData;
   const highestIdObject = arrayData.reduce((prev, current) => {
    return (current.id > prev.id) ? current : prev;
  });
    let newStudent = {
        id:highestIdObject.id+1,
        name:name,
        Age:age,
        Batch:batch,
        Course:course
    }

    arrayData.push(newStudent);
    data.setStuData(arrayData);
    navigate('/Students')
 }

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
          // eslint-disable-next-line
          style={name!="" ? { display: "none" } : { display: "block" }}
          className="lable"
        >
          {/* {name} */}
          Name
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
          // eslint-disable-next-line
          style={age!="" ? { display: "none" } : { display: "block" }}
          className="lable"
        >
          {/* {age} */}
          Age
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
          // eslint-disable-next-line
          style={course!="" ? { display: "none" } : { display: "block" }}
          className="lable"
        >
          {/* {course} */}
          Course
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
          // eslint-disable-next-line
          style={batch!="" ? { display: "none" } : { display: "block" }}
          className="lable"
        >
          {/* {batch} */}
          Batch
        </label>
      </div>
    </form>
    <div className="Frm-btn-row">
      <button className="frm-btn" onClick={clickHandle}>
        {"submit"}
      </button>
      <button className="frm-btn">
        <Link to={`/Students`}>Cancel</Link>
      </button>
    </div>
  </div>
  )
}

export default AddStudent