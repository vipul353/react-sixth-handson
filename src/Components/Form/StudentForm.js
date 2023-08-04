import React, { useState } from 'react'
import './style.css';
import { useParams } from 'react-router-dom';
import Data from '../../data/Data';
import { Link } from "react-router-dom";

export const StudentForm = () => {
  
  const [data,setData] = useState(Data);
  const {id} = useParams();
  const [name,setName] = useState(data[id].name);
  const [age,setAge] = useState(data[id].Age);
  const [course,setCourse] = useState(data[id].Course);
  const [batch,setBatch] = useState(data[id].Batch);

  // const [formData , setFormData] = useState({})
  
 const onClick = (e) => {
  e.preventDefault();
    let entryvalue = {
      name:name,
      age:age,
      course:course,
      batch:batch
    }
     setData([...data,entryvalue])
  };

  // changeHandle = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
// const  onChange = (e) => {
//    setFormData({[e.target.name]:e.target.value});
//    console.log(FormData.Name);
// }
  

  // const InputField = ({userName,FieldName})=>{
  //   return(
  //     <>
  //     <div className='input-container'>
  //         <input className='text-input' name={userName} type='text' value={name} onChange={(e)=>{setName(e.target.value)}} id={userName} />
  //         <label htmlFor={userName} style={FieldName?{display:'none'}:{display:'block'}} className='lable'>{userName}</label>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <div className='mainForm'>
      <form className='form'>
      <div className='input-container'>
          <input className='text-input' name={"Name"}  type='text' value={name} onChange={(e)=>{setName(e.target.value)}} id={"Name"} />
          <label htmlFor={"Name"} style={data[id].name?{display:'none'}:{display:'block'}} className='lable'>{data[id].name}</label>
        </div>

        <div className='input-container'>
          <input className='text-input' name={"Age"}  type='text' value={age} onChange={(e)=>{setAge(e.target.value)}} id={"Age"} />
          <label htmlFor={"Age"} style={data[id].Age?{display:'none'}:{display:'block'}} className='lable'>{data[id].Age}</label>
        </div>

        <div className='input-container'>
          <input className='text-input' name={"Course"} type='text'  value={course} onChange={(e)=>{setCourse(e.target.value)}} id={"Course"} />
          <label htmlFor={"Course"} style={data[id].Course?{display:'none'}:{display:'block'}} className='lable'>{data[id].Course}</label>
        </div>

        <div className='input-container'>
          <input className='text-input' name={"Batch"} type='text' value={batch} onChange={(e)=>{setBatch(e.target.value)}} id={"Batch"} />
          <label htmlFor={"Batch"} style={data[id].Batch?{display:'none'}:{display:'block'}} className='lable'>{data[id].Batch}</label>
        </div>
     
      </form>
      <div className='Frm-btn-row'>
         <button className='frm-btn' onClick={onClick} >submitt</button>
         <button className='frm-btn'><Link to={`/Students`} >Cancel</Link></button>
       </div>
    </div>
  )
}
