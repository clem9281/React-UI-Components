import React from "react";
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";
import "./Card.css";

const CardContainer = () => {
  return (
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <section className="card-container">
        <CardBanner />
        <CardContent />
      </section>
    </a>
  );
};

export default CardContainer;
