import express from "express";
import cors from "cors";
import fs from "fs";
import perfumesRouter from "./routes/perfumes.js";
const app = express();
app.use(cors());
app.use(express.json());

// Importar produtos diretamente do JSON
const produtos = JSON.parse(fs.readFileSync("./data/produtos.json"));

// Rota principal
app.get("/", (req, res) => {
  res.send("🚀 API da loja MZTech está online!");
});

// Rota de produtos
app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

// Rota de produto por ID
app.get("/api/produtos/:id", (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({ mensagem: "Produto não encontrado" });
  }
});

// Servir imagens locais da pasta frontend/img
app.use("/img", express.static("../frontend/img"));
app.use("/api/perfumes", perfumesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});





