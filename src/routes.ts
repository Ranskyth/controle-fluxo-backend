import { Router } from "express";
import { CreateProduto, DeleteProdutoId, GetProdutosAll } from "./controllers/produtoController";

export const router = Router();

router.get("/produtos", GetProdutosAll);
router.post("/produtos", CreateProduto);
router.delete("/produtos/:id", DeleteProdutoId);
