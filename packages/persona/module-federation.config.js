module.exports = {
  name: 'persona',
  exposes: {
    './Module': 'packages/persona/src/app/remote-entry/entry.module.ts',
  },
};
