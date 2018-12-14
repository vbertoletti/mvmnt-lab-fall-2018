import React, { Component } from "react";
import UserContext from "../../context/UserContext/UserProvider";
import DailyReportModal from "./DailyReportModal";
import { graphql, compose } from "react-apollo";
import { CreateDailyReport } from "../../apollo";
import { CreateChallengeMutation } from "../../apollo";
import { UpdateChallengeMutation } from "../../apollo";
import { AllChallengesQuery } from "../../apollo";

class DailyReportModalContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ id }) => {
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
