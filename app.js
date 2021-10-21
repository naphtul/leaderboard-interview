import express from "express";
import { createServer } from "http";
import { interviewRoutes } from "./routes";
import { _redis } from "./redis";

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
export default app.server.listen(port, ipAddress, () => {
  console.log(`App listening on ${ipAddress}:${port} process ${process.pid}`);
});
