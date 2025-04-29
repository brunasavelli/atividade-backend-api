const pool = require("../config/database");

const getEditoras = async () => {
    const result = await pool.query("SELECT * FROM editoras");
    return result.rows;
};

const getEditoraById = async (id) => {
    const result = await pool.query("SELECT * FROM editoras WHERE id = $1", [id]);
    return result.rows[0];
};

const createEditora = async (name, criador) => {
    const result = await pool.query(
        "INSERT INTO editoras (name, criador) VALUES ($1, $2) RETURNING *",
        [name, criador]
    );
    return result.rows[0];
};

const updateEditora = async (id, name, criador) => {
    const result = await pool.query("UPDATE editoras SET name = $1, criador = $2 WHERE id = $3 RETURNING *", [name, criador, id]);
    return result.rows[0];
};

const deleteEditora = async (id) => {
    const result = await pool.query("DELETE FROM editoras WHERE id = $1 RETURNING *", [id]);
    return { message: `Editora de id ${id} deletada com sucesso.`};
};

module.exports = { getEditoras, getEditoraById, createEditora, updateEditora, deleteEditora };