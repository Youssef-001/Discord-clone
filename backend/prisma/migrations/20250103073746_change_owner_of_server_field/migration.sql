/*
  Warnings:

  - You are about to drop the column `userId` on the `Servers` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `Servers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Servers" DROP CONSTRAINT "Servers_userId_fkey";

-- AlterTable
ALTER TABLE "Servers" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Servers" ADD CONSTRAINT "Servers_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
