import React, { Component } from "react";
import Realm from "../../config/models";

const CoachContext = React.createContext();
class CoachProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      id: null
    };
  }

  componentDidMount() {
    this.queryCoach();
  }

  async storeSessionToken(token, id) {
    try {
      await Realm.write(() => {
        Realm.create("Coach", { id: id, token: token });
        this.setState({ token: token, id: id });
      });
    } catch (e) {
      return e;
    }
  }

  async removeCoachIdToken(id) {
    try {
      await Realm.write(() => {
        Realm.delete(Realm.objectForPrimaryKey("Coach", id));
        this.setState({ id: null, token: null });
      });
    } catch (e) {
      return e;
    }
  }

  async queryCoach() {
    try {
      let coach = await Realm.objects("Coach").map(coach => coach);
      this.setState({ id: coach[0].id, token: coach[0].token });
    } catch (e) {
      return e;
    }
  }

  render() {
    return (
      <CoachContext.Provider
        value={{
          ...this.state,
          storeSessionToken: this.storeSessionToken.bind(this),
          removeCoachIdToken: this.removeCoachIdToken.bind(this),
          queryCoach: this.queryCoach.bind(this)
        }}
      >
        {this.props.children}
      </CoachContext.Provider>
    );
  }
}
export { CoachProvider };
export default CoachContext;
