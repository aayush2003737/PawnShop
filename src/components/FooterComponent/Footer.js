import { Link } from 'react-router-dom';
import './Footer.css';
import { useEffect, useState } from 'react';


function Footer() {
 
 const [footerContent,setFooterContent] = useState();
 
  useEffect(()=>{
    setInterval(() => {
    if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
    {
    
      setFooterContent(
        <>
              <footer className="tm-footer-simple">
  <p>© 2026 Pawn Shop | All Rights Reserved</p>
</footer>
        </>
      )
    }
    else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
    {
      setFooterContent(
        <>
        <footer className="tm-footer-simple">
  <p>© 2026 Pawn Shop | All Rights Reserved</p>
</footer>
        </>
      )
    }
    else
     {  
      setFooterContent(<>
       {/* <!--Footer content--> */}
    <footer className="tm-footer">
    
      <div className="container">
        <div className="row margin-bottom-60">
          <nav className="col-lg-3 col-md-3 tm-footer-nav tm-footer-div">
            <h3 className="tm-footer-div-title">Main Menu</h3>
            <ul>
              <li><a> <Link to="">Home</Link></a></li>
              <li><a> <Link to="/about">About</Link></a></li>
              <li><a> <Link to="/contact">Contact</Link></a></li>
              <li><a> <Link to="/register">Register</Link></a></li>
              <li><a> <Link to="/service">Service</Link></a></li>
              <li><a> <Link to="/login">Login</Link></a></li>
            </ul>
          </nav>
          <div className="col-lg-5 col-md-5 tm-footer-div">
            <h3 className="tm-footer-div-title">About Us</h3>
            <p className="margin-top-15">
  Discover a curated collection of antiques, music items, rare books, and more. We bring together quality, trust, and value in one place.
</p>

<p className="margin-top-15">
  Join us in exploring timeless treasures and experience a seamless shopping journey.
</p>
</div>
          <div className="col-lg-4 col-md-4 tm-footer-div">
            <h3 className="tm-footer-div-title">Get Social</h3>
            <p>Your trusted destination for quality products and a smooth shopping experience.</p>
            <div className="tm-social-icons-container">
              <Link to="https://www.facebook.com/" className="tm-social-icon"><a ><i className="fa fa-facebook"></i></a></Link>
              <Link to="https://x.com/?lang=en-in" className="tm-social-icon"><a ><i className="fa fa-twitter"></i></a></Link>
              <Link to="https://in.linkedin.com/" className="tm-social-icon"><a ><i className="fa fa-linkedin"></i></a></Link>
              <Link to="https://www.youtube.com/" className="tm-social-icon"><a ><i className="fa fa-youtube"></i></a></Link>
              <Link to="https://web.whatsapp.com/" className="tm-social-icon"><a  ><i className="fa fa-whatsapp"></i></a></Link>
            </div>
          </div>
        </div>
        
        <div className="row tm-copyright">
          <p className="col-lg-12 small copyright-text text-center">Copyright &copy; 2026 Company Name Pawn Shop</p>
        </div>
      </div>
    </footer> 
    

          </>)
    }
}, 1);
  },[])
  
 
 
 return (
<>    
{footerContent}
 
</>
  );
}

export default Footer;





