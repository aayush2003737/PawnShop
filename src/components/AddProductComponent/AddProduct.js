import React, { useEffect, useState } from 'react'
import './AddProduct.css'
import axios from 'axios';
import { __addproductapiurl, __categoryapiurl, __subcategoryapiurl } from '../../API_URL';

const AddProduct = () => {

const [output , setOutput] = useState("")

const [Title , setTitle] = useState("");
const [catnm , setCatnm] = useState("");
const [SubCatnm , setSubCatnm] = useState("");
const [ProDesc , setProDesc] = useState("");
const [file , setfile] = useState(null);
const [expec , setExpec] = useState("");

const [catList , setCatList] = useState([]);
const [subcatList , setSubCatList] = useState([]);


// CATEGORY
useEffect(()=>{

axios.get(__categoryapiurl+"fetch")
.then((response)=>{
setCatList(response.data.info);
})
.catch((error)=>{
console.log(error);
})

},[])


// SUBCATEGORY
useEffect(()=>{

if(catnm !== ""){

axios.get(__subcategoryapiurl+"fetch?catnm="+catnm)
.then((response)=>{
setSubCatList(response.data.info);
})
.catch((error)=>{
console.log(error);
})

}

},[catnm])



// FILE CHANGE
const handelChange = (e)=>{

const selectedFile = e.target.files[0]

if(selectedFile && selectedFile.type === "application/pdf"){
setfile(selectedFile)
setOutput("")
}
else{
setOutput("Only PDF file allowed")
e.target.value=""
setfile(null)
}

}



// FORM VALIDATION
const validateForm = ()=>{

if(Title === ""){
setOutput("Title is required")
return false
}

if(catnm === ""){
setOutput("Please select category")
return false
}

if(SubCatnm === ""){
setOutput("Please select subcategory")
return false
}

if(ProDesc === ""){
setOutput("Product description required")
return false
}

if(file === null){
setOutput("Please upload PDF file")
return false
}

if(expec === ""){
setOutput("Please select expectation")
return false
}

return true

}



// SUBMIT
const handelSubmit = ()=>{

if(!validateForm()){
return
}

let formdata = new FormData()

formdata.append("title",Title)
formdata.append("catnm",catnm)
formdata.append("subcatnm",SubCatnm)
formdata.append("description",ProDesc)
formdata.append("doc",file)
formdata.append("expectation",expec)

axios.post(__addproductapiurl+"save",formdata,{
headers:{
"Content-Type":"multipart/form-data"
}
})
.then(()=>{

setOutput("Product Added Successfully")

setTitle("")
setCatnm("")
setSubCatnm("")
setProDesc("")
setfile(null)
setExpec("")

})
.catch((error)=>{
console.log(error)
})

}


return (

<section className="addproduct-section">

<div className="addproduct-card">

<h2>Add Product</h2>

<p className="message">{output}</p>

<div className="form-group">

<label>Product Title</label>

<input
type="text"
className="form-control"
value={Title}
onChange={(e)=>setTitle(e.target.value)}
/>

</div>


<div className="form-group">

<label>Category</label>

<select
className="form-control"
value={catnm}
onChange={(e)=>setCatnm(e.target.value)}
>

<option value="">Select Category</option>

{catList.map((row,index)=>(
<option key={index} value={row.catnm}>
{row.catnm}
</option>
))}

</select>

</div>


<div className="form-group">

<label>SubCategory</label>

<select
className="form-control"
value={SubCatnm}
onChange={(e)=>setSubCatnm(e.target.value)}
>

<option value="">Select SubCategory</option>

{subcatList.map((row,index)=>(
<option key={index} value={row.subcatnm}>
{row.subcatnm}
</option>
))}

</select>

</div>


<div className="form-group">

<label>Description</label>

<textarea
className="form-control"
value={ProDesc}
onChange={(e)=>setProDesc(e.target.value)}
></textarea>

</div>


<div className="form-group">

<label>Upload PDF</label>

<input
type="file"
className="form-control"
onChange={handelChange}
/>

</div>


<div className="form-group">

<label>Expectation</label>

<label>
<input
type="radio"
name="expectation"
value="sell"
onChange={(e)=>setExpec(e.target.value)}
/>
 Sell
</label>

<label style={{marginLeft:"15px"}}>
<input
type="radio"
name="expectation"
value="preview"
onChange={(e)=>setExpec(e.target.value)}
/>
 Preview
</label>

</div>


<button className="submit-btn" onClick={handelSubmit}>
Add Product
</button>

</div>

</section>

)

}

export default AddProduct