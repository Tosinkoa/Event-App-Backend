const dbConnect = require("./src/lib/dbConnect.js");
const express = require("express");
const rootRoute = require("./src/root_Route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

dbConnect();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://ivana-event.netlify.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => res.send("API running..."));

rootRoute(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`Server running on PORT:${5000}`));
