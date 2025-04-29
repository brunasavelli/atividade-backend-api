const editoraModel = require("../models/editoraModel");

const getAllEditoras = async (req, res) => {
    try {
        const editoras = await editoraModel.getEditoras();
        res.json(editoras);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const getEditora = async (req, res) => {
    try {
        const editora = await editoraModel.getEditoraById(req.params.id);
        if (!editora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.json(editora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar editora." });
    }
};

const createEditora = async (req, res) => {
    try {
        const { name, criador } = req.body;
        const newEditora = await editoraModel.createEditora(name, criador);
        res.status(201).json(newEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar editora." });
    }
};

const updateEditora = async (req, res) => {
    try {
        const { name, criador } = req.body;
        const updateEditora = await editoraModel.updateEditora(req.params.id, name, criador);
        if (!updateEditora) {
            return res.status(404).json({ message: "Editora não encontrada." });
        }
        res.status(200).json(updateEditora);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar editora." });
    }
};

const deleteEditora = async (req, res) => {
    try {
        const message = await editoraModel.deleteEditora(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar editora." });
    }
};

module.exports = { getAllEditoras, getEditora, createEditora, updateEditora, deleteEditora };