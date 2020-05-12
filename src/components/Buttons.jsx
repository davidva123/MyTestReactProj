import React, { Component } from "react";
import NumberTimes from "./NumberTimes";
class Buttons extends Component {
  state = {
    currentlySelected: 0,
  };

  myinfo = [1, 2, 3, 4, 5, 6];

  clickMe = (x) => {
    // console.log(`The number that was clicked was number ${x}`);
    this.setState({ currentlySelected: x });
  };
  render() {
    return (
      <React.Fragment>
        <h1>Buttons</h1>
        <ul>
          {this.myinfo.map((x) => (
            <button key={x} onClick={() => this.clickMe(x)}>
              {x}
            </button>
          ))}
        </ul>

        <p>Times Button was clicked!</p>
        <ul>
          <li>
            1: <NumberTimes stateValue="1" selectedItemProperty={this.state.currentlySelected} />
          </li>
          <li>
            2: <NumberTimes stateValue="2" selectedItemProperty={this.state.currentlySelected} />
          </li>
          <li>
            3: <NumberTimes stateValue="3" selectedItemProperty={this.state.currentlySelected} />
          </li>
          <li>
            4: <NumberTimes stateValue="4" selectedItemProperty={this.state.currentlySelected} />
          </li>
          <li>
            5: <NumberTimes  stateValue="5" selectedItemProperty={this.state.currentlySelected} />
          </li>
          <li>
            6: <NumberTimes  stateValue="6" selectedItemProperty={this.state.currentlySelected} />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Buttons;
