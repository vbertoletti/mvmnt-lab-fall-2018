import React, { Component } from "react";
import PosesDetails from "./PosesDetails";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";

const PoseDetailsQuery = gql`
  query Pose($id: ID) {
    Pose(id: $id) {
      description
      duration
      icon
      title
      video
    }
  }
`;

class PosesDetailsContainer extends Component {
  static navigationOptions = {
    title: "POSES",
    headerTitleStyle: {
      color: "white",
      fontSize: 24
    }
  };
  render() {
    // const { id } = this.props.navigation.state.params;
    return (
      <Query
        query={PoseDetailsQuery}
        variables={{ id: "cjpk4j09b05sy0197umf9kqkf" }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return <Text>`${error}`</Text>;
          if (data) {
            return <PosesDetails posesDetails={data.Pose} />;
          }
        }}
      </Query>
    );
  }
}

PosesDetailsContainer.propTypes = {
  poses: propTypes.object.isRequired
};

export default PosesDetailsContainer;
