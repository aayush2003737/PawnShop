import './Nav.css';

import { Link } from 'react-router-dom';

function Nav() {
  return (
<>    
<div id="nav" >
<br/>
<a><Link to="" >Home</Link></a>
<a><Link to="/about" >About</Link></a>
<a><Link to="/contact" >Contact</Link></a>
<a><Link to="/service" >Service</Link></a>
<a><Link to="/register" >Register</Link></a>
<a><Link to="/login" >Login</Link></a>

</div>
</>
  );
}

export default Nav;
