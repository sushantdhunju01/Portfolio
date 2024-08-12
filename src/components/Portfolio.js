import React from "react";

function Portfolio({ person, goBack }) {
  return (
    <div className="portfolio-detail">
      <button className="back-button" onClick={goBack}>
        &larr; Back to Profiles
      </button>
      <section className="person-info">
        <img src={person.photo} alt={person.name} className="person-photo" />
        <div className="person-details">
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
          <p>{person.description}</p>
        </div>
      </section>
      <section className="projects">
        <h4>Projects:</h4>
        <ul>
          {person.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
