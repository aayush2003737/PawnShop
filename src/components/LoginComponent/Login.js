import './Login.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

function Login() {

  const navigate = useNavigate();

  const [captchaValue, setCaptchaValue] = useState(null);
  const [output,setOutput] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);   // 👈 NEW

  const handleSubmit = (e)=>{
    e.preventDefault();
     if (!captchaValue) {
    setOutput("Please verify captcha!");
    return;
  }

  setLoading(true);

  axios.post(__userapiurl+"login",{
    email,
    password,
    captcha: captchaValue   // 👈 send to backend
  })

    setLoading(true);

    axios.post(__userapiurl+"login",{email,password})
    .then((response)=>{
      const users=response.data.info;

      localStorage.setItem("token",response.data.token);
      localStorage.setItem("name",users.name);
      localStorage.setItem("email",users.email);
      localStorage.setItem("role",users.role);

      if(users.role==="admin") navigate("/admin");
      else navigate("/user");

      setTimeout(()=> setOutput(""),3000);
    })
    .catch(()=>{
      setOutput("Invalid user or verify account");
      setLoading(false);
      setTimeout(()=> setOutput(""),3000);
    });
  };

  return (
    <div className="login-wrapper">

      <div className="login-container">

        {/* LEFT */}
        <div className="login-visual">
          <h1>Pawn Shop</h1>
          <p>Secure access to your dashboard & services</p>
        </div>

        {/* RIGHT */}
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
          />

          {/* PASSWORD FIELD WITH TOGGLE */}
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}   // 👈 CHANGE
              placeholder="Password"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              required
            />

            <span
              className="toggle-btn"
              onClick={()=>setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}

            </span>
          </div>

<ReCAPTCHA
  sitekey="6LfUj48sAAAAAKyxIFIbmJs9yvlpfuBtyXXw_Zbd"
  onChange={(value) => setCaptchaValue(value)}
/>
          <button type="submit">
            {loading ? "Signing in..." : "Login"}
          </button>

          {output && <p className="error">{output}</p>}

          <br />
          <br />

          <Link to="/forgetpassword">Forget Password</Link>

          <br />

          <p className="extra">
            Don’t have account? <Link to="/register">Create New Account</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;




