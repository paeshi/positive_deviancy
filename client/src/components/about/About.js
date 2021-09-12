import React from "react";
import "./About.css";
import withClass from "../../hoc/withClass";

function About() {
  return (
    <>
      <h3 className="about_title">
        We are an American Made Network Connector Organization that helps
        Inventors and Startups
      </h3>
      <p className="about_desc">
        We support early-stage startups and entrepreneurs that focus on solving
        challenges around clean energy, emerging technology, and physical
        hardware.
      </p>

      <a
        href="https://americanmadechallenges.org/"
        target="_blank"
        rel="noreferrer"
        className="about_link"
      >
        American Made Prize Challenges
      </a>
    </>
  );
}

export default withClass(About, "about");
