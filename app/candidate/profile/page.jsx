'use client'
import { useState } from "react";

export default function CandidateProfile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("I am a passionate candidate seeking job opportunities.");

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform save operation here, e.g., send updated details to the server

    // After saving, exit edit mode
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "bio") {
      setBio(value);
    }
  };

  return (
    <div className="profile__page">
      <h1>Profile</h1>

      {isEditMode ? (
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="bio">Bio:</label>
          <textarea name="bio" value={bio} onChange={handleInputChange} />

          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Bio:</strong> {bio}
          </p>

          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}
