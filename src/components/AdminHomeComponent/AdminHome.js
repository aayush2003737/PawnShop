import './AdminHome.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { __userapiurl } from '../../API_URL'
import { useNavigate } from 'react-router-dom'

function AdminHome(){

  const navigate = useNavigate()

  const [total,setTotal] = useState(0)
  const [active,setActive] = useState(0)
  const [inactive,setInactive] = useState(0)

  useEffect(()=>{

    const fetchUsers = async () => {
      try{

        const res = await axios.get(__userapiurl + "fetch",{
          params:{ role:"user" }
        })

        const users = res.data?.info || []

        setTotal(users.length)
        setActive(users.filter(u => u.status === 1).length)
        setInactive(users.filter(u => u.status === 0).length)

      }
      catch(err){
        console.log(err)
      }
    }

    fetchUsers()

  },[])

  const handleLogout = ()=>{
    localStorage.clear()
    navigate('/login')
  }

  return(

    <div className="admin-container">

      <h1 className="admin-heading">Admin Dashboard</h1>

      <div className="dashboard-grid">

        {/* USER CARDS */}

        <div className="dash-card" onClick={()=>navigate('/manageusers')}>
          <h3>Total Users</h3>
          <p>{total}</p>
        </div>

        <div className="dash-card" onClick={()=>navigate('/manageusers?status=active')}>
          <h3>Active Users</h3>
          <p>{active}</p>
        </div>

        <div className="dash-card" onClick={()=>navigate('/manageusers?status=inactive')}>
          <h3>Inactive Users</h3>
          <p>{inactive}</p>
        </div>


        {/* ADMIN OPTIONS */}

        <div className="dash-card" onClick={()=>navigate('/adddcategory')}>
          <h3>Add Category</h3>
          <p>Open</p>
        </div>

        <div className="dash-card" onClick={()=>navigate('/addsubcategory')}>
          <h3>Add Sub Category</h3>
          <p>Open</p>
        </div>

        <div className="dash-card" onClick={()=>navigate('/setting')}>
          <h3>Change Password</h3>
          <p>Update</p>
        </div>

        <div className="dash-card" onClick={()=>navigate('/edituser')}>
          <h3>Edit Profile</h3>
          <p>Open</p>
        </div>

        <div className="dash-card logout" onClick={handleLogout}>
          <h3>Logout</h3>
          <p>Exit</p>
        </div>

      </div>

    </div>

  )

}

export default AdminHome