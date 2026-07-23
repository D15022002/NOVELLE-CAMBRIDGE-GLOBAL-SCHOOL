import app from "./app.js";
import { logger } from "./lib/logger.js";

declare const process: {
  env: Record<string, string | undefined>;
  exit(code?: number): never;
};

if (process.env.NODE_ENV !== "production") {
  const rawPort = process.env["PORT"];

  if (!rawPort) {
    throw new Error(
      "PORT environment variable is required but was not provided.",
    );
  }

  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  const server = app.listen(port, () => {
    logger.info({ port }, "Server listening");
  });

  server.on("error", (err: unknown) => {
    logger.error({ err }, "Error listening on port");
    process.exit(1);
  });
}

export default app;
