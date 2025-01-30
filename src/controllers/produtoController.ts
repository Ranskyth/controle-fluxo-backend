import { Request, Response } from "express";
import { prisma } from "../prisma/cliente";
import { ProdutoModel } from "../models/produtoModel";

export const GetProdutosAll = async (req: Request, res: Response) => {
  const data = await prisma.produto.findMany();

  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ error: "Erro ao buscar produtos" });
  }
};

export const GetProdutosId = async (req: Request, res:Response) => {
  const idProduto = req.params.id

  const data = await prisma.produto.findMany({where : {id : Number(idProduto)}})
  res.status(200).json(data)
}

export const CreateProduto = async (req: Request, res: Response) => {
  try {
    const request: ProdutoModel = req.body;
    console.log(request);

    const create = await prisma.produto.create({ data: request });

    if (create) {
      res.status(201).json(create);
    }
  } catch (e) {
    res.status(400).json({ error: "Erro ao criar produto" });
  }
};

export const DeleteProdutoId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ error: "Id não informado" });
    }

    console.log(id);

    const data = await prisma.produto.delete({ where: { id: Number(id) } });

    res.status(200).json(data);
  } catch {
    res.status(400).json({ error: "Erro ao deletar produto" });
  }
};
