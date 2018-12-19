import React, { Component } from "react";
import { Switch } from "react-native";
import styles from "./styles";

class Reminders extends Component {
    constructor() {
        super();
        this.state = {
            isOn: false
        };
    }
    render() {
        return (
            <React.Fragment>
                <Switch
                    style={styles.arrow}
                    value={this.state.isOn}
                    onValueChange={value => {
                        this.setState({
                            isOn: value
                        });
                    }}
                />
            </React.Fragment>
        );
    }
}

export default Reminders;