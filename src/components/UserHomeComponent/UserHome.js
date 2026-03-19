
import './UserHome.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';

function UserHome() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/login");
      return;
    }

    axios.get(__userapiurl + "fetch", { params: { role: "user" } })
      .then(res => {
        const currentUser = res.data.info.find(u => u.email === email);
        if (currentUser) setUser(currentUser);
      })
      .catch(console.log);
  }, [navigate]);

  return (
    <div className="user-home-wrapper">
      <h1>Welcome, {user.name || "User"}!</h1>
      <p className="user-info">Email: {user.email}</p>
      <p className="user-info">Mobile: {user.mobile}</p>
      <p className="user-info">City: {user.city}</p>

      {/* <div className="user-links">
        <div className="user-card" onClick={() => navigate('/edituser')}>
          <h3>Edit Profile</h3>
          <p>Update your info</p>
        </div>

        <div className="user-card" onClick={() => navigate('/setting')}>
          <h3>Change Password</h3>
          <p>Secure your account</p>
        </div>

        <div className="user-card" onClick={() => alert("Feature Coming Soon")}>
          <h3>My Orders</h3>
          <p>View orders</p>
        </div>

        <div className="user-card logout" onClick={() => { localStorage.clear(); navigate('/login'); }}>
          <h3>Logout</h3>
          <p>Exit</p>
        </div>
      </div> */}
    </div>
  );
}

export default UserHome;