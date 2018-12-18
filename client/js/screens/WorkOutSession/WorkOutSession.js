import React from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import Session from "../../components/Session";

const WorkoutSession = ({ session, navigation }) => {
  return (
    <React.Fragment>
      <Image
        source={require("../../assets/images/videoPlaceholder.png")}
        style={styles.video}
      />
      <ScrollView>
        {session.allPoses.map(pose => {
          return <Session session={pose} key={pose.id} />;
        })}
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert("this will go to the modal")}
      >
        <Text style={styles.buttonText}>END SESSION</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

export default WorkoutSession;
