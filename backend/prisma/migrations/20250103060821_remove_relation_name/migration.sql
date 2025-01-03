/*
  Warnings:

  - You are about to drop the `_UserServers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserServers" DROP CONSTRAINT "_UserServers_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserServers" DROP CONSTRAINT "_UserServers_B_fkey";

-- DropTable
DROP TABLE "_UserServers";

-- CreateTable
CREATE TABLE "_ServersToUsers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ServersToUsers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ServersToUsers_B_index" ON "_ServersToUsers"("B");

-- AddForeignKey
ALTER TABLE "_ServersToUsers" ADD CONSTRAINT "_ServersToUsers_A_fkey" FOREIGN KEY ("A") REFERENCES "Servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServersToUsers" ADD CONSTRAINT "_ServersToUsers_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
