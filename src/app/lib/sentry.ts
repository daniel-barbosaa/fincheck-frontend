import * as Sentry from "@sentry/react";
import { ENV } from "../utils/env";

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: ENV.SENTRY_DSN,
    sendDefaultPii: true,
    integrations: [Sentry.browserTracingIntegration()],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/fincheckapi-1\.onrender\.com/,
    ],
  });
}
