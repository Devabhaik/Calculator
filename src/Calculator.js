import React, { Component, useState } from 'react';
import './Calculator.css';

const Number = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  '+',
  '-',
  '*',
  '/',
  '%',
  '.',
  '<',
  '=',
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { Num: 0 };

    this.Compute = (x) => {
      this.setState({ Num: x.target.innerText });
      console.log(x.target.innerText);
    };
  }
  render() {
    console.log(Number);
    return (
      <div className="container">
        <div className="calculator">
          <input type="number" value={this.state.Num} onChange={this.Compute} />
          <div className="input_btn">
            {Number.map((x) => {
              return (
                <button
                  id={`input${x}`}
                  key={`input${x}`}
                  onClick={this.Compute}
                >
                  {x}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
