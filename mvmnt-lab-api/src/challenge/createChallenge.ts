import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface Challenge {
  id: string;
}

interface EventData {
  userId: string;
  score: [number];
  startDate: Date;
  endDate: Date;
  daysBetween: number;
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { userId, score, startDate, endDate, daysBetween } = event.data;

    const challenge = await createGraphcoolChallenge(
      api,
      userId,
      score,
      startDate,
      endDate,
      daysBetween
    );

    return { data: { challenge } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolChallenge(
  api: GraphQLClient,
  userId: string,
  score: [number],
  startDate: Date,
  endDate: Date,
  daysBetween: number
): Promise<string> {
  const mutation = `
      mutation createGraphcoolChallenge($userId: String!, $score: Float!, $date: DateTime!, $daysBetween: Int!) {
        createChallenge(
          userId: $userId,
          score: $score,
          date: $date,
          daysBetween: $daysBetween
        ) {
          id
        }
      }
    `;

  const variables = {
    userId,
    score,
    startDate,
    endDate,
    daysBetween
  };

  return api
    .request<{ createChallenge: Challenge }>(mutation, variables)
    .then(r => r.createChallenge.id);
}
