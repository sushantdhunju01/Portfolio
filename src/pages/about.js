import React from "react";
import { motion } from "framer-motion";
import Everest from "../assests/everest.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={Everest} alt="About Us" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome, we are team Everest
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          With years of experience in the industry, we have honed our skills in
          various areas of web development, from front-end design to back-end
          programming. We believe in continuous learning and staying updated
          with the latest technologies to provide the best service possible.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          We value collaboration, creativity, and commitment to excellence.
          Whether you're looking for a dynamic website, a user-friendly
          application, or an engaging digital experience, we're here to make it
          happen.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
