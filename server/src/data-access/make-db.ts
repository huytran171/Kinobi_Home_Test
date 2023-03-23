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
    MONGO_INITDB_PORT,
    MONGO_INITDB_DATABASE,
  } = process.env;

  return `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_HOSTNAME}:${MONGO_INITDB_PORT}/${MONGO_INITDB_DATABASE}?authSource=admin`;
}
