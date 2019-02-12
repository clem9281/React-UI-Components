import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import math from "mathjs";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "0"
    };
    this.clear = this.clear.bind(this);
    this.clickNumber = this.clickNumber.bind(this);
    this.clickOperator = this.clickOperator.bind(this);
    this.clickEquals = this.clickEquals.bind(this);
  }
  clear() {
    this.setState({ total: "0" });
  }
  clickNumber(event) {
    let total = this.state.total;
    if (total === "0") {
      total = event.target.textContent;
      this.setState({ total });
    } else {
      total += event.target.textContent;
      this.setState({
        total
      });
    }
  }
  clickOperator(event) {
    let total = this.state.total;
    if (event.target.textContent === "\u00D7") {
      total += "*";
      this.setState({ total });
    } else if (event.target.textContent === "\u00F7") {
      total += "/";
      this.setState({ total });
    } else if (event.target.textContent === "\u2212") {
      total += "-";
      this.setState({ total });
    } else {
      total += event.target.textContent;
      this.setState({ total });
    }
  }
  clickEquals() {
    let total = this.state.total;
    try {
      total = math.eval(total);
      this.setState({ total });
    } catch (err) {
      total = "INVALID";
      this.setState({ total });
    }
  }
  render() {
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
            Don't forget to `default export` your components and import them
            here inside of this file in order to make them work.
          </strong>
        </p>
        <div className="calc-container">
          <CalculatorDisplay display={this.state.total} />
          <ActionButton
            buttonStyle="long-button"
            text="clear"
            action={this.clear}
          />
          <NumberButton
            buttonStyle="short-button red-button"
            text={"\u00F7"}
            action={this.clickOperator}
          />
          <NumberButton
            buttonStyle="short-button"
            text="7"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="8"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="9"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button red-button"
            text={"\u00D7"}
            action={this.clickOperator}
          />
          <NumberButton
            buttonStyle="short-button"
            text="4"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="5"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="6"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button red-button"
            text={"\u2212"}
            action={this.clickOperator}
          />
          <NumberButton
            buttonStyle="short-button"
            text="1"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="2"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button"
            text="3"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button red-button"
            text="+"
            action={this.clickOperator}
          />
          <ActionButton
            buttonStyle="long-button"
            text="0"
            action={this.clickNumber}
          />
          <NumberButton
            buttonStyle="short-button red-button"
            text="="
            action={this.clickEquals}
          />
        </div>
      </div>
    );
  }
}

export default App;
