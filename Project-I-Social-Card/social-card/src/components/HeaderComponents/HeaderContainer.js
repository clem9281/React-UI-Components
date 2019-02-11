import React from "react";
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";
import HeaderTitle from "./HeaderTitle.js";
import "./Header.css";

const HeaderContainer = () => {
  return (
    <section className="header-container">
      <ImageThumbnail />
      <div className="header-content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </section>
  );
};

export default HeaderContainer;
