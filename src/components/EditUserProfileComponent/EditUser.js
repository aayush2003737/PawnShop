import './EditUser.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';

function EditProfile(){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [mobile,setMobile]=useState("");
const [address,setAddress]=useState("");
const [city,setCity]=useState("");
const [gender,setGender]=useState("");
const [msg,setMsg]=useState("");

const userEmail=localStorage.getItem("email");

useEffect(()=>{

axios.get(__userapiurl+"fetch")
.then(res=>{

const user=res.data.info.find(u=>u.email===userEmail);

if(user){

setName(user.name);
setEmail(user.email);
setMobile(user.mobile);
setAddress(user.address);
setCity(user.city);
setGender(user.gender);

}

})

.catch(err=>{
console.log(err);
});

},[]);



const handleSubmit=(e)=>{

e.preventDefault();

const data={
condition_obj:{email:userEmail},
content_obj:{name,mobile,address,city,gender}
};

axios.post(__userapiurl+"update",data)

.then(res=>{
setMsg("Profile Updated Successfully");
})

.catch(()=>{
setMsg("Update Failed");
});

};


return(

<div className="edit-wrapper">

<form className="edit-card" onSubmit={handleSubmit}>

<h2>Edit Profile</h2>

<p>{msg}</p>

<input
type="text"
value={name}
onChange={e=>setName(e.target.value)}
placeholder="Name"
/>

<input
type="email"
value={email}
disabled
/>

<input
type="text"
value={mobile}
onChange={e=>setMobile(e.target.value)}
placeholder="Mobile"
/>

<textarea
value={address}
onChange={e=>setAddress(e.target.value)}
placeholder="Address"
/>

<select
value={city}
onChange={e=>setCity(e.target.value)}
>

<option value="">Select City</option>
<option>Indore</option>
<option>Bhopal</option>
<option>Ujjain</option>

</select>


<div>

<label>

<input
type="radio"
value="male"
checked={gender==="male"}
onChange={e=>setGender(e.target.value)}
/>

Male

</label>


<label>

<input
type="radio"
value="female"
checked={gender==="female"}
onChange={e=>setGender(e.target.value)}
/>

Female

</label>

</div>


<button type="submit">

Update Profile

</button>

</form>

</div>

);

}

export default EditProfile;