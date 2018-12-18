import React, { Component } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import styles from "./styles";
import Session from "../Session/Session";
import moment from "moment";

class MainPageSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLight: true
    };
  }

  render() {
    const { session, navigation, challenges } = this.props;
    return (
      <View style={styles.card} key={challenges.id}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showLight: true
              })
            }
          >
            <Text
              style={
                this.state.showLight ? styles.lightHeader : styles.darkHeader
              }
            >
              LIGHT
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showLight: false
              })
            }
          >
            <Text
              style={
                !this.state.showLight ? styles.lightHeader : styles.darkHeader
              }
            >
              HEAVY
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sessionContainer}>
          <View>
            <Text style={styles.day}>
              DAY
              {challenges.score.length}
            </Text>
          </View>
          {this.state.showLight ? (
            <ScrollView>
              {session.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          ) : (
            <ScrollView>
              {session.map(pose => {
                return <Session session={pose} key={pose.id} />;
              })}
            </ScrollView>
          )}

          <TouchableOpacity
            onPress={() => navigation.navigate("WorkoutSession")}
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
