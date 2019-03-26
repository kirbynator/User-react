import React from "react";

// Set Up The Initial Context
const UserContext = React.createContext();

// Create an exportable consumer that can be injected into components
export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = {
    username: "HeMan",
    dateJoined: "03/29/19",
    membershipLevel: "Silver",
    email: "test@test.com",
    firstName: 'He',
    lastName: 'Man',
    avatar: 'n/a',
    updateUser: (user) => this.updateUser(user),
  }

  updateUser = (user) => {
    this.setState({ ...user, });
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export default UserProvider;
