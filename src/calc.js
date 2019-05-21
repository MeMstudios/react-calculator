import React from "react";
import ReactDOM from "react-dom";
import { ENETUNREACH } from "constants";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0.0,
      history: [],
      display: "0"
    };
    this.reset = this.reset.bind(this);
    this.delete = this.delete.bind(this);
    this.pressNum = this.pressNum.bind(this);
    this.pressAdd = this.pressAdd.bind(this);
    this.pressSub = this.pressSub.bind(this);
    this.pressDivide = this.pressDivide.bind(this);
    this.pressMult = this.pressMult.bind(this);
    this.pressDecimal = this.pressDecimal.bind(this);
    this.pressEquals = this.pressEquals.bind(this);
  }

  reset(event) {
    event.preventDefault();

    this.setState({
      result: 0.0,
      display: "0",
      history: []
    });
  }
  delete(event) {
      event.preventDefault();
  }

  pressNum(event) {
      event.preventDefault();
      var num = event.target.value;
      var numString = num.toString();
      var newDisplay = this.state.display;
      if (this.state.display === "0") {
        this.setState({display: numString});
      }
      else {
        newDisplay+=numString;
        this.setState({display: newDisplay});
      }
  }

  pressAdd(event) {
      event.preventDefault(); 
      var num = parseFloat(this.state.display);
      var historyArray = this.state.history;
      historyArray.push(num);
      historyArray.push("+");
      this.setState({
        history: historyArray,
        display: "0"
      });
  }

  pressSub(event) {
      event.preventDefault();
      var num = parseFloat(this.state.display);
      var historyArray = this.state.history;
      historyArray.push(num);
      historyArray.push("-");
      this.setState({
        history: historyArray,
        display: "0"
      });
  }

  pressMult(event) {
      event.preventDefault();
      var num = parseFloat(this.state.display);
      var historyArray = this.state.history;
      historyArray.push(num);
      historyArray.push("*");
      this.setState({
          history: historyArray,
          display: "0"
    });
  }

  pressDivide(event) {
      event.preventDefault();
      var num = parseFloat(this.state.display);
      var historyArray = this.state.history;
      historyArray.push(num);
      historyArray.push("/");
      this.setState({
          history: historyArray,
          display: "0"
      });
  }

  pressEquals(event) {
      event.preventDefault();
      var num = parseFloat(this.state.display);
      var historyArray = this.state.history;
      historyArray.push(num);
      var result = 0.0;

      historyArray.forEach((value, i) => {
        console.log(historyArray[i])
          if (i===0) {
              result = value;
          }
          else if (isNaN(value)) {
              
            switch(value){
                case "+":
                    result+=historyArray[i+1];
                    break;
                case "-":
                    result-=historyArray[i+1];
                    break;
                case "*":
                    result*=historyArray[i+1];
                    break;
                case "/":
                    result/=historyArray[i+1];
                break;
                default:
            }
          }
      })
      var numString = result.toString();
      this.setState({
          result: result,
          display: numString
      })
  }

  pressDecimal(event) {
    event.preventDefault();
    var newDisplay = this.state.display;     
    newDisplay+=".";
    this.setState({display: newDisplay});      
  }

  render() {
    return (
      <div className="main">
          
        <div className="pad">
            {this.state.display}
          <form>
          <div>
            <button onClick={this.reset} value={0}>C</button>
            <button onClick={this.delete}> DEL </button>
          </div>

          <div>
            <button onClick={this.pressNum} value={1}>
              1
            </button>
            <button onClick={this.pressNum} value={2}>
              2
            </button>
            <button onClick={this.pressNum} value={3}>
              3
            </button>
            <button onClick={this.pressAdd} value="+">
              +
            </button>
          </div>

          <div>
            <button onClick={this.pressNum} value={4}>
              4
            </button>
            <button onClick={this.pressNum} value={5}>
              5
            </button>
            <button onClick={this.pressNum} value={6}>
              6
            </button>
            <button onClick={this.pressSub} value="-">
              -
            </button>
          </div>

          <div>
            <button onClick={this.pressNum} value={7}>
              7
            </button>
            <button onClick={this.pressNum} value={8}>
              8
            </button>
            <button onClick={this.pressNum} value={9}>
              9
            </button>
            <button onClick={this.pressMult} value="*">
              *
            </button>
          </div>

          <div className="lastrow">
            <button onClick={this.pressnum} value={0}>
              0
            </button>
            <button onClick={this.pressDecimal} value=".">
              .
            </button>
            <button onClick={this.pressDivide} value="/">
              /
            </button>
            <button onClick={this.pressEquals} value="=">
              =
            </button>
          </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Calculator;