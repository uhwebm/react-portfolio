import React from "react";
import "./Components.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Games,
        <br />Done Right.
      </h1>
      <p className="hero-subtitle">
        <b>7+ years</b> of crafting fun, polished games
        <br />
        for people of all ages.
      </p>
      <button
        className="cta-button"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        My Latest Work
      </button>
    </section>
  );
};

export default Hero;
