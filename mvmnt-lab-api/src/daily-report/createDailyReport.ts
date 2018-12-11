import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface DailyReport {
  id: string;
}

interface EventData {
  userId: string;
  pain: number;
  work: number;
  score: number;
  date: Date;
  painDescription: string;
  notes: string;
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const {
      userId,
      pain,
      work,
      score,
      date,
      painDescription,
      notes
    } = event.data;

    // create new pose
    const dailyReport = await createGraphcoolDailyReport(
      api,
      userId,
      pain,
      work,
      score,
      date,
      painDescription,
      notes
    );

    return { data: { dailyReport } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolDailyReport(
  api: GraphQLClient,
  userId: string,
  pain: number,
  work: number,
  score: number,
  date: Date,
  painDescription: string,
  notes: string
): Promise<string> {
  const mutation = `
      mutation createGraphcoolDailyReport($userId: String!, $pain: Int!, $work: Int!, $score: Float!, $date: DateTime!, $painDescription,: String!, $notes: String) {
        createPose(
          userId: $userId,
          pain: $pain,
          work: $work,
          score: $score,
          date: $date
        ) {
          id
        }
      }
    `;

  const variables = {
    userId,
    pain,
    work,
    score,
    date,
    painDescription,
    notes
  };

  return api
    .request<{ createDailyReport: DailyReport }>(mutation, variables)
    .then(r => r.createDailyReport.id);
}
