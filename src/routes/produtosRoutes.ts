import { Router } from "express";
import { CreateProduto, DeleteProdutoId, GetProdutosAll, GetProdutosId } from "../controllers/produtoController";

export const routerProdutos = Router();

routerProdutos.get("/produtos", GetProdutosAll);
routerProdutos.get("/produtos/:id", GetProdutosId)
routerProdutos.post("/produtos", CreateProduto);
//routerProdutos.put("/produtos/:id")
routerProdutos.delete("/produtos/:id", DeleteProdutoId);
