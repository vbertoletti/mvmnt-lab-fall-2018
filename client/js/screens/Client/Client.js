import React from "react";
import { View, Text, TouchableOpacity, SectionList, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const Client = ({ client }) => {
  return (
    <SectionList
      renderItem={({ item }) => {
        return (
          <ScrollView>
            <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => alert("this will go to profile")}
              >
                <Image
                  style={styles.icon}
                  source={require("../../assets/images/icons/Bear.png")}
                />
                <Text style={styles.name}>
                  {item.firstname} {item.lastname}
                </Text>
                <Image
                  style={styles.arrowIcon}
                  source={require("../../assets/images/blackarrow.png")}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }}
      sections={client}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Client;
