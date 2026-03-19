import './Setting.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';

function Setting() {

  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldpassword || !newpassword || !confirmpassword) {
      setMsg("All fields required");
      return;
    }

    if (newpassword !== confirmpassword) {
      setMsg("New password & confirm password must match");
      return;
    }

    try {
      const email = localStorage.getItem("email");

      const data = {
        condition_obj: { email: email, password: oldpassword },
        content_obj: { password: newpassword }
      };

      const response = await axios.patch(__userapiurl + "update", data);

      if (response.data.status) {
        setMsg("Password updated successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setMsg("Old password invalid");
      }

    } catch (error) {
      console.log(error);
      setMsg("Something went wrong");
    }
  };

  return (
    <div className="setting-wrapper">

      <form onSubmit={handleSubmit} className="setting-card">

        <h2>Change Password</h2>

        <input 
          type="password"
          value={oldpassword}
          onChange={e=>setOldPassword(e.target.value)}
          placeholder="Old Password"
        />

        <input 
          type="password"
          value={newpassword}
          onChange={e=>setNewPassword(e.target.value)}
          placeholder="New Password"
        />

        <input 
          type="password"
          value={confirmpassword}
          onChange={e=>setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />

        <button type="submit">Update Password</button>

        {msg && <p className="msg">{msg}</p>}

      </form>

    </div>
  );
}

export default Setting;