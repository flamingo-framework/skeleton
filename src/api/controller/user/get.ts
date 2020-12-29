import {
  Boolean,
  Number,
  String,
  Literal,
  Array,
  Tuple,
  Record,
  Union,
  Static,
  Contract,
} from 'runtypes';

const input = Record({
  id: Number,
});
type input = Static<typeof input>;

const output = Record({
  id: Number,
});
type output = Static<typeof output>;

function route(inp: input): output {
  return inp;
}

function fourofour(): string {
  return '404';
}

function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const c = {
  id: Number,
};
type Keys = keyof typeof c;

const q = '/user/:id'.split('/').filter(x => x.indexOf(':') === -1);

const x: Keys = q[0];

prop(c, '/user/:id');

const errors = {
  fourofour: fourofour,
};

export {route, errors};
