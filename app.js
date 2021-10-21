const express = require("express");
const createServer = require("http").createServer;
const interviewRoutes = require("./routes").interviewRoutes;
const _redis = require("./redis").redis;

class App {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", interviewRoutes());
    this.app.use((_req, res) => {
      res.status(404).send("Invalid Route");
    });
  }
}

const app = new App();
const ipAddress = "0.0.0.0";
const port = 5000;
app.server.listen(port, ipAddress, () => {
  console.log(`App listening on ${ipAddress}:${port} process ${process.pid}`);
});
