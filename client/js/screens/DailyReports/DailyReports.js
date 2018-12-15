import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import moment from "moment";
import styles from "./styles";

class DailyReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null
    };
  }

  componentDidMount() {
    this.setState({ test: this.props.dailyReportsQuey });
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.centerContainer}>
        {data.allDailyReports.map(dailyReport => {
          return (
            <View>
              <Text>{dailyReport.date}</Text>
              <Text>{moment(dailyReport.date).format("MMM Do YYYY")}</Text>
              <Text>{dailyReport.notes}</Text>
              <Text>{dailyReport.pain}</Text>
              <Text>{dailyReport.painDescription}</Text>
              <Text>{dailyReport.work}</Text>
              <Text>{dailyReport.score}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default DailyReports;
