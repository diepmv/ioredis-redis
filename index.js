import Redis from 'ioredis';

const redis = new Redis();

redis.set('name', "Mai Van Diep", "EX", 5);
redis.get("name", (err, result) => {
  console.log(result);
});

redis.incrby('address', 300);

redis.get("address", (err, result) => {
  console.log(result);
});

redis.mset("name", "Diep", "address", 36);
redis.mget("name", "address", (err, result) => {
  console.log(result);
});
