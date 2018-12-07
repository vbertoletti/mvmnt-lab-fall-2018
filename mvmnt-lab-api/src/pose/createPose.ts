import { fromEvent, FunctionEvent } from "graphcool-lib";
import { GraphQLClient } from "graphql-request";

interface Pose {
  id: string;
}

interface EventData {
  icon: string;
  title: string;
  duration: string;
  video: string;
}

export default async (event: FunctionEvent<EventData>) => {
  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const { icon, title, duration, video } = event.data;

    // create new pose
    const pose = await createGraphcoolPose(api, icon, title, duration, video);

    return { data: { pose } };
  } catch (e) {
    return { error: e };
  }
};

async function createGraphcoolPose(
  api: GraphQLClient,
  icon: string,
  title: string,
  duration: string,
  video: string
): Promise<string> {
  const mutation = `
      mutation createGraphcoolPose($icon: String!, $title: String!, $duration: String!, $video: String!) {
        createPose(
          icon: $email,
          title: $password,
          duration: $firstname,
          video: $lastname
        ) {
          id
        }
      }
    `;

  const variables = {
    icon,
    title,
    duration,
    video
  };

  return api
    .request<{ createPose: Pose }>(mutation, variables)
    .then(r => r.createPose.id);
}
