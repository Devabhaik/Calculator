import React, { Component } from 'react';
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
  '=',
];

class Calculator extends Component {
  render() {
    console.log(Number);
    return (
      <div className="container">
        <div className="calculator">
          <input type="number" defaultValue="0" />
          <div className="input_btn">
            {Number.map((x) => {
              return (
                <button id={`input${x}`} key={`input${x}`}>
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
