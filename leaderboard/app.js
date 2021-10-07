import express from "express";
import { createServer } from "http";
import { interviewRoutes } from ".";
import { json } from "body-parser";

class App {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(json());
  }

  routes() {
    this.app.use("/", interviewRoutes());
    this.app.use((req, res) => {
      req.log.warn(`Invalid Route: ${req.url}`);
      res.status(404).send("Invalid Route");
    });
  }
}

const app = new App();
const ipAddress = "0.0.0.0";
const port = 4000;
export default app.server.listen(port, ipAddress, () => {
  console.log(`App listening on ${ipAddress}:${port} process ${process.pid}`);
});
