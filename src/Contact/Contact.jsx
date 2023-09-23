import React, { useState } from 'react';
import './ContactStyle.css'; // Import the CSS file for styling

function Contact() {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to store form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('description', description);

    try {
      // Make a POST request to the FormSubmit API endpoint
      const response = await fetch('https://formsubmit.co/prodikee@gmail.com', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Form submission was successful, you can handle success here
        console.log('Form submitted successfully');
      } else {
        // Form submission failed, you can handle errors here
        console.error('Form submission failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions here
      console.error('An error occurred:', error);
    }
    setEmail("")
    setDescription("")
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <div className="header-container">
          <h1>Contact Us</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
