import express from "express";
import fs from "fs";

const router = express.Router();
const perfumes = JSON.parse(fs.readFileSync("./data/perfumes.json"));

// GET /api/perfumes
router.get("/", (req, res) => {
  res.json(perfumes);
});

// GET /api/perfumes/:id
router.get("/:id", (req, res) => {
  const perfume = perfumes.find(p => p.id === parseInt(req.params.id));
  perfume ? res.json(perfume) : res.status(404).json({ mensagem: "Perfume não encontrado" });
});

export default router;
