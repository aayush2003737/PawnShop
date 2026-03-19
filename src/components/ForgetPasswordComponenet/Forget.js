import { useState } from 'react';
import axios from 'axios';
import { __userapiurl , __forgetpasswordurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function Forgetpassword() {

  const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ email , setEmail ] = useState();  

  const handleSubmit=()=>{
    const userDetails={"email":email}; 
    axios.get(__userapiurl+"fetch",{
     params : {"email":email}
     }).then((response)=>{
      axios.post(__forgetpasswordurl,{"email":email});
      setOutput("Verification link sent on register emailid...."); 
     }).catch((error)=>{
      setOutput("EmailId not exists....");
     });
   };

  return (
<>    
<br/><br/>
<h2>Forget Password</h2>
<font color="blue" >{ output }</font>

<form>
  <label>Enter register email id to get reset link:</label>
  <input type="email" onChange={e=>setEmail(e.target.value)} value={email} />
  <br/><br/>
  <button type="button" onClick={handleSubmit} >Submit</button>
</form>
<br/><br/>
</>
  );
}

export default Forgetpassword;