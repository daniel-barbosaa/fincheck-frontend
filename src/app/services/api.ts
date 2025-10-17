import axios from "axios";
import { ENV } from "../utils/env";

export const api = axios.create({
  baseURL: ENV.API_URL,
});
