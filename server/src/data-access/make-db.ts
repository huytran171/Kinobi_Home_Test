import mongoose from "mongoose";

export default async function makeDatabase(): Promise<typeof mongoose> {
  const connection_string = makeConnectionString();

  const not_connected = mongoose.connection.readyState === 0;
  not_connected && (await mongoose.connect(connection_string));

  console.log("Connected to mongoose");

  return mongoose;
}

export function makeConnectionString(): string {
  const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
    MONGO_INITDB_HOSTNAME,
  } = process.env;

  return `mongodb+srv://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_HOSTNAME}/?retryWrites=true&w=majority`;
}
