/*
  Warnings:

  - You are about to drop the `_ServersToUsers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Servers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ServersToUsers" DROP CONSTRAINT "_ServersToUsers_A_fkey";

-- DropForeignKey
ALTER TABLE "_ServersToUsers" DROP CONSTRAINT "_ServersToUsers_B_fkey";

-- AlterTable
ALTER TABLE "Servers" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ServersToUsers";

-- CreateTable
CREATE TABLE "UserFriends" (
    "userId" TEXT NOT NULL,
    "friendId" TEXT NOT NULL,

    CONSTRAINT "UserFriends_pkey" PRIMARY KEY ("userId","friendId")
);

-- CreateTable
CREATE TABLE "_UserServers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_UserServers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserServers_B_index" ON "_UserServers"("B");

-- AddForeignKey
ALTER TABLE "UserFriends" ADD CONSTRAINT "UserFriends_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFriends" ADD CONSTRAINT "UserFriends_friendId_fkey" FOREIGN KEY ("friendId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servers" ADD CONSTRAINT "Servers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserServers" ADD CONSTRAINT "_UserServers_A_fkey" FOREIGN KEY ("A") REFERENCES "Servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserServers" ADD CONSTRAINT "_UserServers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
