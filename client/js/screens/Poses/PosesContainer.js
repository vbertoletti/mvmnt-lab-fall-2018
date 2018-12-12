import React, { Component } from "react";
import Poses from "./Poses";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { ActivityIndicator } from "react-native";
import styles from './styles'

const PosesQuery = gql`
  query allPoses {
    allPoses {
      id
      icon
      title
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
          if (loading)
            return (
              <ActivityIndicator style={styles.spinner}/>
            );
          if (data) {
            return <Poses navigation={this.props.navigation} data={data.allPoses} />;
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
