const express = require("express");
const usersRoutes = require("./routes/users");
const app = express();
const middlewareLogRequest = require("./middleware/logs");

// app.method(path, handler)

app.use(middlewareLogRequest);

app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("server berhasil di running di prot 3000");
});
