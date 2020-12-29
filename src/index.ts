import {flamingo} from 'flamingo';

console.log('flamingo state', flamingo);

flamingo.app.use(async (ctx, next) => {
  ctx.body = 'hello world!';

  await next();
});

flamingo.app.listen(3000);
