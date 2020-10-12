module.exports = app => {
  const history = require("../controllers/history.js");
  app.get("/listCoins", history.list);
  app.post("/convert", history.convert);
  //app.get("/users/:userId", users.findOne);
};