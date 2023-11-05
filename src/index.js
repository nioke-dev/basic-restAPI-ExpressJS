require("dotenv").config();
const port = process.env.PORT;
const express = require("express");
const usersRoutes = require("./routes/users");
const app = express();
const middlewareLogRequest = require("./middleware/logs");

// app.method(path, handler)

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`server berhasil di running di prot ${port}`);
});
