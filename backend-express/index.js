const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");
const errorHandler = require("./middlewares/errrorHandle.js");
const path = require("path");

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.56.1",
  "http://152.42.207.88",
];

app.use(errorHandler);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed by CORD"));
      }
    },
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Asep");
});
app.use("/api", router);

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
