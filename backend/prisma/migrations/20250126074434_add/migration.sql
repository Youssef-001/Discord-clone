-- CreateTable
CREATE TABLE "DMS" (
    "id" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,

    CONSTRAINT "DMS_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DMS" ADD CONSTRAINT "DMS_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DMS" ADD CONSTRAINT "DMS_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
