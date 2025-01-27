import { Request, Response } from "express";
import { prisma } from "../prisma/cliente";

export const GetProdutos = (req:Request, res:Response) => {
  res.json({ message: "ok" }).status(200);
};

export const CreateProduto = (req:Request, res:Response) => {
  res.json({ message: "ok" }).status(201);
};