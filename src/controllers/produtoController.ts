import { Request, Response } from "express";
import { prisma } from "../prisma/cliente";
import { ProdutoModel } from "../models/produtoModel";
import { GetProdutosAllServices } from "../services/produtoServices";

export const GetProdutosAll = async (req: Request, res: Response) => {
  const data = await prisma.produto.findMany({orderBy:{id:"asc"}});

  const request = GetProdutosAllServices(data);

  res.status(200).json(request);
};

export const GetProdtutoParcial = async (req:Request, res:Response) => {
 try{
  const name = req.params.name
  if(name === "" || name === undefined || name === null){
    res.status(400).json({mensagem:"nome do produto vazio"})
  }
  const data = await prisma.produto.findMany({
    where : {
      titulo : {
        startsWith: String(name),
        mode: "insensitive" 
      }
    }
  })
  res.status(200).json(data)
}
catch{
  res.status(400).json({msg:"error in /produtos/nome/:nome"})
}
}

export const GetProdutosId = async (req: Request, res: Response) => {
  try{
  const idProduto = req.params.id;

  const data = await prisma.produto.findMany({
    where: { id: Number(idProduto) },
  });
  res.status(200).json(data);
}catch{
  res.status(400).json({mensagem:"error in /produtos/:id"})
}
};

export const UpdateProdutosId = async (req: Request, res: Response) => {
  const IdProduto = Number(req.body.id)
  const Produto: ProdutoModel = req.body;

  try {
    await prisma.produto.update({
      where: { id: IdProduto },
      data: Produto,
    });

    res.status(204).json({ message: `updade in id ${IdProduto}` });
  } catch {
    res.status(400).json({ message: "error in update produto" });
  }
};

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
