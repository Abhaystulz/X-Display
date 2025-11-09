import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ prevents page reload

    const { firstName, lastName } = formData;

    // ✅ If any field empty → Do not display full name
    if (firstName.trim() === "" || lastName.trim() === "") {
      setFullName("");
      return;
    }

    // ✅ Show full name when both fields are filled
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit} data-testid="name-form">
        <input
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          data-testid="first-name"
        />
        <input
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          data-testid="last-name"
        />

        <button type="submit" data-testid="submit-btn">
          Submit
        </button>
      </form>

      {/* ✅ show only when both inputs are valid */}
      {fullName && <p data-testid="full-name">Full Name: {fullName}</p>}
    </div>
  );
}

export default App;
