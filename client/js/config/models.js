import Realm from "realm";
const UserSchema = {
  name: "User",
  primaryKey: "id",
  properties: {
    id: "string",
    token: "string"
  }
};

const CoachSchema = {
  name: "Coach",
  primaryKey: "id",
  properties: {
    id: "string",
    token: "string"
  }
};
const realm = new Realm({ schema: [UserSchema, CoachSchema] });

export default realm;
