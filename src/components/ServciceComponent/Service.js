import { Link } from 'react-router-dom';
import './Service.css';

function Service() {
  return (
    <div id="service">

      {/* HERO SECTION */}
      <div className="service-hero">
        <h1>Welcome to Pawn Shop</h1>
        <p>Explore the services we provide to make your experience easy and trustworthy.</p>
      </div>

      {/* SERVICE CARDS */}
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-cards">

          <div className="service-card">
            <h3>Gold & Jewelry Pawn</h3>
            <p>Get instant loans against your gold and jewelry at the best interest rates.</p>
          </div>

          <div className="service-card">
            <h3>Electronics Pawn</h3>
            <p>Pawn your gadgets and electronics quickly without any hassle.</p>
          </div>

          <div className="service-card">
            <h3>Personal Loans</h3>
            <p>Fast personal loans for emergencies with minimal documentation.</p>
          </div>

          <div className="service-card">
            <h3>Buy & Sell</h3>
            <p>Buy and sell used items safely at competitive prices.</p>
          </div>

        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="service-cta">
        <h2>Need Our Services?</h2>
        <p>Contact us today and get a free consultation!</p>
      <Link to="/contact"><button>Contact Us</button></Link>
      </div>

    </div>
  );
}

export default Service;