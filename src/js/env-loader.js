import fs from "fs";

const env = fs.readFileSync("src\\.env", "utf-8");
const envVars = Object.fromEntries(
  env.split("\n").map((line) => line.split("=").map((part) => part.trim()))
);

export const VITE_NPS_API_KEY = envVars.VITE_NPS_API_KEY;