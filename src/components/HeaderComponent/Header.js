import { Link } from 'react-router-dom';
import './Header.css';
import { useEffect, useState } from 'react';
import Auth from '../AuthComponent/Auth';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  
  const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next" onClick={onClick}>❯</div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev" onClick={onClick}>❮</div>
);

  const [HearderContent, setHeaderContent] = useState()

  useEffect(()=>{
    setInterval(() => {
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
      setHeaderContent(<>


           <section className="admin-header">

<div className="admin-top">

<h1 className="logo">
<Link to="/admin">Pawn Shop</Link>
</h1>

<p className="admin-text">Welcome to Admin Panel</p>

</div>

<nav className="admin-nav">

<ul>

<li><Link to="/admin" className="active">Admin Home</Link></li>

<li><Link to="/manageusers">Manage Users</Link></li>

<li><Link to="/adddcategory">Add Category</Link></li>

<li><Link to="/addsubcategory">Add Sub Category</Link></li>

<li><Link to="/setting">Change Password</Link></li>

<li><Link to="/edituser">Edit Profile</Link></li>

<li><Link to="/logout" className="logout">Logout</Link></li>

<li><Link to="/viewaddedproduct" className="logout">viewaddedproduct</Link></li>

</ul>

</nav>

</section>

      </>)
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
    {
      setHeaderContent(<>

<section className="admin-header">

<div className="admin-top">

<h1 className="logo">
<Link to="/user">Pawn Shop</Link>
</h1>

<p className="admin-text">Welcome to User Panel</p>

</div>

<nav className="admin-nav">

<ul>

<li>
<Link to="/user" className="active">User Home</Link>
</li>

<li>
<Link to="/viewcategory">View Category</Link>
</li>


<li>
<Link to="/setting">Change Password</Link>
</li>

<li>
<Link to="/addproduct">Add Product</Link>
</li>


<li>
<Link to="/edituser">Edit User Profile</Link>
</li>

<li>
<Link to="/Charity">Charity</Link>
</li>

<li>
<Link to="/logout" className="logout">Logout</Link>
</li>

</ul>

</nav>

</section>

      </>)
    }
    else
     {  
      setHeaderContent(<>
   <section className="templatemo-top-section">
          {/* <div className="templatemo-header">
           
            <h1 className="templatemo-site-name" ><Link to="">pawn shop</Link></h1>
            <div className="mobile-menu-icon">
              <i className="fa fa-bars"></i>
            </div>
            <div className="templatemo-nav-container">
              <nav className="templatemo-nav" >
              <button 
      className="mobile-menu-icon" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
                <ul>
                <li><a className="active"><Link to="">Home</Link></a></li>
                    <li><a><Link to="/about">About</Link></a></li>
                    <li><a><Link to="/contact">Contact</Link></a></li>
                    <li><a><Link to="/service">Service</Link></a></li>
                    <li><a><Link to="/register" >Register</Link></a></li>
                    <li><a><Link to="/login" >Login</Link></a></li>
                    <li><a><Link to="/aiclient" >AI Companion</Link></a></li>
                    
               </ul>
             </nav> 
           </div>
         </div>  */}

         <div className="templatemo-header">

  {/* LEFT LOGO */}
  <div className="logo-section">
    <h1 className="templatemo-site-name">
      {/* <Link to="">Pawn Shop</Link> */}
     <Link to="/"> <img src='/img/logo-light-grey2 (1).avif'/></Link>
    </h1>
  </div>

  {/* RIGHT NAVBAR */}
  <div className="templatemo-nav-container">
    <nav className="templatemo-nav">
      <ul>
        <li><Link to="" className="btn-login">Home</Link></li>
        <li><Link to="/about" className="btn-login">About</Link></li>
        <li><Link to="/contact" className="btn-login">Contact</Link></li>
        <li><Link to="/service" className="btn-login">Service</Link></li>
        <li><Link to="/viewcategory" className='btn-login'>Browser</Link></li>
        <li><Link to="/register" className="btn-login">Register</Link></li>
        <li><Link to="/login" className="btn-login">Login</Link></li>
        <li><Link to="/aiclient" className="btn-login">AI Companion</Link></li>
      </ul>
    </nav>
  </div>

</div>

<div className="templatemo-welcome welcome-slider">
  <div className="container">
    <Slider
      dots={true}
      infinite={true}
      speed={800}
      autoplay={true}
      autoplaySpeed={3000}
      arrows={true}                 // ✅ arrows ON
      draggable={true}              // ✅ mouse drag
      swipe={true}                  // ✅ touch swipe
      nextArrow={<NextArrow />}
      prevArrow={<PrevArrow />}
    >

      {/* Slide 1 */}
      <div>
        <div className="slider-card">
          <img src="img/copy.png" alt="Fossil" />
          <div className="slider-content">
            <h1>PAWN STARS IS BACK! CHECK OUT NEW EPISODES WEDS NIGHTS ON HISTORY!</h1>
            <h2><p>
             Shop all the items from the show in our "As Seen on Pawn Stars" collection! New items are added after the show.
            </p></h2>

         <p class="block-paragaph"></p>
          </div>
        </div>
      </div>

<div>
        <div className="slider-card">
          <img src="img/PawnStars_533x.webp" alt="Fossil" />
          <div className="slider-content">
            <h1>MEET &amp; GREET MERCH BUNDLE</h1>
           <h2><p>
    New Dates Added! Score a merch bundle and join a meet &amp; greet with Rick or Chumlee on your visit to the shop!
            </p></h2>

          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div>
        <div className="slider-card">
          <img src="img/rick_meet.jpg" alt="Fossil" />
          <div className="slider-content">
            <h1>NEW FOSSIL FINDS! DINO TEETH, METEORS AND MORE</h1>
           <h2><p>
              Shop dinosaur teeth, meteorites and other fossils. All housed in beautiful display cases with informative cards starting at only $55.99!
            </p></h2>

          </div>
        </div>
      </div>








    </Slider>
  </div>
</div>


      
       
      
      </section>

      </>)
    }




}, 1);
  },[])
  
  return (
<>    
  <Auth />
 {HearderContent}
</>
  );
}

export default Header;










