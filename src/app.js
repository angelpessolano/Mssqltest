import express from "express";
import allRoutes from "./routes/all.routes";


var cors = require('cors')

const app = express();



  
//settings
//app.set('port',config.port)

app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: false }));
app.use(allRoutes);


export default app;
