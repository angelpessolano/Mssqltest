import express from "express";
import productsRoutes from "./routes/products.routes";

const app = express();
//settings
//app.set('port',config.port)

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(productsRoutes);

export default app;
