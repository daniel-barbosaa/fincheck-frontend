import Clarity from "@microsoft/clarity";
import { ENV } from "../utils/env";

if (import.meta.env.PROD) {
  Clarity.init(ENV.CLARITY_ID);
}
