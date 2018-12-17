import React, { Component } from "react";
import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native";
import Profile from "./Profile";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
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

const challengesQuery = gql`
  query AllChallenges {
    allChallenges {
      id
      startDate
      endDate
      score
    }
  }
`;

class ProfileContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "PROFILE",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    },
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
      >
        <Text style={{ color: "white", marginRight: 8 }}>EDIT</Text>
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <UserContext.Consumer>
        {({ removeUserIdToken, id }) => {
          if (!id) {
            this.props.navigation.navigate("Auth");
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
                        allChallenges={allChallenges}
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

export default compose(
  graphql(challengesQuery, {
    name: "allChallenges"
  })
)(ProfileContainer);

// export default ProfileContainer;

ProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
