import { config } from "dotenv";
config();
console.log("Valor", process.env.PORT);

export const PORT = process.env.PORT || 3000;
