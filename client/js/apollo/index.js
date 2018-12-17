import gql from "graphql-tag";

export const CreateDailyReport = gql`
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

export const CreateChallengeMutation = gql`
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

export const UpdateChallengeMutation = gql`
  mutation UpdateChallenge($id: ID!, $score: [Float!]) {
    updateChallenge(id: $id, score: $score) {
      id
    }
  }
`;

export const AllChallengesQuery = gql`
  query AllChallenges {
    allChallenges {
      id
      startDate
      endDate
      score
    }
  }
`;