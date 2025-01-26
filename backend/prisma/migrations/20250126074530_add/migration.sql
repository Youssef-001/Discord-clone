/*
  Warnings:

  - Added the required column `date` to the `DMS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `DMS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DMS" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "message" TEXT NOT NULL;
