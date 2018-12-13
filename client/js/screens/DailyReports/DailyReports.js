import React, { Component } from "react";
import { Text, View } from "react-native";
import moment from "moment";
import styles from "./styles";

class DailyReports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.dailyReportsQuey
    };
  }
  render() {
    const { data } = this.props;
    return (
      <View style={styles.centerContainer}>
        {/* <Text>I am the DailyReports Screen</Text> */}
        {data.allDailyReports.map(x => {
          return (
            <View>
              <Text>{x.date}</Text>
              <Text>{moment(x.date).format("MMM Do YYYY")}</Text>
              <Text>{x.notes}</Text>
              <Text>{x.pain}</Text>
              <Text>{x.painDescription}</Text>
              <Text>{x.work}</Text>
              <Text>{x.score}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default DailyReports;
