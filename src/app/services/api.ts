import axios from "axios";
import { ENV } from "../utils/env";
import { getStorageItem } from "../helpers/local-storage";
import { STORAGE_KEYS } from "../constants/storage-keys";
import { wait } from "../utils/wait";

export const api = axios.create({
  baseURL: ENV.API_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = getStorageItem(STORAGE_KEYS.accessToken);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// just to test latency
api.interceptors.response.use(async (data) => {
  await wait(500);
  return data;
});
