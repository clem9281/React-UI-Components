import React from "react";
import CardBanner from "./CardBanner.js";
import CardContent from "./CardContent.js";
import "./Card.css";

const CardContainer = () => {
  return (
    <section className="card-container">
      <CardBanner />
      <CardContent />
    </section>
  );
};

export default CardContainer;
