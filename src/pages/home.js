import React, { useState } from "react";
import Portfolio from "../components/Portfolio";
import PersonCard from "../components/PersonCard";
import { motion } from "framer-motion";
import sushant from "../assests/sushant.jpg";
import sahir from "../assests/sahir.jpg";
import warsha from "../assests/warsha.jpg";

const people = [
  {
    id: 1,
    name: "Sahir Prajapati",
    role: "Full Stack Developer",
    description:
      "Experienced full stack developer with extensive knowledge in design.",
    photo: sahir,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Figma",
      "Laravel",
      "Node",
      "Express",
      "Adobe Suite",
    ],
    experience: [
      {
        title: "Senior Developer",
        company: "Crocus Pearl",
        description:
          "Led a group of developers to implement backend aspects of a ecommerce applications.",
        dates: "December 2023 - Present",
      },
      {
        title: "Creative Lead",
        company: "IPAS Nepal",
        description:
          "Organized and led the team of designers to create various artworks required for the organization.",
        dates: "February 2023 - April 2023",
      },
    ],
    projects: [
      {
        title: "EvoStore",
        description:
          "Built an efficient website for the authorized reseller of Apple products while localizing all content and the feel of the website",
      },
      {
        title: "Sportify",
        description:
          "Designed and developed a platform for sport goers along with two team members which helps the players of various sports to collaborate in the KWC area.",
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
    name: "Warsha Jhankri",
    role: "Front End Developer",
    description:
      "Skilled front-end web developer with a focus on creating intuitive and responsive user interfaces",
    photo: warsha,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Bootstrap",
      "jQuery",
      "WordPress",
      "ASP.NET Core",
      "SQL",
      "MongoDB",
      "Adobe XD",
    ],
    experience: [
      {
        title: "Front-End Developer",
        company: "OASYS I.T. Solutions Pvt. Ltd.",
        description:
          "Created and maintained front-end code for e-commerce websites. Designed and developed reusable features to meet customer requirements.",
        dates: "February 2022 – April 2023",
      },
    ],
    projects: [
      {
        title: "Sportify",
        description:
          "Designed and developed a collaborative platform for sports enthusiasts. Built features to facilitate interaction and organization within the KWC area, including player profiles, event scheduling, and real-time communication tools. Focused on delivering an engaging and user-friendly experience for sports players to connect and collaborate.",
      },
      {
        title: "WebStore",
        description:
          "Developed a modern e-commerce site with a responsive design, enhancing user experience across devices. Implemented dynamic features and optimized performance for better customer engagement.",
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
