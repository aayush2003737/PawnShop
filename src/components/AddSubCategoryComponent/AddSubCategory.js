import './AddSubCategory.css'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { __categoryapiurl , __subcategoryapiurl } from '../../API_URL'

function AddSubCategory(){

  const [output,setOutput] = useState("")
  const [catnm,setCatnm] = useState("")
  const [subcatnm,setSubcatnm] = useState("")
  const [file,setFile] = useState(null)
  const [cList,setCategoryList] = useState([])

  useEffect(()=>{

    axios.get(__categoryapiurl+"fetch")
    .then(res=>{
      setCategoryList(res.data.info || [])
    })
    .catch(console.log)

  },[])

  const handleFileChange = (e)=>{
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()

    if(!catnm || !subcatnm || !file){
      setOutput("All fields are required")
      return
    }

    const formData = new FormData()

    formData.append("catnm",catnm)
    formData.append("subcatnm",subcatnm)
    formData.append("caticon",file)

    try{

      await axios.post(__subcategoryapiurl+"save",formData,{
        headers:{'Content-Type':'multipart/form-data'}
      })

      setOutput("SubCategory added successfully")

      setCatnm("")
      setSubcatnm("")
      setFile(null)

    }
    catch(err){
      console.log(err)
      setOutput("SubCategory not added")
    }

  }

  return(

    <div className="subcategory-wrapper">

      <div className="subcategory-card">

        <h2 className="title">Add Sub Category</h2>

        {output && <p className="msg">{output}</p>}

        <form onSubmit={handleSubmit}>

          <div className="input-group">

            <label>Category</label>

            <select
              value={catnm}
              onChange={(e)=>setCatnm(e.target.value)}
            >

              <option value="">Select Category</option>

              {
                cList.map((row,index)=>(
                  <option key={index}>{row.catnm}</option>
                ))
              }

            </select>

          </div>

          <div className="input-group">

            <label>SubCategory Name</label>

            <input
              type="text"
              placeholder="Enter SubCategory Name"
              value={subcatnm}
              onChange={(e)=>setSubcatnm(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>SubCategory Icon</label>

            <input
              type="file"
              onChange={handleFileChange}
            />

          </div>

          <button className="btn-add">
            Add SubCategory
          </button>

        </form>

      </div>

    </div>

  )

}

export default AddSubCategory






// import './AddSubCategory.css'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { __categoryapiurl, __subcategoryapiurl } from '../../API_URL'

// function AddSubCategory() {

//   const [output, setOutput] = useState("")
//   const [catnm, setCatnm] = useState("")
//   const [subcatnm, setSubcatnm] = useState("")
//   const [file, setFile] = useState(null)
//   const [cList, setCategoryList] = useState([])

//   useEffect(() => {
//     axios.get(__categoryapiurl + "fetch")
//       .then(res => {
//         setCategoryList(res.data.info || [])
//       })
//       .catch(err => console.log(err))
//   }, [])

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0])
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!catnm || !subcatnm || !file) {
//       setOutput("❌ All fields are required")
//       return
//     }

//     const formData = new FormData()
//     formData.append("catnm", catnm)
//     formData.append("subcatnm", subcatnm)
//     formData.append("caticon", file)

//     try {
//       await axios.post(__subcategoryapiurl + "save", formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       })

//       setOutput("✅ SubCategory added successfully")

//       // Reset fields
//       setCatnm("")
//       setSubcatnm("")
//       setFile(null)
//       e.target.reset()

//     } catch (err) {
//       console.log(err)
//       setOutput("❌ SubCategory not added")
//     }
//   }

//   return (

//     <div className="subcategory-wrapper">

//       <div className="subcategory-card">

//         <h2 className="title">Add Sub Category</h2>

//         {output && (
//           <p className={`msg ${output.includes("❌") ? "error" : ""}`}>
//             {output}
//           </p>
//         )}

//         <form onSubmit={handleSubmit}>

//           {/* Category */}
//           <div className="input-group">
//             <label>Select Category</label>

//             <select
//               value={catnm}
//               onChange={(e) => setCatnm(e.target.value)}
//             >
//               <option value="">-- Select Category --</option>

//               {
//                 cList.map((row, index) => (
//                   <option key={index} value={row.catnm}>
//                     {row.catnm}
//                   </option>
//                 ))
//               }

//             </select>
//           </div>

//           {/* Subcategory Name */}
//           <div className="input-group">
//             <label>SubCategory Name</label>

//             <input
//               type="text"
//               placeholder="Enter SubCategory Name"
//               value={subcatnm}
//               onChange={(e) => setSubcatnm(e.target.value)}
//             />
//           </div>

//           {/* File */}
//           <div className="input-group">
//             <label>SubCategory Icon</label>

//             <input
//               type="file"
//               onChange={handleFileChange}
//             />
//           </div>

//           {/* Button */}
//           <button className="btn-add">
//             Add SubCategory
//           </button>

//         </form>

//       </div>

//     </div>

//   )
// }

// export default AddSubCategory 