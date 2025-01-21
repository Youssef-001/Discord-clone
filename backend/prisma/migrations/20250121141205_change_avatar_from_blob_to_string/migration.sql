/*
  Warnings:

  - Made the column `avatar` on table `Servers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Servers" ALTER COLUMN "avatar" SET NOT NULL,
ALTER COLUMN "avatar" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "avatar" SET NOT NULL,
ALTER COLUMN "avatar" SET DATA TYPE TEXT;
