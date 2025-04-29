const express = require("express");
const router = express.Router();
const editorasController = require("../controllers/editorasController");
const apiKeyMiddleware = require("./../config/apiKey");

router.use(apiKeyMiddleware);

/**
 * @swagger
 * /api/editoras:
 *   get:
 *     summary: Lista todas as editoras
 *     tags: [Editoras]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/editoras", editorasController.getAllEditoras);

/**
 * @swagger
 * /api/editoras/{id}:
 *   get:
 *     summary: Busca editora por ID
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora encontrada
 *       404:
 *         description: Editora não encontrada
 */
router.get("/editoras/:id", editorasController.getEditora);

/**
 * @swagger
 * /api/editoras:
 *   post:
 *     summary: Cria uma nova editora
 *     tags: [Editoras]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Editora criada com sucesso
 */
router.post("/editoras", editorasController.createEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   put:
 *     summary: Atualiza uma editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Editora atualizada com sucesso
 */
router.put("/editoras/:id", editorasController.updateEditora);

/**
 * @swagger
 * /api/editoras/{id}:
 *   delete:
 *     summary: Deleta uma editora
 *     tags: [Editoras]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Editora deletada com sucesso
 */
router.delete("/editoras/:id", editorasController.deleteEditora);

module.exports = router;