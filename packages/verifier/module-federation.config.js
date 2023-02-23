module.exports = {
  name: 'verifier',
  exposes: {
    './Module': 'packages/verifier/src/app/remote-entry/entry.module.ts',
  },
};
