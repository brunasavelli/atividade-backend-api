require("dotenv").config();
const express = require("express");
const cors = require("cors");
const heroiRoutes = require("./src/routes/heroiRoutes");
const editoraRoutes = require("./src/routes/editoraRoutes");
const setupSwagger = require('./src/config/swagger');
const reportRoutes = require('./src/routes/reportRoutes');
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("/api", heroiRoutes);
app.use("/api", editoraRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
