-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "Titulo" TEXT NOT NULL,
    "Quantidade" INTEGER NOT NULL,
    "Preco" DOUBLE PRECISION NOT NULL,
    "Descricao" TEXT,
    "createde_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
