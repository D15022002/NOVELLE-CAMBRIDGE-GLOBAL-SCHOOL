import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import router from "./routes/index.js";
import { logger } from "./lib/logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend build
const publicPath = join(__dirname, "../../cambridge-montessori/dist/public");
app.use(express.static(publicPath));

// API Routes
app.use("/api", router);

// SPA fallback - serve index.html for all non-API routes
app.get(/^(?!\/api).*/, (_req, res) => {
  res.sendFile(join(publicPath, "index.html"));
});

export default app;
