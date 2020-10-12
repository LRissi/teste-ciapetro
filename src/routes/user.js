module.exports = app => {
  const users = require("../controllers/customer.controller.js");
  app.post("/users", users.create);
  app.get("/users", users.findAll);
  app.get("/users/:userId", users.findOne);
};