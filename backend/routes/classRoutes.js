const router = require("express").Router();

const {
  createClass,
} = require("../controllers/classController");

router.post("/create", createClass);

module.exports = router;