import React, { Component } from "react";
var repMax = require("rep-max");

class Body extends Component {
  state = {
    weight: 300,
    reps: 5,
    value: ""
  }
  handleChangeWeight = event => {
    this.setState({ weight: event.target.value });
  };

  handleChangeReps = event => {
    if (event.target.value) {
      this.setState({ reps: event.target.value });
    } else {
      this.setState({ reps: 1 });
    }
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-headline">Calculator Yourself At Your Best</h1>
          <div className="App-Max-Text">
            {this.state.reps > 0
              ? repMax.oneRepMax(this.state.weight, this.state.reps)
              : "You needs reps"}
          </div>
        </header>
        <div className="App">
          <form>
            <label>
              Weight:
              <input
                className="App-input"
                name="Weight"
                type="text"
                value={this.state.weight}
                onChange={this.handleChangeWeight}
              />
            </label>
          </form>

          <form>
            <label>
              Reps:
              <input
                className="App-input"
                name="Reps"
                type="text"
                value={this.state.reps}
                onChange={this.handleChangeReps}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default Body;
