import React, { Component, useState } from 'react';
import './Calculator.css';

const Numberinput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '00', '000'];
const Operator = ['+', '-', '*', '/', '%', '.', '<', '='];
let Result;
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      operationString: 0,
      operand: '',
    };
  }

  InputOperator = (x) => {
    if (x.target.innerText == '<') {
      this.setState({ Firstnum: 0, isFirstNumber: true });
    }
  };

  inputNum = (x) => {
    const { operationString, operand, firstNum, secondNum } = this.state;
    let operation = operationString === 0 ? x : operationString + '' + x;

    if (Operator.indexOf(x) > -1) {
      if (x === '=') {
        let result;
        if (operand === '+') result = firstNum + secondNum;
        if (operand === '-') result = firstNum - secondNum;
        if (operand === '/') result = firstNum / secondNum;
        if (operand === '*') result = firstNum * secondNum;
        this.setState({
          operationString: result,
          firstNum: result,
          secondNum: 0,
        });
      } else this.setState({ operand: x, operationString: operation });
    } else if (Numberinput.indexOf(x) > -1) {
      if (!operand)
        this.setState({
          firstNum: parseInt(firstNum + '' + x),
          operationString: operation,
        });
      if (operand)
        this.setState({
          secondNum: parseInt(secondNum + '' + x),
          operationString: operation,
        });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <input
            type="text"
            value={this.state.operationString}
            onChange={(event) => this.inputNum(event.target.value)}
          />
          <div className="btn">
            <div className="input_btn">
              {Numberinput.map((x) => {
                return (
                  <button
                    id={`input${x}`}
                    key={`input${x}`}
                    onClick={() => this.inputNum(x)}
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
                    onClick={() => {
                      this.inputNum(x);
                    }}
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
