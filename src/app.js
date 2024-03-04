import express from "express";
import productsRoutes from "./routes/products.routes";

var cors = require('cors')

const app = express();



  
//settings
//app.set('port',config.port)

app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: false }));
app.use(productsRoutes);

export default app;
