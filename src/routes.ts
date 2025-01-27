import { Router } from "express";
import { GetProdutos } from "./controllers/produtoController";

export const router = Router();

router.get("/produtos", GetProdutos);
