const express = require("express");
const router = express.Router();
const heroisController = require("../controllers/heroisController");
// const upload = require("./../config/upload.js");

/**
 * @swagger
 * /api/herois:
 *   get:
 *     summary: Lista todos os heróis
 *     tags: [Herois]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/herois", heroisController.getAllHerois);

/**
 * @swagger
 * /api/herois/{id}:
 *   get:
 *     summary: Busca herói por ID
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói encontrado
 *       404:
 *         description: Herói não encontrado
 */
router.get("/herois/:id", heroisController.getHeroiById);

/**
 * @swagger
 * /api/herois:
 *   post:
 *     summary: Cria um novo herói
 *     tags: [Herois]
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
 *         description: Herói criado com sucesso
 */
router.post("/herois", heroisController.createHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   put:
 *     summary: Atualiza um herói
 *     tags: [Herois]
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
 *         description: Herói atualizado com sucesso
 */
router.put("/herois/:id", heroisController.updateHeroi);

/**
 * @swagger
 * /api/herois/{id}:
 *   delete:
 *     summary: Deleta um herói
 *     tags: [Herois]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Herói deletado com sucesso
 */
router.delete("/herois/:id", heroisController.deleteHeroi);

module.exports = router;