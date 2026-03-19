import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Page load hote hi confirm popup
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
      // Yes → logout + redirect
      localStorage.removeItem('token');
      localStorage.removeItem('__id');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('mobile');
      localStorage.removeItem('address');
      localStorage.removeItem('city');
      localStorage.removeItem('gender');
      localStorage.removeItem('role');
      localStorage.removeItem('info');

      navigate("/login");
    } else {
      // No → wapas last page ya home
      navigate(-1); // last page par wapas
    }
  }, [navigate]);

  return null; // page pe kuch bhi render nahi karna
}

export default Logout;