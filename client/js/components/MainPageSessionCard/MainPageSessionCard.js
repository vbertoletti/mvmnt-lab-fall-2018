import React, { Component } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles";
import Session from "../Session/Session";

class MainPageSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLight: true
    };
  }

  render() {
    const { session } = this.props;
    return (
      <View style={styles.card}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.setState({ showLight: true })}>
            <Text style={styles.header}>LIGHT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.setState({ showLight: false })}>
            <Text style={styles.header}>HEAVY</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sessionContainer}>
          <View>
            <Text style={styles.day}>DAY 29</Text>
          </View>
          {this.state.showLight ? (
            <ScrollView>
              {session.allPoses.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          ) : (
            <ScrollView>
              {session.allPoses.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          )}

          <TouchableOpacity
            onPress={() => alert("this will go to the workoutSession")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainPageSessionCard;
