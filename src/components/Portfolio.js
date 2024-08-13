import React from "react";

function Portfolio({ person, goBack }) {
  return (
    <div className="portfolio-detail">
      <button className="back-button" onClick={goBack}>
        &larr; Back to Profiles
      </button>

      {/* Name and Photo Section */}
      <section className="person-info">
        <div className="person-details">
          <h2>{person.name}</h2>
          <h3>{person.role}</h3>
          <p>{person.description}</p>
        </div>
        <img src={person.photo} alt={person.name} className="person-photo" />
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {person.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <h2>Work Experience</h2>
        <ul>
          {person.experience.map((job, index) => (
            <li key={index}>
              <h3>
                {job.title} at {job.company}
              </h3>
              <p>{job.description}</p>
              <p>
                <strong>{job.dates}</strong>
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Showcasing Projects Section */}
      <section className="projects">
        <h2>Showcasing Projects</h2>
        <ul>
          {person.projects.map((project, index) => (
            <li key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
