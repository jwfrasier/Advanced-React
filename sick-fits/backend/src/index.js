require("dotenv").config({ path: "variables.env" });
const createServer = require("createServer");
const db = require("./db");
const server = createServer();

// todo use express middleware to handle cookies (JWT)

//TODO use express middleware to populate current users

server.start(
    {
        cors: {
            credentials: true,
            origin.process.env
        }
    }
)