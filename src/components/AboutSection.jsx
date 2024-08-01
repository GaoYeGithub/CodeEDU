import React from 'react';
import '/src/css/AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Who are we?</h2>
        <p className="about-text">
          CodeEDU is an organization dedicated to educating and empowering incoming students to the world of STEM (science, technology, engineering, and math).
        </p>
      </div>
      <div className="about-image">
        <img src="/src/images/hero.png" alt="Teacher with students" />
      </div>
    </section>
  );
}

export default AboutSection;
