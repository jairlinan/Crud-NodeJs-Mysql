const express = require("express");
const router = express.Router();

  

const controller = require("../controllers/customerControllers");

router.get("/", controller.list);
router.post("/add", controller.save);
router.get("/update/:id", controller.edit);
router.post("/update/:id", controller.update);
router.get("/delete/:id", controller.delete);


module.exports = router;