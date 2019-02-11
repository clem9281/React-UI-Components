import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  let moment = require("moment");
  return (
    <div className="header-title">
      <h1> Lambda School </h1>
      <p className="subtext">@Lambda School • {moment().format("D MMM")}</p>
    </div>
  );
};

export default HeaderTitle;
