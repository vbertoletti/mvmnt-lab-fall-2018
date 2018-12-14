import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import propTypes from "prop-types";
import styles from "./styles";

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png"),
  Flamingo: require("../../assets/images/icons/Flamingo.png"),
  Gargoyle: require("../../assets/images/icons/Gargoyle.png"),
  StraightJacket: require("../../assets/images/icons/Straight Jacket.png")
};

renderSeparator = () => {
  return (
    <View
      style={styles.seperator}
    />
  );
};

const Poses = ({ navigation, data }) => {
  const keyExtractor = item => item.id;
  return (
    <React.Fragment>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <View style={styles.pose}>
            <TouchableOpacity
              style={styles.pose}
              onPress={() => {
                navigation.navigate("PosesDetails");
              }}
            >
              <Image
                source={thumbnail[item.icon]}
                style={styles.image}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Image
                source={require("../../assets/images/blackarrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </React.Fragment>
  );
};

Poses.propTypes = {
  navigation: propTypes.object.isRequired,
  data: propTypes.array.isRequired
};

export default Poses;
