import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface Challenge {
  id: string;
}

interface EventData {
  userId: string;
  score: [number];
  date: Date;
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { userId, score, date } = event.data;

    const challenge = await createGraphcoolChallenge(api, userId, score, date);

    return { data: { challenge } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolChallenge(
  api: GraphQLClient,
  userId: string,
  score: [number],
  date: Date
): Promise<string> {
  const mutation = `
      mutation createGraphcoolChallenge($userId: String!, $score: Float!, $date: DateTime!) {
        createChallenge(
          userId: $userId,
          score: $score,
          date: $date
        ) {
          id
        }
      }
    `;

  const variables = {
    userId,
    score,
    date
  };

  return api
    .request<{ createChallenge: Challenge }>(mutation, variables)
    .then(r => r.createChallenge.id);
}
