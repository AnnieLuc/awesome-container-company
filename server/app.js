import express from "express";
import cors from "cors";
import Router from "./routes/router.js";
import { config } from "dotenv";
import path from "path";

config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(Router);

// app.use(express.static("../public"));
app.use(express.static("../build"));

app.use((req, res, next) => {
  res.sendFile('../build/index.html');
});

const port = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(process.env.AWS_ACCESS_KEY_ID);
  console.log(process.env.AWS_SECRET_ACCESS_KEY);
});

// host page on s3 or github pages
// host backend on heroku or elatic beanstalk
