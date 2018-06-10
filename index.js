import Redis from 'ioredis';

const redis = new Redis();

redis.set('name', "Mai Van Diep");
redis.get("name", (err, result) => {
  console.log(result);
})
