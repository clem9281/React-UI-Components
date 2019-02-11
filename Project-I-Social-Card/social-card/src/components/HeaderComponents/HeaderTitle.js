import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const dateNow = `${new Date().getDate()} ${months[new Date().getMonth()]}`;
  return (
    <div className="header-title">
      <h1> Lambda School </h1>
      <p className="subtext">@Lambda School • {dateNow}</p>
    </div>
  );
};

export default HeaderTitle;
