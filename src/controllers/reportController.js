const PDFDocument = require("pdfkit");

const heroiModel = require("../models/heroiModel");

const exportUserPDF = async (req, res) => {
    try {
        const herois = await heroiModel.getHerois();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=herois.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Lista de Heróis", { align: "center" });
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | Nome | Editora ID", {underline: true});
        doc.moveDown(2);

        //Conteúdo
        herois.forEach((heroi) => {
            doc.text(
                `${heroi.id} | ${heroi.name} | ${heroi.editora_id}`
            );
        });

        doc.end();
    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"});
    }
}

module.exports = { exportUserPDF };