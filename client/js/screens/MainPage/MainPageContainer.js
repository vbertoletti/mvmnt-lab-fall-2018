import React, { Component } from "react";
import MainPage from "./MainPage";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";

const SessionQuery = gql`
  query allPoses($filter: PoseFilter) {
    allPoses(filter: $filter) {
      description
      duration
      icon
      id
      title
      video
    }
  }
`;

class MainPageContainer extends Component {
  static navigationOptions = {
    title: "GROUND CONTROL",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return (
      <Query query={SessionQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return `${error}`;
          if (data) {
            return (
              <MainPage navigation={this.props.navigation} session={data} />
            );
          }
        }}
      </Query>
    );
  }
}

MainPageContainer.propTypes = {
  session: propTypes.object.isRequired
};

export default MainPageContainer;
