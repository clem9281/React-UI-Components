import React from "react";
import ImageThumbnail from "./ImageThumbnail.js";
import HeaderContent from "./HeaderContent.js";
import "./Header.css";

const HeaderContainer = () => {
  return (
    <div>
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
};

export default HeaderContainer;
