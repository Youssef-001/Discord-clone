/*
  Warnings:

  - The `avatar` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Servers" ADD COLUMN     "avatar" BYTEA;

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "avatar",
ADD COLUMN     "avatar" BYTEA;
