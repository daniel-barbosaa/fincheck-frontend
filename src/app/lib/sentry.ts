import * as Sentry from "@sentry/react";
import { ENV } from "../utils/env";

if (import.meta.env.PROD) {
  Sentry.init({
    enabled: import.meta.env.PROD,
    dsn: ENV.SENTRY_DSN,
    sendDefaultPii: true,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    tracePropagationTargets: [
      "localhost",
      /^https:\/\/fincheckapi-1\.onrender\.com/,
    ],
  });
}
