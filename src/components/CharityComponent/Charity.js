import { useState } from 'react';
import './Charity.css';
import axios from 'axios';
import { __paymentapiurl } from '../../API_URL';

function Charity() {
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount) return alert("Please enter an amount!");
    try {
      const response = await axios.post(__paymentapiurl, { amount: Number(amount) });
      window.open(response.data.url);
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="charity-container">

      <div className="charity-card">

        {/* LEFT SIDE - IMAGE */}
        <div className="charity-left">
          <img src="https://tse1.mm.bing.net/th/id/OIP.JZ9pJWAQUBwPNzAZZAqtMgHaDh?pid=Api&P=0&h=180" alt="charity" />
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="charity-right">
          <h2>Support Our Cause</h2>
          <p>Enter your donation amount and help us make a difference!</p>

          <form onSubmit={handleSubmit} className="charity-form">
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              min="1"
              required
            />
            <button type="submit">Donate</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default Charity;