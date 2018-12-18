import React, { Component } from "react";
import MainPage from "./MainPage";
import propTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";

const AllDataQuery = gql`
  {
    allChallenges {
      daysBetween
      endDate
      id
      score
      startDate
      userId
    }
    allPoses {
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
      <Query query={AllDataQuery}>
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading</Text>;
          if (error) return `${error}`;
          if (data) {
            return (
              <MainPage
                navigation={this.props.navigation}
                session={data.allPoses}
                challenges={data.allChallenges}
              />
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
