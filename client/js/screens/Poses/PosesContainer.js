import React, { Component } from "react";
import Poses from "./Poses";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";
import { formatSessionData } from "../../lib/helper";

const PosesQuery = gql`
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

class PosesContainer extends Component {
  static navigationOptions = {
    title: "POSES",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    return (
      <Query query={PosesQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return `${error}`;
          if (data) {
            return (
              <Poses
                navigation={this.props.navigation}
                poses={formatSessionData(data.allPoses)}
              />
            );
          }
        }}
      </Query>
    );
  }
}

PosesContainer.propTypes = {
  navigation: propTypes.object.isRequired
};

export default PosesContainer;
