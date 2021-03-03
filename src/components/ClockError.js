import React from "react";

class ClockError extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  changeCountHandle() {
    console.log(this);
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <p>You Click {this.state.count} Count!</p>
        <button onClick={this.changeCountHandle}>点击</button>
      </div>
    );
  }
}

export default ClockError;
