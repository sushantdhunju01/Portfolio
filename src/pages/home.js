import React, { useState } from "react";
import Portfolio from "../components/Portfolio";
import PersonCard from "../components/PersonCard";
import { motion } from "framer-motion";
import sushant from "../assests/sushant.jpg";
import sahir from "../assests/sahir.jpg";

const people = [
  {
    id: 1,
    name: "Vaxo Bhai",
    role: "Web Developer",
    description:
      "Experienced developer with a focus on front-end technologies.",
    photo: sahir,
    skills: ["HTML", "CSS", "JavaScript", "React"],
    experience: [
      {
        title: "Senior Developer",
        company: "Tech Solutions",
        description: "Led the development of various web applications.",
        dates: "Jan 2018 - Present",
      },
      {
        title: "Junior Developer",
        company: "Web Agency",
        description: "Worked on multiple client projects and internal tools.",
        dates: "Jun 2015 - Dec 2017",
      },
    ],
    projects: [
      {
        title: "E-commerce Website",
        description: "Built a full-featured online store.",
      },
      {
        title: "Portfolio Website",
        description: "Designed a personal portfolio.",
      },
      {
        title: "Blog Platform",
        description: "Created a blogging platform with comment features.",
      },
    ],
    animationDirection: "left",
  },
  {
    id: 2,
    name: "Sushant Shrestha",
    role: "Web Developer",
    description:
      "Creative developer specialized in designing and integration. ",
    photo: sushant,
    skills: [
      "Html/Css/Sass",
      "Vue.js",
      "React.js",
      "Figma",
      "PostgreSQL",
      "Node.js",
      "MongoDB",
      "GrapQL",
      "MySQL",
    ],
    experience: [
      {
        title: "Front-End Developer",
        company: "I.Quest Technology",
        description:
          "Developed and fixed bugs and features in on-going company's project using React.js and Graphql",
        dates: "Marh 2022 - April 2023",
      },
      {
        title: "Front-End Developer",
        company: "Rosebay Ltd",
        description:
          "Worked around bulding e-commerce website integrating Vue.js Framework, and worked in in-house application through React.js",
        dates: "Aug 2019 - Feb 2020",
      },
    ],
    projects: [
      {
        title: "Sportify",
        description: "Developed social platform for sports people out there.",
      },
      {
        title: "Best Choice",
        description: "An ecommerce website for Cambodia",
      },
      {
        title: "Smart Parking System",
        description:
          "Developed and design to minimize human effort and utilize maximum space in roadside parking efficiently without disrupting the traffice flow.",
      },
    ],
    animationDirection: "top",
  },
  {
    id: 3,
    name: "Mata Ji",
    role: "Data Scientist",
    description: "Data-driven professional with expertise in machine learning.",
    photo: "https://via.placeholder.com/150",
    skills: ["Python", "R", "SQL", "Machine Learning"],
    experience: [
      {
        title: "Data Scientist",
        company: "Analytics Firm",
        description: "Developed predictive models and analyzed data trends.",
        dates: "Jan 2019 - Present",
      },
      {
        title: "Data Analyst",
        company: "Tech Company",
        description:
          "Analyzed data and created reports to guide business decisions.",
        dates: "Jul 2015 - Dec 2018",
      },
    ],
    projects: [
      {
        title: "Customer Segmentation",
        description: "Segmented customer data for targeted marketing.",
      },
      {
        title: "Sales Prediction Model",
        description: "Built a model to forecast sales.",
      },
      {
        title: "Real-time Analytics Dashboard",
        description: "Developed a dashboard for real-time data visualization.",
      },
    ],
    animationDirection: "right",
  },
];

function Home() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const goBack = () => {
    setSelectedPerson(null);
  };

  const getCardVariants = (direction) => {
    switch (direction) {
      case "top":
        return {
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <div className="home">
      {selectedPerson ? (
        <Portfolio person={selectedPerson} goBack={goBack} />
      ) : (
        <motion.div
          className="person-cards"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.4 }}
        >
          {people.map((person) => (
            <motion.div
              key={person.id}
              variants={getCardVariants(person.animationDirection)}
              transition={{ duration: 1 }}
            >
              <PersonCard
                person={person}
                onClick={() => setSelectedPerson(person)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Home;
