import React, { Component } from "react";
import EditProfile from "./EditProfile";
import { Text, ActivityIndicator, View, Image } from "react-native";
import { Query } from "react-apollo";
import UserContext from "../../context/UserContext/UserProvider";
import { QueryUser } from "../../apollo/index";
import PropTypes from "prop-types";

class EditProfileContainer extends Component {
  static navigationOptions = () => ({
    title: "EDIT PROFILE",
    headerTintColor: "white",
    headerBackground: (
      <Image source={require("../../assets/images/headerSmall.png")} />
    ),
    headerTitleStyle: {
      fontSize: 24
    }
  });
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => {
          return (
            <Query query={QueryUser} variables={{ id: id }}>
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <View style={{ flex: 1, justifyContent: "center" }}>
                      <ActivityIndicator size="large" color="#1CC6B1" />
                    </View>
                  );
                if (error) return <Text>`Error! ${error.message}`</Text>;
                if (data)
                  return (
                    <EditProfile
                      user={data.User}
                      id={id}
                      navigation={this.props.navigation}
                    />
                  );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default EditProfileContainer;

EditProfileContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};
