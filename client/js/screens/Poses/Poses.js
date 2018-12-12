import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import propTypes from "prop-types";
import styles from "./styles";

const thumbnail = {
  Bear: require("../../assets/images/icons/Bear.png"),
  Superbug: require("../../assets/images/icons/Superbug.png")
};

renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: "#CED0CE"
      }}
    />
  );
};

const Poses = ({ navigation, data }) => {
  _keyExtractor = item => item.id;
  return (
    <React.Fragment>
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              style={styles.Pose}
              onPress={() => {
                navigation.navigate("PosesDetails");
              }}
            >
              {console.log(item.icon)}
              <Image
                source={thumbnail[item.icon]}
                style={styles.image}
              />
              {console.log(item.icon)}
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
  navigation: propTypes.object.isRequired
};

export default Poses;
