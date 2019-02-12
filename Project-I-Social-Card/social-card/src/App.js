import React from "react";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer.js";
import CardContainer from "./components/CardComponents/CardContainer.js";
import Footer from "./components/FooterComponents/Footer.js";
import "./App.css";

const App = () => {
  return (
    <article className="app-container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </article>
  );
};

export default App;
