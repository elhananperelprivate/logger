module.exports = {
  name: 'remote1',
  exposes: {
    './Routes': 'apps/remote1/src/app/remote-entry/entry.routes.ts',
  },
};
