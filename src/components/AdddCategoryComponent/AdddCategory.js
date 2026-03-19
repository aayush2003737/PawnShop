  // import './AdddCategory.css'
  // import { useState } from 'react'
  // import axios from 'axios'
  // import { useNavigate } from 'react-router-dom'
  // import { __categoryapiurl } from '../../API_URL'

  // function AdddCategory(){

  //   const navigate = useNavigate()

  //   const [catnm,setCatnm] = useState("")
  //   const [file,setFile] = useState(null)
  //   const [output,setOutput] = useState("")

  //   const handleFileChange = (e)=>{
  //     setFile(e.target.files[0])
  //   }

  //   const handleSubmit = async (e)=>{
  //     e.preventDefault()

  //     if(catnm === "" || !file){
  //       setOutput("All fields are required")
  //       return
  //     }

  //     const formData = new FormData()

  //     formData.append("catnm",catnm)
  //     formData.append("caticon",file)

  //     try{

  //       const res = await axios.post(__categoryapiurl + "save",formData,{
  //         headers:{
  //           "Content-Type":"multipart/form-data"
  //         }
  //       })

  //       setOutput("Category added successfully")

  //       setCatnm("")
  //       setFile(null)
  //             setTimeout(()=>{
  //         setOutput("");
  //       },3000);


  //     }
  //     catch(error){
  //       console.log(error)
  //       setOutput("Category not added")
  //             setTimeout(()=>{
  //         setOutput("");
  //       },3000);

  //     }

  //   }

  //   return(

  //     <div className="category-wrapper">

  //       <div className="category-card">

  //         <h2 className="title">Add Category</h2>

  //         {output && <p className="msg">{output}</p>}

  //         <form onSubmit={handleSubmit}>

  //           <div className="input-group">
  //             <label>Category Name</label>

  //             <input
  //               type="text"
  //               placeholder="Enter category name"
  //               value={catnm}
  //               onChange={(e)=>setCatnm(e.target.value)}
  //             />
  //           </div>

  //           <div className="input-group">
  //             <label>Category Icon</label>

  //             <input
  //               type="file"
  //               onChange={handleFileChange}
  //             />
  //           </div>

  //           <button className="btn-add">
  //             Add Category
  //           </button>

  //         </form>

  //       </div>

  //     </div>

  //   )
  // }

  // export default AdddCategory



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { __categoryapiurl } from "../../API_URL";

function AdddCategory({ theme = "light" }) {
  const navigate = useNavigate();
  const [catnm, setCatnm] = useState("");
  const [file, setFile] = useState(null);
  const [output, setOutput] = useState("");

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!catnm || !file) {
      setOutput("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("catnm", catnm);
    formData.append("caticon", file);

    try {
      await axios.post(__categoryapiurl + "save", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setOutput("Category added successfully");
      setCatnm("");
      setFile(null);
      setTimeout(() => setOutput(""), 3000);
    } catch (error) {
      console.error(error);
      setOutput("Category not added");
      setTimeout(() => setOutput(""), 3000);
    }
  };

  // Theme colors
  const isLight = theme === "light";
  const bgColor = isLight ? "#f9f9f9" : "#1e1e1e";
  const textColor = isLight ? "#333" : "#f5f5f5";
  const inputBg = isLight ? "#fff" : "#2c2c2c";
  const inputText = isLight ? "#333" : "#f5f5f5";
  const btnBg = isLight ? "#4CAF50" : "#0f9d58";
  const btnText = "#fff";

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Category</h2>

      {output && (
        <p style={{ textAlign: "center", color: output.includes("successfully") ? "green" : "red" }}>
          {output}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Category Name</label>
          <input
            type="text"
            placeholder="Enter category name"
            value={catnm}
            onChange={(e) => setCatnm(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              backgroundColor: inputBg,
              color: inputText,
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Category Icon</label>
          <input
            type="file"
            onChange={handleFileChange}
            style={{
              display: "block",
              marginTop: "5px",
              color: inputText,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: btnBg,
            color: btnText,
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AdddCategory;