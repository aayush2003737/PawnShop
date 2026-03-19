import { useState } from 'react';
import './Contact.css';
import {Link} from 'react-router-dom'

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    console.log(form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div id="Contact">

      <h1>Contact Us</h1>
      <p className="subtitle">We’d love to hear from you!</p>

      {/* Contact Form */}
      {/* <div className="contact-section">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="6" value={form.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div> */}

      {/* Contact Info */}
      <div className="contact-section">
        <h2>Contact Information</h2>
        <p>📍 Address: Bhopal, MP</p>
        <p>📞 Phone: 9876543210</p>
        <p>📧 Email: pawnshop@gmail.com</p>
        <div className="timing">
          <h4>Opening Hours</h4>
          <p>Mon - Sat: 10AM - 8PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Map */}
      <div className="contact-section">
        <Link><h2>Our Location</h2></Link>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=bhopal&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}

export default Contact;
