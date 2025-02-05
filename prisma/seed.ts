import { prisma } from "../src/prisma/cliente";

const seed = async () => {
  try {
    await prisma.admin.create({
      data: { id: 1, email: "user@gmail.com", password: "12345678"}
    });
    console.log("criado admim com sucesso");
  } catch {
    console.log("error ao criar o admim");
  } finally {
    prisma.$disconnect();
  }
};

seed();