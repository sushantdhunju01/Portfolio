import React from "react";

function Person({ person }) {
  return (
    <div className="person">
      <h2>{person.name}</h2>
      <h3>{person.role}</h3>
      <p>{person.description}</p>
      <h4>Projects:</h4>
      <ul>
        {person.projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
