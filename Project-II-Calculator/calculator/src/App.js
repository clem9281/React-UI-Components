import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  const buttonElements = {
    clear: {
      type: "action",
      buttonStyle: "long-button",
      value: "clear"
    },
    divided: {
      type: "operator",
      buttonStyle: "short-button red-button",
      value: "/"
    },
    seven: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 7
    },
    eight: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 8
    },
    nine: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 9
    },
    times: {
      type: "operator",
      buttonStyle: "short-button red-button",
      value: "x"
    },
    four: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 4
    },
    five: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 5
    },
    six: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 6
    },
    minus: {
      type: "operator",
      buttonStyle: "short-button red-button",
      value: "-"
    },
    one: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 1
    },
    two: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 2
    },
    three: {
      type: "numeric",
      buttonStyle: "short-button",
      value: 3
    },
    plus: {
      type: "operator",
      buttonStyle: "short-button red-button",
      value: "+"
    },
    zero: {
      type: "numeric",
      buttonStyle: "long-button",
      value: 0
    },
    equals: {
      type: "operator",
      buttonStyle: "short-button red-button",
      value: "="
    }
  };

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
