export default function makeDatabase() {
  const username = process.env.MONGO_INITDB_ROOT_USERNAME || "root";
  const password = process.env.MONGO_INITDB_ROOT_PASSWORD || "root";
  const host = process.env.MONGO_INITDB_HOST || "localhost";
  const port = process.env.MONGO_INITDB_PORT || 27017;

  const connection_string = `mongodb://${username}:${password}@${host}:${port}]`;
}
