import React, { Component, useState } from 'react';
import './Calculator.css';

const Numberinput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '000'];
const Operator = ['+', '-', '*', '/', '%', '.', '<', '='];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Result: 0,
      Firstnum: [],
    };

    this.Compute = (x) => {
      this.state.Firstnum.push(x.target.innerText);

      let NewNum = this.state.Firstnum.map((x) => {
        return parseInt(x);
      });

      this.setState({ Result: NewNum });
      console.log(NewNum);

      if (x.target.innerText == '<') {
        this.setState({ Result: 0 });
      }
    };
  }
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input value={this.state.Result} onChange={this.Compute} />
          <div className="btn">
            <div className="input_btn">
              {Numberinput.map((x) => {
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
            <div className="operate_btn">
              {Operator.map((x) => {
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
      </div>
    );
  }
}

export default Calculator;
