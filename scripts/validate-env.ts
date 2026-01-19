import { z } from "zod";
import "dotenv/config";

const urlString = z.string().refine((value) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
});

const clientSchema = z.object({
  VITE_API_URL: urlString,
  VITE_SENTRY_DSN: urlString,
  VITE_CLARITY_ID: z.string().optional(),
});

const ciSchema = z.object({
  SENTRY_AUTH_TOKEN: z.string().min(1),
});

const clientParsed = clientSchema.safeParse(process.env);

// Validate environment variables for the client.
if (!clientParsed.success) {
  console.error("❌ Missing or invalid environment variables:\n");

  const tree = z.treeifyError(clientParsed.error);

  for (const key in tree.properties) {
    console.error(`- ${key}`);
  }

  process.exit(1);
}

// Validate environment variables for CI only.
// Avoid validating secrets outside of CI.
if (process.env.CI === "true") {
  const ciParsed = ciSchema.safeParse(process.env);

  if (!ciParsed.success) {
    console.error("❌ Invalid CI environment variables:\n");
    const tree = z.treeifyError(ciParsed.error);

    for (const key in tree.properties) {
      console.error(`- ${key}`);
    }

    process.exit(1);
  }
}

console.log("✅ Environment variables validated");
