# How to run?

Move to the server and user-dashboard folder and run them as separate parts.

### Run the server:

1. cd server
2. Fill in the `.env` file
3. Start the docker containers: `yarn dc:up`
4. `yarn install`
5. `yarn dev`
6. Server now listening on `http://localhost:3001`

### Run the user-dashboard:

1. cd user-dashboard
2. Fill in the `.env` file
3. `yarn install`
4. `yarn dev`
5. User-dashboard now listening on `http://localhost:3002`
