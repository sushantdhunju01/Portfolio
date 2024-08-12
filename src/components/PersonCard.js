import React from "react";

function PersonCard({ person, onClick }) {
  return (
    <div className="person-card" onClick={onClick}>
      <img src={person.photo} alt={person.name} />
      <h2>{person.name}</h2>
      <h3>{person.role}</h3>
      <p>{person.description}</p>
    </div>
  );
}

export default PersonCard;
