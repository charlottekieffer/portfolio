import { useState } from "react";
import "../assets/styles/contactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact" id="contact">
      <h2>Me contacter</h2>
      <form className="formulaire" onSubmit={handleSubmit}>
        <label className="form-item">
          Nom:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="form-item">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="form-item">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
