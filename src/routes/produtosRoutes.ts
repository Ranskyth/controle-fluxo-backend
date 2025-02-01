import { Router } from "express";
import {
  CreateProduto,
  DeleteProdutoId,
  GetProdutosAll,
  GetProdutosId,
  UpdateProdutosId,
} from "../controllers/produtoController";

export const routerProdutos = Router();

routerProdutos.get("/produtos", GetProdutosAll);
routerProdutos.get("/produtos/:id", GetProdutosId);
routerProdutos.post("/produtos", CreateProduto);
routerProdutos.put("/produtos/:id", UpdateProdutosId);
routerProdutos.delete("/produtos/:id", DeleteProdutoId);
