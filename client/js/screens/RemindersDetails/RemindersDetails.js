import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import RemindersDetailsDatePicker from "../../components/RemindersDetailsDatePicker/RemindersDetailsDatePicker";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const RemindersDetails = () => {
  return (
    <View style={styles.remindersWrapper}>
      <Text style={styles.remindersDay}>MONDAY</Text>

      <Image
        source={require("../../assets/images/alarm.png")}
        style={styles.image}
      />

      <View style={styles.dayPicker}>
        <RemindersDetailsDatePicker />
      </View>

      <View style={styles.remindersCheckbox}>
        <FontAwesome5 name={"check-square"} size={20} />
        <Text style={styles.checkboxText}>Use same time everyday </Text>
      </View>

      <TouchableOpacity style={styles.setReminderButton}>
        <Text style={styles.buttonText}>SET REMINDER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RemindersDetails;
