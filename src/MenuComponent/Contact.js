import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-container mt-5">
      <h2 className="text-light">Contact Us</h2>
      <p className="text-muted">Feel free to reach out to us. We would love to hear from you!</p>

      <form className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label text-light">Your Name:</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-light">Email Address:</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label text-light">Message:</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
