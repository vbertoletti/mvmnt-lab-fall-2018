import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import ReminderSwitch from './ReminderSwitch'
import styles from "./styles";

const Reminders = ({ navigation }) => {
  renderSeparator = () => {
    return (
      <View
        style={
          styles.seperator
        }
      />
    );
  };
  const keyExtractor = item => item.id;
  return (
    <React.Fragment>
      <FlatList
        data={[
          { id: "0", day: "Monday", time: "05:00 PM" },
          { id: "1", day: "Tuesday", time: "05:00 PM" },
          { id: "2", day: "Wednesday", time: "05:00 PM" },
          { id: "3", day: "Thursday", time: "05:00 PM" },
          { id: "4", day: "Friday", time: "05:00 PM" },
          { id: "5", day: "Saturday", time: "05:00 PM" },
          { id: "6", day: "Sunday", time: "05:00 PM" }
        ]}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate('ReminderDetails')
          }}>
            <View style={styles.reminder}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.time}>{item.time}</Text>
              <ReminderSwitch />
            </View>
          </TouchableOpacity>
        )}
      />
    </React.Fragment>
  );
}

export default Reminders;