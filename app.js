const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const router = require("./routes/routes");
const userRoute = require("./routes/user");

//db connection
const db = require("./config/key").mongoUrl;

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");
// routes
app.use("/", router);
app.use("/user", userRoute);

app.use((req, res, next) => {
  res.render("404");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("App listening on port ${PORT}!");
});
