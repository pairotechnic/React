import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    // this.messageChanger = this.messageChanger.bind(this);
  }

  //   messageChanger() {
  //     if (this.state.message == "hello") {
  //       this.setState({
  //         message: "goodbye",
  //       });
  //     } else {
  //       this.setState({
  //         message: "hello",
  //       });
  //     }

  //     console.log(this);
  //   }

  messageChanger = () => {
    if (this.state.message == "hello") {
      this.setState({
        message: "goodbye",
      });
    } else {
      this.setState({
        message: "hello",
      });
    }

    console.log(this);
  };

  //   messageChanger = () => {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //   };

  render() {
    // const {state1 , state2} = this.state // This works just like destructuring
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Without binding in constructor */}
        {/* <button onClick={this.messageChanger.bind(this)}>Click</button>  */}

        {/* Without binding in constructor */}
        {/* <button onClick={() => this.messageChanger()}>Click</button> */}

        {/* With binding in constructor */}
        <button onClick={this.messageChanger}>Click</button>
      </div>
    );
  }
}

export default EventBind;
