import { Router } from "express";
import {
  CreateProduto,
  DeleteProdutoId,
  GetProdutosAll,
  GetProdutosId,
  UpdateProdutosId,
  GetProdtutoParcial
} from "../controllers/produtoController";

export const routerProdutos = Router();

routerProdutos.get("/produtos", GetProdutosAll);
routerProdutos.get("/produtos/:id", GetProdutosId);
routerProdutos.get("/produtos/nome/:name", GetProdtutoParcial)
routerProdutos.post("/produtos", CreateProduto);
routerProdutos.put("/produtos/:id", UpdateProdutosId);
routerProdutos.delete("/produtos/:id", DeleteProdutoId);

