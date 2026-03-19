// import './Register.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { __userapiurl } from '../../API_URL';
// import { Link } from 'react-router-dom';

// function Register() {

//   const [output,setOutput] = useState("");
//   const [user,setUser] = useState({
//     name:"",
//     email:"",
//     password:"",
//     mobile:"",
//     address:"",
//     city:"",
//     gender:""
//   });

//   const handleChange=(e)=>{
//     setUser({...user,[e.target.name]:e.target.value});
//   };

//   const handleSubmit=(e)=>{
//     e.preventDefault();

//     axios.post(__userapiurl+"save",user)
//     .then(()=>{
//       setOutput("success");
//       setUser({
//         name:"",
//         email:"",
//         password:"",
//         mobile:"",
//         address:"",
//         city:"",
//         gender:""

        
//       });
//       setTimeout(()=>{
//         setOutput("");
//       },4000);

//     })
//     .catch(()=>{
//       setOutput("fail");

//             setTimeout(()=>{
//         setOutput("");
//       },4000);


//     });
//   };

//   return (
//     <div className="register-page">

//       <div className="register-card">

//         {/* LEFT PANEL */}
//         <div className="register-left">
//           <h1>Pawn Shop</h1>
//           <p>Create your account to start buying and selling items easily.</p>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="register-right">

//           <h2>Create Account</h2>

//           {output==="success" &&
//             <div className="alert-success">Registration Successful</div>
//           }

//           {output==="fail" &&
//             <div className="alert-error">Registration Failed</div>
//           }

//           <form onSubmit={handleSubmit}>

//             <div className="form-grid">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={user.name}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={user.email}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={user.password}
//                 onChange={handleChange}
//                 required
//               />

//               <input
//                 type="tel"
//                 name="mobile"
//                 placeholder="Mobile Number"
//                 value={user.mobile}
//                 onChange={handleChange}
//                 pattern="[0-9]{10}"
//                 required
//               />

//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={user.address}
//                 onChange={handleChange}
//                 required
//               />

//               <select
//                 name="city"
//                 value={user.city}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select City</option>
//                 <option>Indore</option>
//                 <option>Bhopal</option>
//                 <option>Ujjain</option>
//                 <option>Dewas</option>
//                 <option>Khargone</option>
//               </select>

//             </div>

//             <div className="gender-section">
//               <span>Gender :</span>

//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="male"
//                   checked={user.gender==="male"}
//                   onChange={handleChange}
//                 /> Male
//               </label>

//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="female"
//                   checked={user.gender==="female"}
//                   onChange={handleChange}
//                 /> Female
//               </label>
//             </div>

//             <button className="register-btn">
//               Create Account
//             </button>

//             <p className="login-link">
//               Already have an account?
//               <Link to="/login"> Login</Link>
//             </p>

//           </form>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Register;



import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { Link } from 'react-router-dom';

function Register() {

  const [output,setOutput] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👈 NEW

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    mobile:"",
    address:"",
    city:"",
    gender:""
  });

  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    axios.post(__userapiurl+"save",user)
    .then(()=>{
      setOutput("success");
      setUser({
        name:"",
        email:"",
        password:"",
        mobile:"",
        address:"",
        city:"",
        gender:""
      });

      setTimeout(()=> setOutput(""),4000);
    })
    .catch(()=>{
      setOutput("fail");
      setTimeout(()=> setOutput(""),4000);
    });
  };

  return (
    <div className="register-page">

      <div className="register-card">

        {/* LEFT PANEL */}
        <div className="register-left">
          <h1>Pawn Shop</h1>
          <p>Create your account to start buying and selling items easily.</p>
        </div>

        {/* RIGHT FORM */}
        <div className="register-right">

          <h2>Create Account</h2>

          {output==="success" &&
            <div className="alert-success">Registration Successful</div>
          }

          {output==="fail" &&
            <div className="alert-error">Registration Failed</div>
          }

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={user.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={user.email}
                onChange={handleChange}
                required
              />

              {/* PASSWORD WITH TOGGLE */}
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}  // 👈 CHANGE
                  name="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleChange}
                  required
                />

                <span
                  className="toggle-btn"
                  onClick={()=>setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={user.mobile}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
              />

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={user.address}
                onChange={handleChange}
                required
              />

              <select
                name="city"
                value={user.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Ujjain</option>
                <option>Dewas</option>
                <option>Khargone</option>
              </select>

            </div>

            <div className="gender-section">
              <span>Gender :</span>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender==="male"}
                  onChange={handleChange}
                /> Male
              </label>

              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender==="female"}
                  onChange={handleChange}
                /> Female
              </label>
            </div>

            <button className="register-btn">
              Create Account
            </button>

            <p className="login-link">
              Already have an account?
              <Link to="/login"> Login</Link>
            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;