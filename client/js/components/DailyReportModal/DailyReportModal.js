import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import styles from "./styles";
import PropTypes from "prop-types";

class DailyReportModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChallenges: [],
      date: new Date().toISOString(),
      pain: 0,
      score: 2,
      work: 2,
      scores: []
    };
  }

  getAverageOfUserScores(arr) {
    const avg = 0;
    const sum = 0;
    sum = arr.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / arr.length;
    return avg;
  }

  getDaysBetween(dateA, dateB) {
    let startDate = moment(dateA);
    let endDate = moment(dateB);
    let days = endDate.diff(startDate, "days");
    return days;
  }

  render() {
    return (
      <View style={styles.centerContainer}>
        <Text>User ID: {this.props.userId}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.createReport({
              variables: {
                date: new Date().toISOString(),
                pain: this.state.pain,
                score: this.state.score,
                work: this.state.work,
                userId: this.props.userId,
                painDescription: "Test Test Test",
                notes: "Im dying"
              }
            });
            const allChallengeResponse = this.props.allChallenges;
            this.setState({
              allChallenges: allChallengeResponse.allChallenges
            });
            this.state.allChallenges.map(challenge => {
              if (
                challenge.startDate <= new Date().toISOString() &&
                challenge.endDate >= new Date().toISOString()
              ) {
                this.setState({ scores: challenge.score });
                this.setState({ scores: this.state.scores.push(this.work) });
                this.props.updateChallenge({
                  variables: { id: challenge.id, score: this.state.scores }
                });
              }
            });
            if (
              this.state.allChallenges.length === 0 ||
              this.state.allChallenges[this.allChallenges.length - 1].endDate <
                new Date().toISOString()
            ) {
              this.props.createChallenge({
                variables: {
                  endDate: moment(new Date()).add(1, "M"),
                  startDate: new Date().toISOString(),
                  score: [this.state.score],
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

DailyReportModal.defaultProps = {
  userId: "",
  allChallenges: null,
  createChallenge: null,
  createReport: null,
  updateChallenge: null
};

DailyReportModal.propTypes = {
  userId: PropTypes.string,
  allChallenges: PropTypes.object,
  createChallenge: PropTypes.func,
  createReport: PropTypes.func,
  updateChallenge: PropTypes.func
};
