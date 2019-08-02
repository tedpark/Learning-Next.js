const Router = require("koa-router");
const router = new Router();

const auth = require("./authCheck.controller");
const users = require("./users.controller");
const todos = require("./todos.controller");

router.use("/auth", auth.routes());
router.use("/users", users.routes());
router.use("/todos", todos.routes());

module.exports = router;
