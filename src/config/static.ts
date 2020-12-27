import {ConfigStaticInterface} from 'flamingo/src/interface/config';

const static_: ConfigStaticInterface = {
  active: true,
  version: 'default',

  path: '/static',
  // opts: {}, // koa-static options -> https://github.com/koajs/static
};

export {static_};
