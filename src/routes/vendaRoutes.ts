import { Router, Request, Response } from "express";
import { prisma } from "../prisma/cliente";
import { IVendaModel } from "../models/vendaModel";

export const routerVendas = Router();

routerVendas.post("/venda/:id/produtos", async (req: Request, res: Response) => {
  try {
    const request: IVendaModel = req.body;
    const id_produto = Number(req.params.id)
    await prisma.venda.create({ data: request });
    await prisma.produto.update({
      where: { id: id_produto},
      data: { quantidade: { decrement: request.quantidade } },
    });
    res.status(201).json({ mensagem: "criado com sucesso" });
  } catch {
    res.status(400).json({ mensagem: "error ao criar venda" });
  }
});
