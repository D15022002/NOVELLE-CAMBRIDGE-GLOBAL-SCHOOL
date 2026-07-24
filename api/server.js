let app;

module.exports = async (req, res) => {
  if (!app) {
    ({ default: app } = await import("../artifacts/api-server/dist/index.mjs"));
  }
  return app(req, res);
};
