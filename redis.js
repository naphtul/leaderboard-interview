import Redis from "ioredis";

export const redis = new Redis({ enableReadyCheck: true });

redis.on("ready", () => {
  console.info("Redis: Connected");
});

redis.on("error", (error) => {
  console.error(`Redis Error: ${error}`);
});

redis.on("reconnecting", () => {
  console.error("Redis attempting reconnect...");
});
