import React, { Component } from "react";

export class KandasamyClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  //   handleClick = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //     console.log(this.state.count);
  //   };

  handleClick() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default KandasamyClick;
