/*
  Warnings:

  - You are about to drop the column `Descricao` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `Preco` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `Quantidade` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `Titulo` on the `produtos` table. All the data in the column will be lost.
  - Added the required column `preco` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `produtos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "produtos" DROP COLUMN "Descricao",
DROP COLUMN "Preco",
DROP COLUMN "Quantidade",
DROP COLUMN "Titulo",
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "quantidade" INTEGER NOT NULL,
ADD COLUMN     "titulo" TEXT NOT NULL;
