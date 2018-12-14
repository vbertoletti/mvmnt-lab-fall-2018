import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import styles from "./styles";

class DailyReportModal extends Component {
  constructor(props) {
    super(props);
    this.allChallenges = [];
    this.date = new Date().toISOString();
    this.score = 2;
    this.scores = [];
  }

  getAverage(arr) {
    let avg = 0;
    let sum = 0;
    sum = arr.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / arr.length;
    return avg;
  }

  getDaysBetween(dateA, dateB) {
    let a = moment(dateA);
    let b = moment(dateB);
    let days = b.diff(a, "days");
    return days;
  }

  render() {
    console.log(
      this.getDaysBetween(
        new Date().toISOString(),
        moment(new Date().toISOString()).add(1, "Y")
      )
    );

    return (
      <View style={styles.centerContainer}>
        <Text>User ID: {this.props.userId}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.createReport({
              variables: {
                date: new Date().toISOString(),
                pain: 0,
                score: 2,
                work: 2,
                userId: this.props.userId,
                painDescription: "None felt great",
                notes: "Im dying"
              }
            });
            const allChallengeResponse = this.props.allChallenges;
            this.allChallenges = allChallengeResponse.allChallenges;
            this.allChallenges.map(challenge => {
              if (
                challenge.startDate <= new Date().toISOString() &&
                challenge.endDate >= new Date().toISOString()
              ) {
                this.scores = challenge.score;
                this.scores.push(this.score);
                this.props.updateChallenge({
                  variables: { id: challenge.id, score: this.scores }
                });
              }
            });
            if (
              this.allChallenges.length === 0 ||
              this.allChallenges[this.allChallenges.length - 1].endDate <
                new Date().toISOString()
            ) {
              this.props.createChallenge({
                variables: {
                  endDate: moment(new Date()).add(1, "M"),
                  startDate: new Date().toISOString(),
                  score: [this.score],
                  userId: this.props.userId,
                  daysBetween: this.getDaysBetween(
                    new Date().toISOString(),
                    moment(new Date().toISOString()).add(1, "M")
                  )
                }
              });
            }
          }}
        >
          <Text>Create new DailyReport</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DailyReportModal;
