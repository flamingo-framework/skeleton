function route(): string {
  return 'ciao';
}

function fourofour(): string {
  return '404';
}

const errors = {
  fourofour: fourofour,
};

export {route, errors};
