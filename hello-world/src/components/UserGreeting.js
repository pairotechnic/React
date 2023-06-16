import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.toggleLoggedIn = this.toggleLoggedIn.bind(this);
  }

  toggleLoggedIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Vishwas</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    let welcomeMessage, buttonText;
    if (this.state.isLoggedIn) {
      welcomeMessage = <div>Welcome Viswas</div>;
      buttonText = "Logout";
    } else {
      welcomeMessage = <div>Welcome Guest</div>;
      buttonText = "Login";
    }

    return (
      <div>
        {welcomeMessage}
        <button onClick={this.toggleLoggedIn}>{buttonText}</button>
      </div>
    );

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Vishwas
    //       <button onClick={this.toggleLoggedIn}>Logout</button>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       Welcome Guest
    //       <button onClick={this.toggleLoggedIn}>Login</button>
    //     </div>
    //   );
    // }
  }
}

export default UserGreeting;
