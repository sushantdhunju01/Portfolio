import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";
import "./App.css";

const people = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    description:
      "Experienced developer with a focus on front-end technologies.",
    photo: "https://via.placeholder.com/150",
    projects: ["E-commerce Website", "Portfolio Website", "Blog Platform"],
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Graphic Designer",
    description:
      "Creative designer specializing in branding and digital media.",
    photo: "https://via.placeholder.com/150",
    projects: [
      "Branding for XYZ Company",
      "Social Media Campaign",
      "Website Redesign",
    ],
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Data Scientist",
    description: "Data-driven professional with expertise in machine learning.",
    photo: "https://via.placeholder.com/150",
    projects: [
      "Customer Segmentation",
      "Sales Prediction Model",
      "Real-time Analytics Dashboard",
    ],
  },
];

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const goBack = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="App">
      <Navbar />
      {selectedPerson ? (
        <Portfolio person={selectedPerson} goBack={goBack} />
      ) : (
        <div className="person-cards">
          {people.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              onClick={() => setSelectedPerson(person)}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
