import React, { Component } from "react";
import Reminders from "./Reminders";

class RemindersContainer extends Component {
    static navigationOptions = {
        title: "REMINDERS",
        headerTitleStyle: {
            color: "white",
            fontSize: 24
        }
    };
    render() {
        return <Reminders navigation={this.props.navigation} />;
    }
}

export default RemindersContainer;
