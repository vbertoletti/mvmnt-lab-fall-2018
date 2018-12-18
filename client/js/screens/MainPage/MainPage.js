import React, { Fragment } from "react";
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  ScrollView
} from "react-native";
import styles from "./styles";
import MainPageSessionCard from "../../components/MainPageSessionCard";
import moment from "moment";

const MainPage = ({ session, navigation, challenges }) => {
  _keyExtractor = item => item.id;
  return (
    <Fragment>
      <View style={styles.root}>
        <ImageBackground
          source={require("../../assets/images/BigHeader.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container}>
            <Text style={styles.text}>GROUND CONTROL</Text>
            <View style={styles.progression}>
              <Text style={styles.progressionDate}>
                {challenges[0].score.length}/31
              </Text>
            </View>
            <Text style={styles.progressionText}>Progress</Text>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <FlatList
            data={challenges}
            horizontal={true}
            keyExtractor={this._keyExtractor}
            renderItem={({ item: rowData }) => {
              return (
                <View>
                  <MainPageSessionCard
                    navigation={navigation}
                    session={session}
                    challenges={rowData}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default MainPage;
