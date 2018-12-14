import React, { Component } from "react";
import Realm from "../../config/models";

const UserContext = React.createContext();
class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      id: null
    };
  }

  async componentDidMount() {
    await this.queryUser();
  }

  async storeSessionToken(token, id) {
    await Realm.write(() => {
      Realm.create("User", { id: id, token: token });
      this.setState({ token: token, id: id });
    });
  }

  async removeUserIdToken(id) {
    await Realm.write(() => {
      Realm.delete(Realm.objectForPrimaryKey("User", id));
      this.setState({ id: "", token: "" });
    });
  }

  async queryUser() {
    let userToken = await Realm.objects("User").map(user => user.token);
    let userId = await Realm.objects("User").map(user => user.id);
    this.setState({ token: userToken, id: userId });
    console.log("Provider", id);
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          storeSessionToken: this.storeSessionToken.bind(this),
          removeUserIdToken: this.removeUserIdToken.bind(this),
          queryUser: this.queryUser.bind(this)
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export { UserProvider };
export default UserContext;
