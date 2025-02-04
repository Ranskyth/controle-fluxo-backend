import { prisma } from "../src/prisma/cliente";


const seed = async () => {
  prisma.admin.create({
    data: {id: "1", email: "user@gmail.com", password: "123" },
  });
};


seed().then(() => {
    console.log("create admin")
    prisma.$disconnect()
})