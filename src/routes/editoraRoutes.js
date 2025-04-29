const express = require("express");
const router = express.Router();
const editorasController = require("../controllers/editorasController");

router.get("/editoras", editorasController.getAllEditoras);
router.get("/editoras/:id", editorasController.getEditora);
router.post("/editoras", editorasController.createEditora);
router.put("/editoras/:id", editorasController.updateEditora);
router.delete("/editoras/:id", editorasController.deleteEditora);

module.exports = router;