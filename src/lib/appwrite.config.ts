import * as sdk from "node-appwrite";

const client = new sdk.Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_APPWRITE_PROJECT!)
  .setKey(process.env.NEXT_APPWRITE_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
