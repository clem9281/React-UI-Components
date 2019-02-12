import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div className="calc-container">
        <CalculatorDisplay />
        <ActionButton buttonStyle="long-button" text="clear" />
        <NumberButton buttonStyle="short-button red-button" text="/" />
        <NumberButton buttonStyle="short-button" text="7" />
        <NumberButton buttonStyle="short-button" text="8" />
        <NumberButton buttonStyle="short-button" text="9" />
        <NumberButton buttonStyle="short-button red-button" text="x" />
        <NumberButton buttonStyle="short-button" text="4" />
        <NumberButton buttonStyle="short-button" text="5" />
        <NumberButton buttonStyle="short-button" text="6" />
        <NumberButton buttonStyle="short-button red-button" text="-" />
        <NumberButton buttonStyle="short-button" text="1" />
        <NumberButton buttonStyle="short-button" text="2" />
        <NumberButton buttonStyle="short-button" text="3" />
        <NumberButton buttonStyle="short-button red-button" text="+" />
        <ActionButton buttonStyle="long-button" text="0" />
        <NumberButton buttonStyle="short-button red-button" text="=" />
      </div>
    </div>
  );
};

export default App;
