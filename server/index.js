import express from "express"; //Framework for APIs
import bodyParser from "body-parser"; //Parsing data coming in
import mongoose from "mongoose"; //For handling MongoDB calls
import cors from "cors"; //For cross-origin resource sharing
import dotenv from "dotenv"; //FOr env variables
import helmet from "helmet"; //For protecting APIs
import morgan from "morgan"; //For logging API calls

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* CONFIGURATION */
dotenv.config(); //for setting up env variables
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //Allows for cross-rigin sharing requests

//For making API calls from another server
app.use(morgan("common"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000; //use 9000 if 5001 is unavailable
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
