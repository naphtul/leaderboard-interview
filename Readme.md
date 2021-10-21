# The Meta Leaderboard Interview

## Paired Programming Exercise

Let's create a leaderboard together! Redis is perfect for this exercise! Haven't used Redis or Docker before, that's ok. We've got the command below to help with Docker and we'll help with Redis.

## Perquisites

- Download/install docker
- Download redis docker image
  - `docker pull redis`

## Getting Started

- Start redis docker tailing verbose logs
  - `docker run -p 6379:6379 --name leaderboard redis --loglevel verbose`
- Install node packages
- Start service

## ToDo's

- Post new score to leaderboard ([Redis - ZADD](https://redis.io/commands/zadd))
- Get all usernames/scores ([Redis - ZRANGE](https://redis.io/commands/zrange))
  - Return array of objects with format - [ { username: <USERNAME>, score: <SCORE>, rank: <RANK> }, { ... }, ... ]
