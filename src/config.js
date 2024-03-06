import { config } from "dotenv";
config();
console.log("Valor", process.env.PORT);

export const PORT = process.env.PORT || 3000;
export const DB_NAME = process.env.DB_NAME || '';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const SERVER_NAME = process.env.SERVER_NAME || '';