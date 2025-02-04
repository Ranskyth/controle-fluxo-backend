/*
  Warnings:

  - The primary key for the `administrador` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "administrador" DROP CONSTRAINT "administrador_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "administrador_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "administrador_id_seq";
