import React, { Component } from "react";
import { View, Switch } from "react-native";
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
            <View>
                <Switch
                    style={styles.arrow}
                    value={this.state.isOn}
                    onValueChange={value => {
                        this.setState({
                            isOn: value
                        });
                    }}
                />
            </View>
        );
    }
}

export default Reminders;