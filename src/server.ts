import * as express from "express";

import * as bodyParser from "body-parser";

// Constants
const PORT = 3000;

// App
const app = express();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Azure App Service test application using nodejs");
});

app.get("/headers", (req, res) => {
  res.json({
    headers: req.headers
  });
});

app.get("/envs", (_, res) => {
  res.json({
    APP_SECRET: process.env.APP_SECRET
  });
});

app.get("/throw", (_, __) => {
  throw new Error("You call me!");
});

const port = process.env.PORT || PORT;
app.listen(port);
