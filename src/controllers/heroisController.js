const heroiModel = require("../models/heroiModel");

const getAllHerois = async (req, res) => {
    try {
        const { name } = req.query;
        const herois = await heroiModel.getHerois(name);
        res.status(200).json(herois);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar heróis." });
    }
};

const getHeroiById = async (req, res) => {
    try {
        const heroi = await heroiModel.getHeroiById(req.params.id);
        if (!heroi) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.status(200).json(heroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar herói." });
    }
};

const createHeroi = async (req, res) => {
    try {
        const { name, editora_id } = req.body;
        const newHeroi = await heroiModel.createHeroi(name, editora_id);
        res.status(201).json(newHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar herói." });
    }
};

const updateHeroi = async (req, res) => {
    try {
        const { name, editora_id } = req.body;
        const updateHeroi = await heroiModel.uptadeHeroi(req.params.id, name, editora_id);
        if (!updateHeroi) {
            return res.status(404).json({ message: "Herói não encontrado." });
        }
        res.status(200).json(updateHeroi);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar herói." });
    }
};

const deleteHeroi = async (req, res) => {
    try {
        const message = await heroiModel.deleteHeroi(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar herói." });
    }
};

module.exports = { getAllHerois, getHeroiById, createHeroi, updateHeroi, deleteHeroi };
