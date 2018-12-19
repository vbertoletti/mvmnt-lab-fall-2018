import React, { Component } from "react";
import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import Profile from "./Profile";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import CoachContext from "../../context/CoachContext/CoachProvider";
import PropTypes from "prop-types";

const profileScreenQuery = gql`
  query($id: ID!) {
    User(id: $id) {
      id
      firstname
      lastname
      image
    }
  }
`;

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: "PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerRight: (
      <CoachContext.Consumer>
        {({ id }) => {
          if (!id) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("EditProfile");
                }}
              >
                <Text style={{ color: "white", marginRight: 8 }}>EDIT</Text>
              </TouchableOpacity>
            );
          }
        }}
      </CoachContext.Consumer>
    )
  });

  render() {
    return (
      <UserContext.Consumer>
        {({ removeUserIdToken, id }) => {
          if (!id) {
            return (
              <CoachContext.Consumer>
                {({ id }) => {
                  if (!id) {
                    this.props.navigation.navigate("Auth");
                  } else {
                    userId = this.props.navigation.getParam("userId");
                    return (
                      <Query
                        query={profileScreenQuery}
                        variables={{ id: userId }}
                      >
                        {({ loading, error, data }) => {
                          if (loading)
                            return (
                              <View
                                style={{ flex: 1, justifyContent: "center" }}
                              >
                                <ActivityIndicator
                                  size="large"
                                  color="#1CC6B1"
                                />
                              </View>
                            );
                          if (error) return <Text>{error}</Text>;
                          if (data) {
                            return (
                              <Profile
                                navigation={this.props.navigation}
                                data={data}
                                logout={removeUserIdToken}
                                id={userId}
                                coachId={id}
                              />
                            );
                          }
                        }}
                      </Query>
                    );
                  }
                }}
              </CoachContext.Consumer>
            );
          } else {
            return (
              <Query query={profileScreenQuery} variables={{ id }}>
                {({ loading, error, data }) => {
                  if (loading)
                    return (
                      <View style={{ flex: 1, justifyContent: "center" }}>
                        <ActivityIndicator size="large" color="#1CC6B1" />
                      </View>
                    );
                  if (error) return <Text>{error}</Text>;
                  if (data) {
                    return (
                      <Profile
                        navigation={this.props.navigation}
                        data={data}
                        logout={removeUserIdToken}
                        id={id}
                      />
                    );
                  }
                }}
              </Query>
            );
          }
        }}
      </UserContext.Consumer>
    );
  }
}

export default ProfileContainer;

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
