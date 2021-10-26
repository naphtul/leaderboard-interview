const {orderBy} = require('lodash');
const Router = require("express").Router;

const {zadd, zrange} = require("./leaderboard");

const interviewRoutes = () => {
  const router = Router();

  router.get("/", async (_req, res) => {
    console.log("Health Check");
    return res.status(200).send({ success: true });
  });

  router.post("/leaderboard", async (req, res) => {
    // TODO: implement input validation
    const retVal = await zadd(req.query.score, req.query.username);
    console.log(retVal);
    return res.status(200).send({ retVal });
  });

  router.get("/leaderboard", async (req, res) => {
    // TODO: implement input validation
    const zres = await zrange();
    let scores = [];
    for (let i=0; i<zres.length; i=i+2) {
      scores.push({username: zres[i], score: zres[i+1], rank: 0})
    }
    scores = orderBy(scores, 'score', 'desc');
    scores[0].rank = 1;
    for (let i=1; i<scores.length; i++) {
      if (scores[i].score === scores[i-1].score) {
        scores[i].rank = scores[i-1].rank;
      } else {
        scores[i].rank = scores[i-1].rank+1;
      }
    }
    console.log(scores);
    return res.status(200).send(scores);
  });

  return router;
};

exports.interviewRoutes = interviewRoutes;
