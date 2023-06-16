import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//       <h1>
//         Welcome {this.props.name} a.k.a. {this.props.heroName}
//       </h1>
//     );
//   }
// }

// In class components, we destructure props in render method. So we can say {name} instead of {this.props.name}
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state // This works just like destructuring
    return (
      <h1>
        Welcome {name} a.k.a. {heroName}
      </h1>
    );
  }
}

export default Welcome;
