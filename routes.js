import { Router } from "express";

export const interviewRoutes = () => {
  const router = Router();

  router.get("/", async (_req, res) => {
    log.warn("Health Check");
    return res.status(200).send({ success: true });
  });

  return router;
};
