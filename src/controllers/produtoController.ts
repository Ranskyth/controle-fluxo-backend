import { Request, Response } from "express";
import { prisma } from "../prisma/cliente";
import { ProdutoModel } from "../models/produtoModel";

export const GetProdutosAll = async (req:Request, res:Response) => {
  const data = await prisma.produto.findMany()

  if(data){
    res.status(200).json(data);
  }else{
    res.status(400).json({error: "Erro ao buscar produtos"});
  }
};

export const CreateProduto = async (req:Request, res:Response)=> {
  try{
    const request:ProdutoModel = req.body;

  if(!request.titulo || !request.preco || !request.quantidade){
    res.status(400).json({error: "Dados inválidos"});
  }

  if(request.preco <= 0 || request.quantidade <= 0){
    res.status(400).json({error: "Preço e quantidade devem ser maiores que 0"});
  }

  console.log(request);

  const create = await prisma.produto.create({data: request});

  if(create){
    res.status(201).json(create);
  }else{
    res.status(400).json({error: "Erro ao criar produto"});
  }
  }catch(e){
    res.status(400).json({error: "Erro ao criar produto"});
  }
};

export const DeleteProdutoId = async (req:Request, res:Response) => {
  const { id } = req.params;

  const data = await prisma.produto.delete({where: {id: Number(id)}});

  res.status(200).json(data);
}