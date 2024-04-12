const express = require("express");
require("dotenv").config()
const app = express();
const commentRoutes = require("./routes/commentRoutes");
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api/comments", commentRoutes);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
