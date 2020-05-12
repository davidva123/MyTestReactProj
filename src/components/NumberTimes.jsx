import React, { Component } from "react";
class NumberTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
    };
  }
  render() {
    return (
      
      <React.Fragment><br />
      `Pre Props StateValue is : {this.props.stateValue}` <br /> 
      `Pre Props selectedItemProperty is : {this.props.selectedItemProperty}` <br /> 
      `Pre State currentValue is : {this.state.currentValue}` <br /> 
        {
         this.props.stateValue === this.props.selectedItemProperty   ? this.setState({ currentValue: this.state.currentValue + 1 })
           : this.state.currentValue
          }
          <br /> 
          `Post Props StateValue is : {this.props.stateValue}` <br /> 
      `Post Props selectedItemProperty is : {this.props.selectedItemProperty}` <br /> 
      `Post State currentValue is : {this.state.currentValue}` <br /> 
      </React.Fragment>
    );
  }
}

export default NumberTimes;
