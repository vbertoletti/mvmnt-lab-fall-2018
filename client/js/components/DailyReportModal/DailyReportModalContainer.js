import React, { Component } from "react";
import gql from "graphql-tag";
import UserContext from "../../context/UserContext/UserProvider";
import DailyReportModal from "./DailyReportModal";
import { graphql, compose } from "react-apollo";

const CreateDailyReport = gql`
  mutation CreateDailyReport(
    $date: DateTime!
    $pain: Int!
    $score: Float!
    $work: Int!
    $userId: String!
    $painDescription: String!
    $notes: String!
  ) {
    createDailyReport(
      date: $date
      pain: $pain
      score: $score
      userId: $userId
      work: $work
      painDescription: $painDescription
      notes: $notes
    ) {
      id
    }
  }
`;

const CreateChallengeMutation = gql`
  mutation CreateChallenge(
    $endDate: DateTime!
    $startDate: DateTime!
    $score: [Float!]
    $userId: String!
    $daysBetween: Int!
  ) {
    createChallenge(
      endDate: $endDate
      startDate: $startDate
      score: $score
      userId: $userId
      daysBetween: $daysBetween
    ) {
      id
    }
  }
`;

const UpdateChallengeMutation = gql`
  mutation UpdateChallenge($id: ID!, $score: [Float!]) {
    updateChallenge(id: $id, score: $score) {
      id
    }
  }
`;

const AllChallengesQuery = gql`
  query AllChallenges {
    allChallenges {
      id
      startDate
      endDate
      score
    }
  }
`;

class DailyReportModalContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({}) => {
          return (
            <DailyReportModal
              createReport={this.props.createReport}
              updateChallenge={this.props.updateChallenge}
              allChallenges={this.props.allChallenges}
              createChallenge={this.props.createChallenge}
              userId={"cjpa5q4ip0ccn0130y1xdj32i"}
            />
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default compose(
  graphql(CreateDailyReport, {
    name: "createReport"
  }),
  graphql(UpdateChallengeMutation, {
    name: "updateChallenge"
  }),
  graphql(AllChallengesQuery, {
    name: "allChallenges"
  }),
  graphql(CreateChallengeMutation, {
    name: "createChallenge"
  })
)(DailyReportModalContainer);
