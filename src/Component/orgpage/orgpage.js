import React, { useState } from 'react';
import './orpage.css'
import axios from "axios";
import { Link } from 'react-router-dom';
function FormPage() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [subscriptionId, setSubscriptionId] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const formData = {
        name: name,
        contact: contact,
        subscriptionId: subscriptionId,
      };
  
      axios
        .post("http://localhost:8000/org", formData) // Update the URL to your Node.js endpoint
        .then((response) => {
          console.log("Data inserted successfully!");
          // Handle the successful response here
        })
        .catch((error) => {
          console.log("Error inserting data into the table!");
          console.log(error);
          // Handle the error response here
        });
    };

  return (
    <div className="page-container">
      <h2 className="h2">Form Page</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        {/* <div className="form-group">
          <label htmlFor="subscriptionId">Subscription ID:</label>
          <input
            type="text"
            id="subscriptionId"
            name="subscriptionId"
            value={subscriptionId}
            onChange={(e) => setSubscriptionId(e.target.value)}
            required
          />
        </div> */}
         {/* <Link to="/login" className="btn login-btn">Login</Link> */}
         <Link to="/login" className="submit-btn">Submit</Link>
      </form>
    </div>
  );
}

export default FormPage;
