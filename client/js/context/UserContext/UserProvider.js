import React, { Component } from "react";
import realm from "../../config/models";

const UserContext = React.createContext();
class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "Test Token"
    };
  }

  async componentDidMount() {
    await this.queryUser();
  }

  async login(token) {
    await realm.write(() => {
      // realm.create("User", { token: "changed it biaatch" });
      this.setState({ token: token });
    });
  }

  async signout(token) {
    await realm.write(() => {
      realm.delete(realm.objectForPrimaryKey("User", token));
    });
  }

  async queryUser() {
    // let user = realm.objects("User").map(user => user.token);
    // await this.setState({ token: "query bits and beery" });
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          login: this.login.bind(this),
          signout: this.signout.bind(this),
          queryUser: this.queryUser.bind(this),
          token: this.state.token
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
