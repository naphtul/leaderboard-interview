const redis = require('./redis').module;

const zadd = async (score, username) => {
    // redis.zadd("sortedSet", 1, "one", 2, "dos", 4, "quatro", 3, "three");
    let res;
    try {
        res = await redis.zadd("leaderboard", score, username);
    } catch (e) {
        console.error(e)
    }
    return res;
};

const zrange = async () => {
    // redis.zrange("sortedSet", 0, 2, "WITHSCORES").then((res) => console.log(res));
    let res;
    try {
        res = await redis.zrange("leaderboard", "0", "1000", "WITHSCORES");
    } catch (e) {
        console.error(e)
    }
    return res;
};

module.exports = {zadd, zrange};
